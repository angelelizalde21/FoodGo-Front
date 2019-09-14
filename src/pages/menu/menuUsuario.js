import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Popover, MenuItem } from '@material-ui/core';

const MenuUsuario = ({ open, anchorEl, handleClose, handleLoggin, history }) => {

    const handleCerrarSesion = () => {
        handleLoggin(false);
        localStorage.removeItem("jwt");
        return (<Redirect to="/" />)
    }

    const handlePedidiosClick = () => {
        history.push('/pedidos');
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
            <MenuItem onClick={handlePedidiosClick}>Pedidos</MenuItem>
            <MenuItem onClick={handleCerrarSesion}>Cerrar sesión</MenuItem>
        </Popover>
    </div>
}

export default withRouter(MenuUsuario);