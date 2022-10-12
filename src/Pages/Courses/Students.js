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
import AddIcon from '@mui/icons-material/Add';
import Popup from '../../Components/Controls/Popup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Notification from '../../Components/Controls/Notification';
import ConfirmDialog from '../../Components/Controls/ConfirmDialog';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: "75%"
  },
  newButton: {
    position: 'absolute !important',
    right: '2px',
    width: '20%'
  },

}))

const headCells = [
  { id: 'fullName', label: 'Student Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'course', label: 'Course', disableSorting: true },
  { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Students() {

  const classes = useStyles()

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(studentData.getAllStudents);
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });

  const [openPopup, setOpenPopup] = useState(false);

  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
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
        if (target.value === '')
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  const addOrEdit = (student, resetForm) => {
    if (student.id == 0)
      studentData.insertStudent(student)
    else
      studentData.updateStudent(student)
    resetForm();
    setRecordForEdit(null)
    setOpenPopup(false);
    setRecords(studentData.getAllStudents);
    setNotify({
      isOpen: true,
      message: 'Submitted Successfully',
      type: 'success'
    })
  }

  const openInPopup = item => {
    setRecordForEdit(item);
    setOpenPopup(true);
  }

  const onDelete = id => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
    studentData.deleteStudent(id);
    setRecords(studentData.getAllStudents());
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error'
    })
  }



  return (
    <>
      <PageHeader
        title='New Course'
        subtitle='Form Design with Validation'
        icon={<ComputerIcon fontSize='large' />} />

      <Paper className={classes.pageContent}>
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
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => { setOpenPopup(true); setRecordForEdit(null) }}
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
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    variant="outlined"
                    onClick={() => { openInPopup(item) }} >
                    <EditIcon fontSize="small"
                    />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: 'Are you sure to delete this record?',
                        subTitle: "You can't undo this operation",
                        onConfirm: () => { onDelete(item.id) }
                      })

                    }} >

                    <DeleteIcon fontSize="small" />
                  </Controls.ActionButton>

                </TableCell>
              </TableRow>)
              )
            }
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Student Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}>
        <StudentForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit} />
      </Popup>
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )
}