import React from 'react';
import { GridListTile, GridListTileBar, IconButton, Icon } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const AGREAR_BUZON = gql`
  mutation updateBuzon($data: BuzonUpdateInput) {
    updateBuzon(data: $data) {
      usuario {
          _id
          nombre
      }
    }
  }
`;

const NUEVO_BUZON = gql`
  mutation addBuzon($data: BuzonInput) {
    addBuzon(data: $data) {
      usuario {
          _id
          nombre
      }
    }
  }
`;


const BUZON_STATE = gql`
query {
buzonState @client {
    buzonData{        
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
}
`;

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

const Platillo = ({ tile }) => {
  const [updateBuzon] = useMutation(AGREAR_BUZON);
  const [addBuzon] = useMutation(NUEVO_BUZON);
  const { data: BuzonData } = useQuery(BUZON_STATE);
  const { data: LoginUser } = useQuery(LOGED_USER_DATA);

  const handleAgregarCarrito = () => {
    const state = BuzonData.buzonState.buzonData;

    if (state && state.detalle && state.detalle.length > 0) {
      // Se agrega usuario
      const newData = {
        _id: state._id,
        usuario: state.usuario._id,
      }
      newData.detalle = [];
      // Se agregan platillos existentes
      state.detalle.forEach(item => {
        newData.detalle.push({
          restaurante: item.restaurante._id,
          platillo: item.platillo._id,
          cantidad: 1,
        })
      });
      // Se agrega el nuevo
      newData.detalle.push({
        restaurante: tile.restaurante._id,
        platillo: tile._id,
        cantidad: 1,
      });

      updateBuzon({
        variables: {
          data: {
            _id: newData._id,
            usuario: newData.usuario,
            detalle: newData.detalle
          }
        }
      })
      NotificationManager.success('Exito', 'Platillo agregado a carrito');
    } else {
      addBuzon({
        variables: {
          data: {
            usuario: LoginUser.userState.userData._id,
            detalle: {
              restaurante: tile.restaurante._id,
              platillo: tile._id,
              cantidad: 1,
            }
          }
        }
      })
      NotificationManager.success('Exito', 'Platillo agregado a carrito');
    }

  }

  return <GridListTile style={{ maxHeight: 200, maxWidth: 300, margin: 10 }}>
    <img src={tile.imagen} alt={tile.nombre} width={300} height={200} />
    <GridListTileBar
      title={tile.nombre}
      subtitle={<span>{tile.descripcion}</span>}
      actionIcon={
        <IconButton color={'secondary'} onClick={handleAgregarCarrito}>
          <Icon>shopping_cart</Icon>
        </IconButton>
      }
    />
    <NotificationContainer />
  </GridListTile>
}

export default Platillo;