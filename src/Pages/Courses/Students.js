import React from 'react'
import PageHeader from '../../Components/PageHeader';
import ComputerIcon from '@mui/icons-material/Computer';
import StudentForm from './StudentForm';
import {Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyls= makeStyles(theme=>({
  pageContent:{
    margin:theme.spacing(5),
    padding:theme.spacing(3)
  }
}))

export default function Students() {
  const classes=useStyls()
  return (
    <>
    <PageHeader
    title='New Course'
    subtitle='Form Design with Validation'
    icon={<ComputerIcon fontSize='large' />} />
    
    <Paper className={classes.pageContent}>
    <StudentForm />
    </Paper>
    </>
  )
}
