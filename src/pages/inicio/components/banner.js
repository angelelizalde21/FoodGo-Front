import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

const Banner = () => {
  const classes = useStyles();

  return <div style={{ background: '#FF4400', height: '28vh', width: '100%', display: "flex" }}>
    <div style={{ width: '100vw', padding: '3vw' }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Typography style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>La comida hasta la puerta de tu casa</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                fullWidth
                placeholder="Buscar"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </div>
}

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    marginTop: '3vh',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '50vw',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
}));

export default Banner;