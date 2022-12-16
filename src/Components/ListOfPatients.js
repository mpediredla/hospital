import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Outlet, useNavigate} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


// const editHandler1 = (row) => {
//   setEmpEid(e.Eid);
//   setEmpEname(e.Ename);
//   setEmpEmail(e.Email);
//   setEmpSkillset(e.Skillset);
//   setEmpTraining(e.Training);
//   setEmpTrainingStatus(e.TrainingStatus);
//   setShow(true);
// };


  

function ListOfPatients() {

  const navigate = useNavigate();

  const editHandler=()=>{
    navigate('/menu/patientDetails')
  }

  
  const [data, setData] = useState([]);
  const getData=()=>{
    axios
        .get("http://172.17.12.65:4000/listofusers")
        .then((response) => setData(response.data.respones)); 
  }
  console.log(data);

  useEffect(() => {
      getData();
  }, []);


  const deleteHandler=(row)=>{
    var deleted=axios.delete(`http://172.17.12.65:4000/deleteuser/${row.Id}`)
    .then((response) =>console.log(response))
    getData(deleted);
};




  return (
    <>
    <div>
    <Card >

       <Stack direction="row" spacing={3} >
 <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Patient name" variant="outlined" />
    </Box>
      <Button variant="contained" color="primary" style={{'width':'20ch', 'height':'7ch','marginTop':'8px'}}>
        search
      </Button>
      <Button variant="contained" color="primary" style={{'width':'20ch', 'height':'7ch','marginTop':'8px'}}>
        Reset
      </Button>
      </Stack>
      </Card>
    
    </div>


    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="left">Patient Name</StyledTableCell>
            <StyledTableCell align="center">Phone numbe</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Appointment Date&Time</StyledTableCell>
            <StyledTableCell align="center">Patient Problem</StyledTableCell>
            <StyledTableCell align="center" >Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,Id) => {
            return(
          <StyledTableRow key={row.Id}>
          <StyledTableCell component="th" scope="row">
          {row.Id}
          </StyledTableCell>       
            <StyledTableCell align="left">{row.LastName} {row.Firstname} {row.Middlename}</StyledTableCell>
              <StyledTableCell align="center">{row.PhoneNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.Addressline1}</StyledTableCell>
              <StyledTableCell align="center">{row.appointment}</StyledTableCell>
              <StyledTableCell align="center">{row.patientproblem}</StyledTableCell>
              <StyledTableCell align="center">
              <IconButton aria-label="edit" color="primary" onClick={()=>editHandler()}><EditIcon /></IconButton>                
              </StyledTableCell>
              <StyledTableCell align="center">
              <IconButton aria-label="delete" color="primary" onClick={()=>deleteHandler(row)}><DeleteIcon /></IconButton>                
              </StyledTableCell>
            </StyledTableRow>
            )
            
})}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    {/* <Outlet/> */}
    </>
  )
}

export default ListOfPatients