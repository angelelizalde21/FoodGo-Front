import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Pages 
import Header from '../menu/header';
import Footer from '../menu/footer';

// Componentes
import Banner from './components/banner';
import Cards from './components/cards';

const USER_DATA = gql`
{ getLoginUser {
        _id
        nombre
        email
        avatar
        genero
    }
}
`;

const Inicio = ({ usserLogged, handleLoggin, handleUserLogginData }) => {

  // useEffect(() => {
  //   if (usserLogged) {
  //     const { data, loading } = useQuery(USER_DATA);
  //     if (data) {
  //       if (data.getLoginUser) {
  //         handleUserLogginData(data.getLoginUser)
  //       }
  //     }
  //   }
  // }, [data])



  return <div>
    <Header usserLogged={usserLogged} handleLoggin={handleLoggin} />
    <Banner usserLogged={usserLogged} />
    <Cards />
    <Footer />
  </div>
}


export default Inicio;