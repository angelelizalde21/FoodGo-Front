import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CATEGO = gql`
   { getCategoria {
        _id
        nombre
        imagen
        platillos {
            _id
            nombre
            descripcion
            imagen
            precio
            restaurante {
                _id
                nombre
            }
        }
  }
}
`;

const Categorias = ({ values, handleChange }) => {
  const classes = useStyles();

  const { data } = useQuery(CATEGO);

  return <TextField
    select
    label="Categoria"
    className={classes.formControl}
    value={values.categoria}
    onChange={handleChange}
    SelectProps={{
      MenuProps: {
        className: classes.menu,
      },
    }}
    margin="normal"
    variant="filled"
  >
    <MenuItem value={''}>
      <em>NONE</em>
    </MenuItem>
    {data && data.getCategoria.map((item) => <MenuItem key={item._id}
      value={item}>
      {String(item.nombre).toUpperCase()}
    </MenuItem>)}
  </TextField>
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default Categorias;