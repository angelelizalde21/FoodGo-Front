import React from 'react';
import { Grid } from '@material-ui/core';

// Componentes
import Categorias from './categorias';

const Filtros = ({ handleChange, values }) => {


    return <div>
        <Grid container>
            <Grid item>
                <Categorias handleChange={handleChange} values={values} />
            </Grid>

        </Grid>
    </div>
}


export default Filtros;