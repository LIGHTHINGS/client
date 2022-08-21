import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch', 
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();

  const [student, setStudent] = useState({
    regNo: 0,
    studentName: ' ',
    grade: ' ',
    section: ''
  });

  const createStudent = () => {
    axios.post('https://student-app-servers.herokuapp.com/students', student).then(() => {
      window.location.reload(false);
    })
  }

//   const onclicksubmit = (e)=>{
// e.preventDefault()
// console.log("enter is clicked")
//   }
  return (
    <>
    <h2>Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Registration Number" variant="outlined"  value={student.regNo} onChange={(event)=>{
        setStudent({...student, regNo: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event)=>{
        setStudent({...student, studentName: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event)=>{
        setStudent({...student, grade: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=>{
        setStudent({...student, section: event.target.value})
      }} />
      <Button
      type='submit'
      variant="contained" 
      color='primary' 
      onClick={createStudent}
      >Create</Button>
    </form>
    </>
  );
}
