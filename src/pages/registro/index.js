import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';

// Components
import RegistroForm from './components/registroForm';

import Logo from '../../assets/FoodGo.png';

// GraphQL
const REGISTRO = gql`
  mutation addUsuario($nombre: String!, $email: String!, $password: String!, $genero: Gender) {
    addUsuario(data: {nombre: $nombre, email: $email, password: $password, genero: $genero}) {
      token
    }
  }
`;

const Registro = () => {

  const [registroForm, setregistroForm] = useState({
    nombre: '',
    email: '',
    password: '',
    genero: '',
  })

  const handleSubmit = (values, mutation) => {
    console.log(values)
    setregistroForm({ ...values });
    mutation();
  }


  return <div>
    <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} style={{
      background: '#FF4400', width: '100%', height: '100vh', padding: 0,
      margin: 0
    }}>
      <Grid item>
        <Paper elevation={3} style={{ width: '100%' }}>
          <div style={{ padding: 20 }}>
            <img alt="" src={Logo} width="140" height="50" />
          </div>
          <Mutation mutation={REGISTRO} variables={registroForm}>
            {
              (addUsuario, { data, error, loading }) => {
                if (data) {
                  return <Redirect to="/" />
                }
                if (loading) return <p>haciendo login..</p>

                return (
                  <div>
                    <RegistroForm error={error} handleSubmit={(values) => handleSubmit(values, addUsuario)} />
                  </div>
                );

              }
            }

          </Mutation>
        </Paper>
      </Grid>
    </Grid>
  </div>
}


export default Registro;