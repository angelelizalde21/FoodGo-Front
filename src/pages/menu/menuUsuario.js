import React from 'react';
import { Redirect } from 'react-router-dom';
import { Popover, MenuItem } from '@material-ui/core';

const MenuUsuario = ({ open, anchorEl, handleClose, handleLoggin }) => {

    const handleCerrarSesion = () => {
        handleLoggin(false);
        localStorage.removeItem("jwt");
        return (<Redirect to="/" />)
    }
    return <div>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <MenuItem onClick={handleClose}>Pedidos</MenuItem>
            <MenuItem onClick={handleCerrarSesion}>Cerrar sesión</MenuItem>
        </Popover>
    </div>
}

export default MenuUsuario;