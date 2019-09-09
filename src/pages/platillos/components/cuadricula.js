import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, ListSubheader } from '@material-ui/core';

// Componente
import Platillo from './platillo';

const Cuadricula = ({ Data }) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Platillos</ListSubheader>
            </GridListTile>
            {Data && Data.map((tile) => <Platillo tile={tile} key={tile} />)}
        </GridList>
    </div>
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        margin: 10
    },
}));

export default Cuadricula;