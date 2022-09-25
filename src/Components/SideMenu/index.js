import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  sideMenu: {
      display:'flex',
      flexDirection:'column',
      position:'absolute',
      left:'0px',
      width:'320px',
      height:'100%',
      backgroundColor:'#0094de'
  }

})

const SideMenu = () => {
  const classes= useStyles();
  console.log(classes)
  return (
    <div className={classes.sideMenu}>index</div>
  )
}

export default SideMenu;

