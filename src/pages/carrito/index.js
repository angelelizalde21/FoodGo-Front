import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Componentes
import Contenedor from './components/contenedor';

const LOGED_USER_DATA = gql`
query {
    userState @client {
        userData {
        _id
        nombre
        email
        avatar
        genero
        }
  }
}
`;

const BUZON = gql`

 query getBuzon($data: BuzonInput) {
    getBuzon(data: $data){
      _id
    usuario {
      _id
      nombre
    }
    detalle {
      restaurante {
        _id
        nombre
      }
      platillo {
        _id
        nombre
      }
      cantidad
    }
  }
}
`;

const EDITAR_BUZON = gql`
  mutation updateBuzon($data: BuzonUpdateInput) {
    updateBuzon(data: $data) {
      usuario {
          _id
          nombre
      }
    }
  }
`;

const Delete_BUZON = gql`
  mutation deleteBuzon($usuarioID: ID) {
    deleteBuzon(usuarioID: $usuarioID) {
      _id
    }
  }
`;

const Carrito = ({ open, handleClose }) => {
  const { data: LoginUser } = useQuery(LOGED_USER_DATA);
  const { data: BuzonData, refetch } = useQuery(BUZON, { variables: { data: { usuario: LoginUser.userState.userData._id } } });

  const [updateBuzon] = useMutation(EDITAR_BUZON);
  const [deleteBuzon] = useMutation(Delete_BUZON);

  useEffect(() => {
    refetch();
  }, [])

  const handleEliminarPlatillo = async (tile, Datos) => {
    const buzon = Datos;

    const newData = {
      _id: buzon._id,
      usuario: buzon.usuario._id,
    }

    newData.detalle = [];
    // Se agregan platillos existentes
    buzon.detalle.forEach(item => {
      newData.detalle.push({
        restaurante: item.restaurante._id,
        platillo: item.platillo._id,
        cantidad: 1,
      })
    });

    // Eliminar id

    const index = newData.detalle.indexOf(tile);
    newData.detalle.splice(index);

    // Si es el ultimo registro eliminar 
    if (newData.detalle.length === 0) {
      deleteBuzon({
        variables: {
          usuarioID: newData.usuario
        }
      })
    } else {
      updateBuzon({
        variables: {
          data: {
            _id: newData._id,
            usuario: newData.usuario,
            detalle: newData.detalle
          }
        }
      })
    }

    // Reacrgar consulta
    refetch();
  }

  return <Drawer anchor="right" open={open} onClose={handleClose} style={{ width: '150' }}>
    {BuzonData && <Contenedor handleClose={handleClose} Datos={BuzonData.getBuzon[0]} handleEliminarPlatillo={handleEliminarPlatillo} />}
  </Drawer>
}

export default Carrito;