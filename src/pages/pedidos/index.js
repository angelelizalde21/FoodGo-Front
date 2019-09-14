import React, { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Pages 
import Header from '../menu/header';

// Componentes
import Lista from './components/lista';
import { Divider, Typography } from '@material-ui/core';


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

const PEDIDOS = gql`
 query getPedido($data: PedidoBuscarInput) {
  getPedido(data: $data){
      _id
      total
      createdAt
    usuario {
      _id
      nombre
    }
    repartidor {
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
        precio
      }
      cantidad
    }
  }
}
`;

const Pedidos = ({ usserLogged, handleLoggin, handleUserLogginData }) => {
  const { data: LoginUser } = useQuery(LOGED_USER_DATA);
  const { data: pedidosData, refetch } = useQuery(PEDIDOS, { variables: { data: { usuario: LoginUser.userState.userData._id } } });

  useEffect(() => {
    refetch();
  }, [])

  return <div>
    <Header usserLogged={usserLogged} handleLoggin={handleLoggin} handleUserLogginData={handleUserLogginData} />
    <Scrollbars style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
      <Typography style={{ margin: 10 }}>Pedidos</Typography>
      <Divider style={{ marginTop: 10, marginBottom: 10 }}></Divider>
      {pedidosData && pedidosData.getPedido && pedidosData.getPedido.map((item, index) => (
        <Lista key={index} Datos={item} />
      ))}
    </Scrollbars>
  </div>
}

export default Pedidos;