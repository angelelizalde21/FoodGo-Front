import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Divider } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

// Pages 
import Header from '../menu/header';

// Componentes
import Cuadricula from './components/cuadricula';

const REST = gql`
{ getRestaurante {
        _id
        nombre
        direccion
        avatar
        tiempoEspera
        platillos {
            _id
            nombre
            descripcion
            imagen
            precio
        }
    }
}
`;

const Restaurantes = ({ usserLogged, handleLoggin }) => {
    const { data } = useQuery(REST);
    const [Datos, setDatos] = React.useState([]);

    useEffect(() => {
        if (data) {
            if (data.getRestaurante) {
                setDatos(data.getRestaurante);
            }
        }
    }, [data])

    return <div>
        <Header usserLogged={usserLogged} handleLoggin={handleLoggin} />
        <Scrollbars style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
            <Divider style={{ marginTop: 10 }} />
            <Cuadricula Data={Datos} />
        </Scrollbars>
    </div>
}

export default Restaurantes;