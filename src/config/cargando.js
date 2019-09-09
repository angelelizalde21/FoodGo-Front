import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const Cargando = () => {
    return <div style={{ margin: 'auto', width: '50%', padding: 10 }}>
        <Grid container justify={'center'}>
            <Grid item>
                <CircularProgress />
            </Grid>
        </Grid>
    </div>
}

export default Cargando;