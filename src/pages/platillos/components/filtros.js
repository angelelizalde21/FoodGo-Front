import React from 'react';
import { Grid,TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Componentes
import Categorias from './categorias';

const Filtros = ({ handleCategoriaChange, handlePlatilloBuscar, values }) => {
  const classes = useStyles();

  return <div>
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Categorias handleChange={handleCategoriaChange} values={values} />
      </Grid>
      <Grid item xs={5}>
        <TextField
          name={'platillo'}
          label="Buscar"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={handlePlatilloBuscar}
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