import React from 'react';
import { Icon, Typography, Grid, IconButton } from '@material-ui/core';

const ValidationMesaje = ({ mensaje, handleMensajeClose }) => {

  return <div style={{ margin: 10, padding: 5, background: 'red', width: '90%', borderRadius: 10, color: 'white' }}>
    <Grid container spacing={2}>
      <Grid item>
        <IconButton onClick={handleMensajeClose}>
          <Icon style={{ color: 'white' }}>close</Icon>
        </IconButton>
      </Grid>
      <Grid item>
        <Typography style={{ marginTop: 15 }}>
          {mensaje}
        </Typography>
      </Grid>
    </Grid>

  </div>
}

export default ValidationMesaje;