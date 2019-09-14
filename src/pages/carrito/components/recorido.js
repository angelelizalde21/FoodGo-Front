import React, { useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Icon, Grid,
  List, Divider, ListItem, ListItemText
} from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Cargando from '../../../config/cargando';

const ADD_PEDIDO = gql`
  mutation addPedido($data: PedidoInput) {
    addPedido(data: $data) {
      _id
      usuario {
        _id
        nombre
      }
     repartidor {
       _id
       nombre
     }
    }
  }
`;

const SET_REPARTIDOR = gql`
  mutation setRepartidorPedido($pedidoID: ID) {
    setRepartidorPedido(pedidoID: $pedidoID) {
      _id
      nombre
      email
      estrellas
      avatar
      genero
    }
  }
`;

const SET_ENTREGADO = gql`
  mutation setEntregarPedido($pedidoID: ID) {
    setEntregarPedido(pedidoID: $pedidoID) {
      _id
    }
  }
`;


const Delete_BUZON = gql`
  mutation deleteBuzon($usuarioID: ID) {
    deleteBuzon(usuarioID: $usuarioID) {
      _id
    }
  }
`;

const Recorido = ({ Datos, Open, handleClose, total }) => {
  const [setRepartidorPedido, { data }] = useMutation(SET_REPARTIDOR);
  const [addPedido, { data: datosPedido }] = useMutation(ADD_PEDIDO);
  const [setEntregarPedido] = useMutation(SET_ENTREGADO);
  const [deleteBuzon] = useMutation(Delete_BUZON);

  useEffect(() => {

    const detalle = [];
    // Se agregan platillos existentes
    Datos.detalle.forEach(item => {
      detalle.push({
        restaurante: item.restaurante._id,
        platillo: item.platillo._id,
        cantidad: 1,
      })
    });

    addPedido({
      variables: {
        data: {
          usuario: Datos.usuario._id,
          total,
          estatus: 'PEDIDO',
          detalle
        }
      }
    })
  }, []);

  useEffect(() => {
    if (datosPedido) {
      setRepartidorPedido({
        variables: {
          pedidoID: datosPedido.addPedido._id
        }
      })

      setEntregarPedido({
        variables: {
          pedidoID: datosPedido.addPedido._id
        }
      })
      deleteBuzon({
        variables: {
          usuarioID: Datos.usuario._id,
        }
      })
    }
  }, [datosPedido]);

  setTimeout(() => {
    handleClose();
  }, 10000);




  const mapearEstreallas = (estrellas) => {
    const indents = [];
    for (let i = 0; i < estrellas; i++) {
      indents.push(<Icon style={{ color: 'gold' }}>star</Icon>);
    }

    return indents;
  }


  const detalle = (tile) => {
    return <div>
      <ListItem button key={tile._id}>
        <ListItemText primary={tile.platillo.nombre} secondary={'Cantidad: ' + tile.cantidad} />
      </ListItem>
      <Divider></Divider>
    </div>
  }

  return <div>
    <Dialog
      open={Open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Pedido en curso</DialogTitle>
      <DialogContent>
        {data && data.setRepartidorPedido && <div>
          <Typography>Repartidor: {data.setRepartidorPedido.nombre}</Typography>
          <Grid container>
            {mapearEstreallas(data.setRepartidorPedido.estrellas).map((item, index) => (
              <Grid key={index} item>
                {item}
              </Grid>
            ))}
          </Grid>
          <List>
            <Divider></Divider>
            {Datos && Datos.detalle.map((tile, index) => (
              <div key={index}>{detalle(tile)}</div>
            ))}
          </List>
          <Cargando />
        </div>
        }

      </DialogContent>
    </Dialog>
  </div>
}



export default Recorido;