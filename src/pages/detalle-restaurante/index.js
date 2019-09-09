import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Divider } from '@material-ui/core';


// Pages 
import Header from '../menu/header';

// Componentes
import Cuadricula from '../platillos/components/cuadricula';
import Detalle from './components/detalle';

const DetalleRestaurante = ({ usserLogged, handleLoggin }) => {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('restaurante'))
        setDatos(data);
    }, []);

    return <div>
        <Header usserLogged={usserLogged} handleLoggin={handleLoggin} />
        <Scrollbars style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
            {datos && <Detalle data={datos} />}
            <Divider style={{ marginTop: 10 }} />
            {datos && <Cuadricula Data={datos.platillos} />}
        </Scrollbars>
    </div>
}

export default DetalleRestaurante;