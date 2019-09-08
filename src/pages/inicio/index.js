import React from 'react'

// Pages 
import Header from '../menu/header';
import Footer from '../menu/footer';

// Componentes
import Banner from './components/banner';
import Cards from './components/cards';

const Inicio = () => {

  return <div>
    <Header />
    <Banner />
    <Cards />
    <Footer />
  </div>
}


export default Inicio;