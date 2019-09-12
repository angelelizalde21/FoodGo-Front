import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, IconButton, List, Icon, Divider } from '@material-ui/core';
import Platillo from './platillo';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import client from '../../../apollo';

const EDITAR_BUZON = gql`
  mutation updateBuzon($data: BuzonUpdateInput) {
    updateBuzon(data: $data) {
      usuario {
          _id
          nombre
      }
    }
  }
`;

const Contenedor = ({ handleClose, Datos }) => {
    const classes = useStyles();
    const [updateBuzon] = useMutation(EDITAR_BUZON);
    console.log(Datos)

    const handleEliminarPlatillo = (tile) => {
        const buzon = Datos;

        const newData = {
            _id: buzon._id,
            usuario: buzon.usuario._id,
        }

        newData.detalle = [];
        // Se agregan platillos existentes
        buzon.detalle.forEach(item => {
            newData.detalle.push({
                restaurante: item.restaurante._id,
                platillo: item.platillo._id,
                cantidad: 1,
            })
        });

        // Eliminar id

        const index = newData.detalle.indexOf(tile);
        newData.detalle.splice(index, 1);

        updateBuzon({
            variables: {
                data: {
                    _id: newData._id,
                    usuario: newData.usuario,
                    detalle: newData.detalle
                }
            }
        })
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
                <Platillo tile={tile} handleEliminarPlatillo={handleEliminarPlatillo} key={index} />
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