import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Header = () => {
  const [Usuario, setUsuario] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('jwt');
    if (user) {
      setUsuario(user);
    }
  }, [])

  const CollisionLink = (link) => React.forwardRef((props, ref) => (
    <Link innerRef={ref} to={link} {...props} />
  ));

  return <div>
    <AppBar position="static">
      <Toolbar style={{ background: 'white' }}>
        <Typography style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>
          Food
      </Typography>
        <Typography style={{ fontWeight: 'bold', color: '#FF4400', fontSize: 20 }}>
          Go
      </Typography>
        {
          Usuario && <div style={{ marginLeft: 30 }}>
            <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} spacing={2}>
              <Grid item>
                <Button component={CollisionLink('platillos')}>Platillos</Button>
              </Grid>
              <Grid item>
                <Button component={CollisionLink('restaurantes')}>Restaurante</Button>
              </Grid>
            </Grid>
          </div>
        }
        <div style={{ flexGrow: 1 }}></div>
        {Usuario ? <div>
          <IconButton
            edge="end"
            aria-haspopup="true"
            color="primary"
          >
            <Icon>shopping_cart</Icon>
          </IconButton>
          <IconButton
            edge="end"
            aria-haspopup="true"
            color="primary"
          >
            <AccountCircle />
          </IconButton>

        </div> :
          <div>
            <Button component={CollisionLink('registro')} color="primary" style={{ marginRight: 20 }}>
              Registrarse
        </Button>
            <Button component={CollisionLink('login')} color="primary" variant={'contained'}>
              Iniciar sesión
        </Button>
          </div>

        }
      </Toolbar>

    </AppBar>
  </div>
}

export default Header;