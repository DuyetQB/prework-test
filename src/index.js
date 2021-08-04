import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';


import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';

import App from './App';



// import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-utilities.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);


