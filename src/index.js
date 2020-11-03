import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FoodStateProvider } from './context/food-state';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#00e676',
    },
  },
});

ReactDOM.render(
  <FoodStateProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </FoodStateProvider>,
  document.getElementById('root')
);
