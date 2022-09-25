import './App.css';
import React from 'react';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles= makeStyles({
  appMain:{
    paddingLeft: "320px",
    width: "100%"
  }
})

function App() {
  const classes= useStyles(); 
  return (
    <React.Fragment>
            
      <SideMenu />

      <div className={classes.appMain}>
    <Header/>
    </div>
      <div>here we go!</div>
      <CssBaseline/>
    </React.Fragment>
  );
}

export default App;
