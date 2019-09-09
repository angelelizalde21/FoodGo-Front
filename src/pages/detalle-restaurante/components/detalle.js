import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';


const Detalle = ({ data }) => {

  return <div style={{
    height: '40vh',
    width: '100%',
    background: 'url(' + data.avatar + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }}>
    <div style={{ paddingTop: '12vh' }}>
      <Paper elevation={3} style={{ width: 300, padding: 20 }}>
        <Grid container>
          <Typography style={{ fontSize: 25, color: "#FF4400", fontWeight: 'bold' }}>
            {data.nombre}
          </Typography>
        </Grid>
        <Grid container>
          <Typography style={{ fontSize: 15, fontWeight: 'bold' }}>
            {data.direccion}
          </Typography>
        </Grid>
        <Grid container>
          <Typography style={{ fontSize: 15 }}>
            {data.tiempoEspera}
          </Typography>
        </Grid>
      </Paper>
    </div>
  </div>
}

export default Detalle;
