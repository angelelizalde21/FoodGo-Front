import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const Platillo = ({ tile }) => {
    const classes = useStyles();

    return <GridListTile>
        <img src={tile.imagen} alt={tile.nombre} />
        <GridListTileBar
            title={tile.nombre}
            subtitle={<span>{tile.descripcion}</span>}
            actionIcon={
                <IconButton aria-label={`info about ${tile.nombre}`} className={classes.icon}>
                    <InfoIcon />
                </IconButton>
            }
        />
    </GridListTile>
}

const useStyles = makeStyles(theme => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
export default Platillo;