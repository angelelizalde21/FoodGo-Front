import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Paper } from '@material-ui/core';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

// Components
import RegistroForm from './components/registroForm';

import Logo from '../../assets/FoodGo.png';

// GraphQL
const REGISTRO = gql`
  mutation addUsuario($nombre: String!, $email: String!,$password: String!,$genero: Gender) {
    addUsuario(data: { nombre: $nombre, email: $email,password: $password, genero: $genero}) {
      token
    }
  }
`;

const Registro = ({ handleLoggin }) => {

  const [addUsuario, { data, error, loading }] = useMutation(REGISTRO);

  useEffect(() => {
    handleLoggin(false);
    localStorage.removeItem("jwt");
  }, [])

  const handleSubmit = (values) => {
    addUsuario({ variables: values });
  }

  useEffect(() => {
    if (data) {
      if (data.addUsuario) {
        localStorage.setItem('jwt', data.addUsuario.token);
        handleLoggin();
        return <Redirect to={'/'} />
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
              <RegistroForm error={error} handleSubmit={(values) => handleSubmit(values)} />
            </div>
          </div>}
        </Paper>
      </Grid>
    </Grid>
  </div>
}


export default Registro;