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

const PLAT = gql`
{ getPlatillo {
        _id
        nombre
        descripcion
        imagen
        precio
        restaurante {
            _id
            nombre
        }
    }
}
`;

const Platillos = ({ usserLogged, handleLoggin }) => {
    const { data, loading } = useQuery(PLAT);

    const [Datos, setDatos] = React.useState([]);
    const [values, setValues] = React.useState({
        categoria: '',
        platillo: '',
    });

    useEffect(() => {
        if (data) {
            if (data.getPlatillo) {
                setDatos(data.getPlatillo);
            }
        }
    }, [data])

    const handleChange = (event) => {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
        if (event.target.value) {
            setDatos(event.target.value.platillos);
        } else {
            if (data) {
                if (data.getPlatillo) {
                    setDatos(data.getPlatillo);
                }
            }
        }
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

export default Platillos;