import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// Pages
import Inicio from '../pages/inicio';
import Registro from '../pages/registro';
import Login from '../pages/login';
import Platillos from '../pages/platillos';
import Restaurantes from '../pages/restaurantes';
import DetalleRestaurante from '../pages/detalle-restaurante';
import Pedidos from '../pages/pedidos';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => <Component {...props} />}
    />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.usserLogged === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);

const Routers = ({ usserLogged, handleLoggin, handleUserLogginData }) => {

    return <div>
        <Router>
            <Switch>
                <PublicRoute
                    exact
                    path='/'
                    component={() => <Inicio
                        usserLogged={usserLogged}
                        handleLoggin={handleLoggin}
                        handleUserLogginData={handleUserLogginData}
                    />}
                />
                <PublicRoute
                    path='/registro'
                    component={() => <Registro handleLoggin={handleLoggin} />}
                />
                <PublicRoute
                    path="/login"
                    component={() => <Login handleLoggin={handleLoggin} />}
                />
                <PrivateRoute
                    path="/platillos"
                    usserLogged={usserLogged}
                    component={() => <Platillos
                        usserLogged={usserLogged}
                        handleLoggin={handleLoggin}
                        handleUserLogginData={handleUserLogginData}
                    />}
                />
                <PrivateRoute
                    path="/restaurantes"
                    usserLogged={usserLogged}
                    component={() => <Restaurantes
                        usserLogged={usserLogged}
                        handleLoggin={handleLoggin}
                        handleUserLogginData={handleUserLogginData}
                    />}
                />
                <PrivateRoute
                    path="/restaurante"
                    usserLogged={usserLogged}
                    component={() => <DetalleRestaurante
                        usserLogged={usserLogged}
                        handleLoggin={handleLoggin}
                        handleUserLogginData={handleUserLogginData}
                    />}
                />
                <PrivateRoute
                    path="/pedidos"
                    usserLogged={usserLogged}
                    component={() => <Pedidos
                        usserLogged={usserLogged}
                        handleLoggin={handleLoggin}
                        handleUserLogginData={handleUserLogginData}
                    />}
                />
            </Switch>
        </Router>
    </div>

}


export default Routers;