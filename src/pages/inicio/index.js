import React from 'react';

// Pages 
import Header from '../menu/header';
import Footer from '../menu/footer';

// Componentes
import Banner from './components/banner';
import Cards from './components/cards';


const Inicio = ({ usserLogged, handleLoggin, handleUserLogginData }) => {

 



  return <div>
    <Header usserLogged={usserLogged} handleLoggin={handleLoggin} handleUserLogginData={handleUserLogginData} />
    <Banner usserLogged={usserLogged} />
    <Cards />
    <Footer />
  </div>
}


export default Inicio;