import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

    return <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-simple">Categoria</InputLabel>
        <Select
            value={values.categoria}
            onChange={handleChange}
            inputProps={{
                name: 'categoria',
                id: 'filled-age-simple',
            }}
        >
            <MenuItem value={''}>
                <em>None</em>
            </MenuItem>
            {data && data.getCategoria.map((item) => <MenuItem key={item}
                value={item}>
                {String(item.nombre).toUpperCase()}
            </MenuItem>)}
        </Select>
    </FormControl>
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default Categorias;