import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, Divider, IconButton, Icon } from '@material-ui/core';

const Platillo = ({ tile, handleEliminarPlatillo }) => {

  return <div>
    <ListItem button key={tile._id}>
      <ListItemText primary={tile.platillo.nombre} secondary={'Cantidad: ' + tile.cantidad} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => handleEliminarPlatillo(tile)}>
          <Icon>delete</Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider></Divider>
  </div>
}

export default Platillo;