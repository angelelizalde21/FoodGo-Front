import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const Banner = () => {

  const handleBuscarKeyPress = () => {

  }

  return <div style={{ background: '#FF4400', height: '28vh', width: '100%', display: "flex" }}>
    <div style={{ width: '100vw', padding: '3vw' }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Typography style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>La comida hasta la puerta de tu casa</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </div >
}


export default Banner;