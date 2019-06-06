import { CssBaseline } from '@material-ui/core';
import { App, CurrentThemeProvider } from '@src/components';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  (
    <CurrentThemeProvider>
      <CssBaseline />
      <App />
    </CurrentThemeProvider>
  ), document.getElementById('root')
);
