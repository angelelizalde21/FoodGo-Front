import React, { useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuUsuario from './menuUsuario';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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

const UserLogged = ({ handleLoggin, handleClose, anchorEl, handleClick, setOpenCarrito, handleUserLogginData }) => {

  const { data } = useQuery(USER_DATA);

  useEffect(() => {
    if (data) {
      if (data.getLoginUser) {
        handleUserLogginData({ ...data.getLoginUser });
      }
    }
  }, [data]);

  const handleOpenCarrito = () => {
    setOpenCarrito(true)
  }

  return <div>
    <IconButton
      edge="end"
      aria-haspopup="true"
      color="primary"
      onClick={() => handleOpenCarrito()}
    >
      <Icon>shopping_cart</Icon>
    </IconButton>
    <IconButton
      edge="end"
      aria-haspopup="true"
      color="primary"
      onClick={handleClick}
    >
      <AccountCircle />
    </IconButton>
    <MenuUsuario open={Boolean(anchorEl)} anchorEl={anchorEl} handleClose={handleClose} handleLoggin={handleLoggin} />

  </div>
}

export default UserLogged;