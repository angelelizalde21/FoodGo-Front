import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, IconButton, List, Icon, Divider, Button } from '@material-ui/core';
import Platillo from './platillo';

const Contenedor = ({ handleClose, Datos, handleEliminarPlatillo, handleTerminarPedido }) => {
    const classes = useStyles();

    const getNoPlatillos = () => {
        let retorno = 0;
        if (Datos) {
            Datos.detalle.forEach(item => {
                retorno++;
            });
        }
        return retorno;
    }

    const getTotal = () => {
        let retorno = 0;
        if (Datos) {
            Datos.detalle.forEach(item => {
                retorno += Number(item.platillo.precio);
            });
        }
        return retorno;
    }

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
            {Datos && Datos.detalle.map((tile, index) => (
                <Platillo tile={tile} handleEliminarPlatillo={(tile) => handleEliminarPlatillo(tile, Datos)} key={index} />
            ))}
        </List>
        <div style={{ position: 'fixed', bottom: 0, margin: 20 }}>
            {getNoPlatillos() > 0 && <Button variant={'contained'} color={'primary'} style={{ width: 300 }} onClick={handleTerminarPedido}>
                <div className={classes.numeroPlatillos}>{getNoPlatillos()}</div>
                Terminar pedido
                <Typography className={classes.totalPedido}>$ {getTotal()}</Typography>
            </Button>}
        </div>
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
    },
    numeroPlatillos: {
        border: "1px solid white",
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    totalPedido: {
        marginLeft: 10
    }
});

export default Contenedor;