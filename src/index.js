import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FoodStateProvider } from './context/food-state';
import { MenuStateProvider } from './context/menu-state';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#ff5722',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MenuStateProvider>
      <FoodStateProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </FoodStateProvider>
    </MenuStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
