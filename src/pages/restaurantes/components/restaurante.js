import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridListTile, GridListTileBar, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Restaurante = ({ tile, history }) => {
    const classes = useStyles();

    const hanldePlatillosClick = () => {
        localStorage.setItem('restaurante', JSON.stringify(tile));
        return history.push('/restaurante');
    }

    return <GridListTile style={{ maxHeight: 200 }}>
        <img src={tile.avatar} alt={tile.nombre} />
        <GridListTileBar
            title={tile.nombre}
            subtitle={<span>{tile.direccion} / {tile.tiempoEspera}</span>}
            actionIcon={
                <Button onClick={hanldePlatillosClick} color={'primary'}
                    className={classes.button}>Ver platillos</Button>
            }
        />
    </GridListTile>
}

const useStyles = makeStyles(theme => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    button: {
        marginRight: 20
    }
}));
export default withRouter(Restaurante);