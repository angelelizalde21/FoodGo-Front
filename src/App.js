import React, { useEffect } from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import client from './apollo';

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

  const handleLoggin = (usuarioLogeado = true) => {
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

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) handleLoggin();
  }, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Query query={LOGED_USER_QUERY}>
          {
            ({ data }) => {
              console.log("TCL: App -> data", data)
              return (
                <Routers
                  handleLoggin={handleLoggin}
                  usserLogged={data.loginState.userLogged}
                />
              );
            }
          }
        </Query>
      </ThemeProvider>
    </div>
  );
}

export default App;
