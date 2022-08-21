import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ShowStudent() {
  const classes = useStyles();

  const [studentList, setStudentList] = useState([])

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`).then(() => {
      window.location.reload(false);
    })
  }
  useEffect(()=>{
    axios.get('https://student-app-servers.herokuapp.com/students').then ((allStudents) => {
      setStudentList(allStudents.data)
    })
  }, [])

  return (
    <>
    <h2>All Student</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Registration Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.regNo}
              </TableCell>
              <TableCell align="right">{student.studentName}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
              <Button variant="outlined" startIcon={<DeleteIcon fontSize='small' />} onClick ={() => {
                  deleteStudent(student._id)
              }}>
                  Delete
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
