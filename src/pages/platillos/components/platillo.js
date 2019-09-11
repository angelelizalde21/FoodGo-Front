import React from 'react';
import { GridListTile, GridListTileBar, IconButton, Icon } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const AGREAR_BUZON = gql`
  mutation addBuzon($data: BuzonInput) {
    addBuzon(data: $data) {
      usuario {
          _id
          nombre
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
    const [addBuzon, { data, loading }] = useMutation(AGREAR_BUZON);
    
  const { data: UsuarioData } = useQuery(LOGED_USER_DATA);
  console.log(data);

    const handleAgregarCarrito = () => {
        addBuzon({variables: {
            data: {
                usuario: UsuarioData.userState.userData._id,
                detalle: [
                    {
                        restaurante: tile.restaurante._id,
                        platillo: tile._id,
                        cantidad: 1,
                    }
                ]
            }
        }})
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
    </GridListTile>
}

export default Platillo;