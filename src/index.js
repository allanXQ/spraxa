import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

const theme = createTheme({
  typography:{
    fontFamily:'Poppins'
  },
  palette:{
    primary:{
      main: '#50d8af',
      other: "#0c2e8a"
    },
    secondary:{
      main: "#353535",
      other:"#343c5c",
      icon:"#666666"
    },
    wfo:{
      main:"#01b5ff"
    }
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
