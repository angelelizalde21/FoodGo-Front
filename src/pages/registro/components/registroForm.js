import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TextField, Grid, FormControl, InputLabel, Select, MenuItem, FilledInput,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as EmailValidator from 'email-validator';

// Components 
import ValidationMesaje from './validationMessage';


const RegistroForm = ({ handleSubmit, error }) => {
  const classes = useStyles();

  const [validar, setValidar] = useState({
    mensaje: '',
    open: false,
  });
  const [Form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmacion: '',
    genero: '',
  });

  const CollisionLink = (link) => React.forwardRef((props, ref) => (
    <Link innerRef={ref} to={link} {...props} />
  ));

  const handleChange = (name) => (e) => {
    setForm({ ...Form, [name]: e.target.value });
  }

  const handleBlur = (name) => (e) => {

  }

  const handleRegistro = () => {

    // validaciones
    if (Form.nombre === '') {
      setValidar({ mensaje: 'Ingrese su nombre completo', open: true });
      return
    }

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

    if (Form.confirmacion === '') {
      setValidar({ mensaje: 'Ingrese la confirmación de su contraseña', open: true });
      return
    }

    if (Form.confirmacion !== Form.password) {
      setValidar({ mensaje: 'Las contraseñas no coinciden', open: true });
      return
    }

    if (Form.genero === '') {
      setValidar({ mensaje: 'Seleccione su genero', open: true });
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
        label="Nombre completo"
        value={Form.nombre}
        onChange={handleChange('nombre')}
        onBlur={handleBlur('nombre')}
        margin="normal"
        variant="filled"
        className={classes.textField}
      />
    </Grid>
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
    <Grid container spacing={2}>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
        <TextField
          type="password"
          label="Confirmar contraseña"
          onChange={handleChange('confirmacion')}
          onBlur={handleBlur('confirmacion')}
          value={Form.confirmacion}
          margin="normal"
          variant="filled"
          className={classes.textField}
        />
      </Grid>
    </Grid>
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-simple">Genero</InputLabel>
      <Select
        value={Form.genero}
        onChange={handleChange('genero')}
        input={<FilledInput name="age" id="filled-age-simple" />}
      >
        <MenuItem value={'HOMBRE'}>HOMBRE</MenuItem>
        <MenuItem value={'MUJER'}>MUJER</MenuItem>
      </Select>
    </FormControl>
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Grid container spacing={2} justify={'flex-end'}>
          <Button component={CollisionLink('login')} color="primary" style={{ marginRight: 20 }}>
            iniciar sesión
        </Button>
          <Button color="primary" variant={'contained'} style={{ marginRight: 20 }} onClick={handleRegistro}>
            Registrarse
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

export default RegistroForm;
