import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TextField, Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as EmailValidator from 'email-validator';

// Components 
import ValidationMesaje from '../../registro/components/validationMessage';


const LoginForm = ({ handleSubmit, error }) => {
  const classes = useStyles();

  const [validar, setValidar] = useState({
    mensaje: '',
    open: false,
  });
  const [Form, setForm] = useState({
    email: '',
    password: '',
  });

  const CollisionLink = (link) => React.forwardRef((props, ref) => (
    <Link innerRef={ref} to={link} {...props} />
  ));

  const handleChange = (name) => (e) => {
    setForm({ ...Form, [name]: e.target.value });
  }

  const handleBlur = (name) => (e) => {

  }

  const handleLogin = () => {

    // validaciones
    if (Form.email === '') {
      setValidar({ mensaje: 'Ingrese su email', open: true });
      return
    }

    if (!EmailValidator.validate(Form.email)) {
      setValidar({ mensaje: 'Introdusca un email valido', open: true });
      return
    }

    if (Form.password === '') {
      setValidar({ mensaje: 'Ingrese una contraseña', open: true });
      return
    }

    handleSubmit(Form)
  }

  const handleMensajeClose = () => {
    setValidar({
      mensaje: '',
      open: false,
    });
  }


  return <div className={classes.container}>
    {validar.open || error ? <ValidationMesaje
      mensaje={validar.mensaje === '' ? 'Ocurrio un error' : validar.mensaje}
      handleMensajeClose={handleMensajeClose} /> : ''}

    <Grid container>
      <TextField
        label="Email"
        value={Form.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        margin="normal"
        variant="filled"
        className={classes.textField}
      />
    </Grid>
    <Grid container>
      <TextField
        type="password"
        label="Contraseña"
        onChange={handleChange('password')}
        onBlur={handleBlur('password')}
        value={Form.password}
        margin="normal"
        variant="filled"
        className={classes.textField}
      />
    </Grid>
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      <Grid item xs={12}>
        <Grid container spacing={2} justify={'flex-end'}>
          <Button component={CollisionLink('registro')} color="primary" style={{ marginRight: 20 }}>
            Registrarse
        </Button>
          <Button color="primary" variant={'contained'} style={{ marginRight: 20 }} onClick={handleLogin}>
            iniciar sesión
        </Button>
        </Grid>
      </Grid>
    </Grid>
  </div>
}


const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  textField: {
    width: '100%'
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 150,
  },
}));

export default LoginForm;
