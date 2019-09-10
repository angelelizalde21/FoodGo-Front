import React, {useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';



// Componentes
import Contenedor from './components/contenedor'

const BUZON = gql`
{ getBuzon {
    usuario {
      nombre
    }
    detalle {
      restaurante {
        nombre
      }
      platillo {
        nombre
      }
      cantidad
    }
  }
}`;


const Carrito = ({ open, handleClose }) => {
    const { data, loading } = useQuery(BUZON);
    const [Datos, setDatos] = React.useState([]);

    useEffect(() => {
        if (data) {
            if (data.getBuzon) {
                setDatos(data.getBuzon[0]);
            }
        }
    }, [data])

    return <Drawer anchor="right" open={open} onClose={handleClose} style={{ width: '150' }}>
        <Contenedor handleClose={handleClose} Datos={Datos} />
    </Drawer>
}

export default Carrito;