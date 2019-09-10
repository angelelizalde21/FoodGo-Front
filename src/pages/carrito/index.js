import React from 'react';
import Drawer from '@material-ui/core/Drawer';

// Componentes
import Contenedor from './components/contenedor'

const Carrito = ({ open, handleClose }) => {
    return <Drawer anchor="right" open={open} onClose={handleClose}>
        <Contenedor />
    </Drawer>
}

export default Carrito;