import React, { useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import LoginForm from './components/loginForm';

import Logo from '../../assets/FoodGo.png';

// GraphQL


const LOGIN = gql`
  mutation doLogin($email: String!, $password: String!) {
    doLogin(email: $email, password: $password) {
      token
    }
  }
`;


const Login = ({ history, handleLoggin }) => {

  const [doLogin, { data, error, loading }] = useMutation(LOGIN);

  const handleSubmit = (values) => {
    doLogin({ variables: values });
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      if (data.doLogin) {
        localStorage.setItem('jwt', data.doLogin.token);
        handleLoggin(true);
        history.push('/');
      }
    }

  }, [data])



  return <div>
    <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} style={{
      background: '#FF4400', width: '100%', height: '100vh', padding: 0,
      margin: 0
    }}>
      <Grid item>
        <Paper elevation={3} style={{ width: '100%' }}>
          {loading && <div style={{ padding: 20 }}> <CircularProgress /></div>}
          {!loading && <div>
            <div style={{ padding: 20 }}>
              <img alt="" src={Logo} width="140" height="50" />
            </div>
            <div>
              <LoginForm error={error} handleSubmit={(values) => handleSubmit(values)} />
            </div>
          </div>}
        </Paper>
      </Grid>
    </Grid>
  </div>
}


export default withRouter(Login);