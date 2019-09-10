import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Divider } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

// Pages 
import Header from '../menu/header';

// Componentes
import Filtros from './components/filtros';
import Cuadricula from './components/cuadricula';
import Cargando from '../../config/cargando';

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
    const { data, loading } = useQuery(REST);
    const [Datos, setDatos] = React.useState([]);
    const [values, setValues] = React.useState({ restaurante: '' });

    useEffect(() => {
        if (data) {
            if (data.getRestaurante) {
                setDatos(data.getRestaurante);
            }
        }
    }, [data])


    const handleChange = (name) => (event) => {
        setValues(oldValues => ({
            ...oldValues,
            [name]: event.target.value,
        }));
    }

    return <div>
        <Header usserLogged={usserLogged} handleLoggin={handleLoggin} />
        <Scrollbars style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
            <Filtros handleChange={handleChange} values={values} />
            <Divider style={{ marginTop: 10 }} />
            {loading ? <Cargando /> : <Cuadricula Data={Datos} />}
        </Scrollbars>
    </div>
}

export default Restaurantes;