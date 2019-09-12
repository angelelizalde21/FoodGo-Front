import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
// import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import client from '../../apollo';

// Componentes
import Contenedor from './components/contenedor';
import { Query } from 'react-apollo';

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


const Carrito = ({ open, handleClose }) => {


  const handleBuzonData = (Datos) => {
    client.mutate({
      mutation: gql`
            mutation setBuzonData($datos: Any) {
              setBuzonData(datos: $datos) @client{
                  data
              }
            }
          `,
      variables: { datos: Datos }
    })
  }

  return <div>
    <Query query={LOGED_USER_DATA}>
      {
        (data) => {
          if (data) {
            return <Query query={BUZON} variables={{ data: { usuario: data.data.userState.userData._id } }} >
              {
                (data) => {
                  if (data) {
                    handleBuzonData(data.data.getBuzon[0])
                    return <Drawer anchor="right" open={open} onClose={handleClose} style={{ width: '150' }}>
                      <Contenedor handleClose={handleClose} Datos={data.data.getBuzon[0]} />
                    </Drawer>
                  }
                }
              }
            </Query>
          }
        }
      }

    </Query>

  </div>
}

export default Carrito;