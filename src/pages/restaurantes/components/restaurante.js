import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridListTile, GridListTileBar, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Restaurante = ({ tile, history }) => {
    const classes = useStyles();

    const hanldePlatillosClick = () => {
        return history.push('/restaurante', { data: tile });
    }

    return <GridListTile style={{ maxHeight: 200, maxWidth: 500, margin: 10 }}>
        <img src={tile.avatar} alt={tile.nombre} width={500} height={200} />
        <GridListTileBar
            title={tile.nombre}
            subtitle={<span>{tile.direccion} / {tile.tiempoEspera}</span>}
            actionIcon={
                <Button onClick={hanldePlatillosClick} color={'secondary'}
                    className={classes.button}>Ver platillos</Button>
            }
        />
    </GridListTile>
}

const useStyles = makeStyles(theme => ({
    button: {
        marginRight: 20
    }
}));

export default withRouter(Restaurante);