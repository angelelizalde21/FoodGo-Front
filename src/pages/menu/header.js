import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Componentes
import Carrito from '../carrito';
import UserLogged from './userLogged';

const Header = ({ usserLogged, handleLoggin, handleUserLogginData }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openCarrito, setOpenCarrito] = React.useState(false);

  const CollisionLink = (link) => React.forwardRef((props, ref) => (
    <Link innerRef={ref} to={link} {...props} />
  ));

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
          usserLogged && <div style={{ marginLeft: 30 }}>
            <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} spacing={2}>
              <Grid item>
                <Button component={CollisionLink('platillos')}>Platillos</Button>
              </Grid>
              <Grid item>
                <Button component={CollisionLink('restaurantes')}>Restaurantes</Button>
              </Grid>
            </Grid>
          </div>
        }
        <div style={{ flexGrow: 1 }}></div>
        {usserLogged ? <div>
          <UserLogged 
            handleLoggin={handleLoggin} 
            handleClose={handleClose} 
            anchorEl={anchorEl}
            handleClick={handleClick}
            setOpenCarrito={setOpenCarrito}
            handleUserLogginData={handleUserLogginData}
            />
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
    {openCarrito && <Carrito open={openCarrito} handleClose={() => setOpenCarrito(false)} />}
  </div>
}

export default Header;