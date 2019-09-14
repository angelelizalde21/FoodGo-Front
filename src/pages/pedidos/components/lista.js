import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Componentes 
import Platillo from './platillo';

const Lista = ({ Datos }) => {
  return <div>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{Datos.total} - {Datos.usuario.nombre}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {Datos && Datos.detalle && Datos.detalle.map((tile, index) => {
          return <Platillo tile={tile} key={index} />
        })}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
}

export default Lista;