import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Pages
import Inicio from './pages/inicio';
import Registro from './pages/registro';
import Login from './pages/login';


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


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/login" component={Login} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
