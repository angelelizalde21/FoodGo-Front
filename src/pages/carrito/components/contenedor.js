import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, IconButton, List, Icon, Divider } from '@material-ui/core';
import Platillo from './platillo';

const Contenedor = ({ Datos, handleClose }) => {
    const classes = useStyles();
    return <div
        className={classes.fullList}
        role="presentation"
    >
        <div style={{ padding: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <IconButton disabled color={'primary'}>
                        <Icon>shopping_cart</Icon>
                    </IconButton>
                </Grid>
                <Grid item xs={9}>
                    <Typography className={classes.title}> Carrito</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={handleClose} color={'primary'}>
                        <Icon>close</Icon>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
        <List>
            <Divider></Divider>
            {Datos.detalle && Datos.detalle.map((tile, index) => (
                <Platillo tile={tile} key={index} />
            ))}
        </List>
    </div>
};


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 350,
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        marginLeft: 20
    }
});

export default Contenedor;