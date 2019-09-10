import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Filtros = ({ handleChange, values }) => {
  const classes = useStyles();
  return <div>
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <TextField
          name={'restaurante'}
          label="Buscar"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={handleChange('restaurante')}
        />
      </Grid>
    </Grid>
  </div>
}

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },

}));

export default Filtros;