import React from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';

const Platillo = ({ tile }) => {

  return <div>
    <ListItem button key={tile._id} style={{ width: '100%' }}>
      <ListItemText primary={tile.platillo.nombre} secondary={'Cantidad: ' + tile.cantidad} />
    </ListItem>
    <Divider></Divider>
  </div>
}

export default Platillo;