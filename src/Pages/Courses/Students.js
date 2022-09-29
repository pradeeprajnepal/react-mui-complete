import { React, useState } from 'react'
import PageHeader from '../../Components/PageHeader';
import ComputerIcon from '@mui/icons-material/Computer';
import StudentForm from './StudentForm';
import { Paper, TableBody, Toolbar, TableRow, TableCell, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useTable from '../../Components/Table/useTable';
import * as studentData from '../../Datas/studentData';
import { Controls } from '../../Components/Controls/Controls';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: "75%"
  }
}))

const headCells = [
  { id: 'fullName', label: 'Student Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'course', label: 'Course', disableSorting: true },
]

export default function Students() {

  const classes = useStyles()

  const [records, setRecords] = useState(studentData.getAllStudents);
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting

  } = useTable(records, headCells, filterFn)

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == '')
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  return (
    <>
      <PageHeader
        title='New Course'
        subtitle='Form Design with Validation'
        icon={<ComputerIcon fontSize='large' />} />

      <Paper className={classes.pageContent}>
        {/* <StudentForm /> */}
        <Toolbar >
          <Controls.Input
            label="Search Students"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>)
            }}
            onChange={handleSearch}

          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {
              recordsAfterPagingAndSorting().map(item =>
              (<TableRow>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.course}</TableCell>
              </TableRow>)
              )
            }
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  )
}
