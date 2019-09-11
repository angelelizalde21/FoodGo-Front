import React, { useEffect } from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import client from './apollo';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Routers from './config/router';


let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF4400',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  status: {
    danger: 'orange',
  },
});

theme = responsiveFontSizes(theme);

const LOGED_USER_QUERY = gql`
query {
  loginState @client {
    userLogged
  }
}
`;

function App() {

  const { data } = useQuery(LOGED_USER_QUERY);

  const handleLoggin = (usuarioLogeado) => {
    client.mutate({
      mutation: gql`
        mutation setUserLogged($logged: Boolean) {
          setUserLogged(logged: $logged) @client{
              data
          }
        }
      `,
      variables: { logged: usuarioLogeado }
    })
  }

  const handleUserLogginData = (Datos) => {
    client.mutate({
      mutation: gql`
        mutation userInLogin($datos: Any) {
          userInLogin(datos: $datos) @client{
              data
          }
        }
      `,
      variables: { datos: Datos }
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) handleLoggin(true);
  }, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routers
          handleLoggin={handleLoggin}
          usserLogged={data.loginState.userLogged}
          handleUserLogginData={handleUserLogginData}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
