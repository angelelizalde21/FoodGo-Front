import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card1 from '../../../assets/Card1.webp';
import Card2 from '../../../assets/Card2.jpg';
import { Typography } from '@material-ui/core';

const Cards = () => {
  const classes = useStyles();

  return <div style={{ margin: 20 }}>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1].map((value, index) => (
            <Grid key={value} item xs={5}>
              {Card(index)}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </div>
}

const Card = (index) => (
  <div>
    <Paper style={{
      height: '35vh',
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: index + 1 === 1 ? 'url(' + Card1 + ')' : 'url(' + Card2 + ')'
    }}>
      <div style={{ paddingTop: '25vh', paddingLeft: '20vw' }}>
        <Typography style={{
          color: '#FF4400', backgroundColor: 'white', padding: 5,
          fontWeight: 'bold', width: '20vw', textAlign: 'center'
        }}>
          {index + 1 === 1 ? 'Los mejores restaurantes' : 'Búsqueda por categorías'}
        </Typography>
      </div>
    </Paper>
  </div>
)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default Cards;