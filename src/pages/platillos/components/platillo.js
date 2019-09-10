import React from 'react';
import { GridListTile, GridListTileBar, IconButton, Icon } from '@material-ui/core';

const Platillo = ({ tile }) => {

    return <GridListTile style={{ maxHeight: 200, maxWidth: 300, margin: 10 }}>
        <img src={tile.imagen} alt={tile.nombre} width={300} height={200} />
        <GridListTileBar
            title={tile.nombre}
            subtitle={<span>{tile.descripcion}</span>}
            actionIcon={
                <IconButton color={'secondary'}>
                    <Icon>shopping_cart</Icon>
                </IconButton>
            }
        />
    </GridListTile>
}

export default Platillo;