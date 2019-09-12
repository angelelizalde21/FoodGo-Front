import React from 'react';
import Drawer from '@material-ui/core/Drawer';

// Componentes
import Contenedor from './components/contenedor'

const Carrito = ({ open, usuario, handleClose }) => {

  return <Drawer anchor="right" open={open} onClose={handleClose} style={{ width: '150' }}>
    <Contenedor handleClose={handleClose} />
  </Drawer>
}

export default Carrito;