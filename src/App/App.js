import './App.css';
import React from 'react';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PageHeader from '../Components/PageHeader';
import ComputerIcon from '@mui/icons-material/Computer';

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default: '#f4f5fd'
    }
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateƵ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%"
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>

      <SideMenu />

      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title='Page Header'
          subtitle='Page Discription'
          icon={<ComputerIcon fontSize='large' />} />
      </div>
      <div>here we go!</div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
