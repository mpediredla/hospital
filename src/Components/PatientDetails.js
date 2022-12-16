import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Outlet, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function PatientDetails() {
  const [data, setData] = useState([]);

  const [id, setid] = useState("");
  const [fName, setfName] = useState("");
  const [mName, setmName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [pNo, setpNo] = useState("");
  const [altpNo, setaltpNo] = useState("");
  const [age, setage] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [pincode, setpincode] = useState("");

  const putData = (e) => {
    e.preventDefault();
    // console.log(state)
    const put = {
      Id: id,
      Firstname: fName,
      Middlename: mName,
      LastName: lName,
      Email: email,
      PhoneNumber: pNo,
      AlternativeNumber: altpNo,
      Age: age,
      Addressline1: address1,
      Addressline2: address2,
      State: state,
      Country: country,
      Pincode: pincode,
    };
    axios
      .put("http://172.17.12.65:8000/updateuserdata", put)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //   getData();
  };

  const navigate = useNavigate();

const backHandler=()=>{
    navigate(-1)
}

const nextHandler=()=>{
    navigate('/menu/patientDetails2')
}

  return (
    <div>
      {/* <form>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <label>
          Id:
          <input
            type="nummber"
            name="id"
            value={id}
            onChange={(e) => setid(e.target.value)}
            disabled
          />
        </label>
        <br />
        <br />
        <label>
        Firstname:
          <input
            type="nummber"
            name="fName"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        Middlename:
          <input
            type="text"
            name="mName"
            value={mName}
            onChange={(e) => setmName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        LastName:
          <input
            type="mail"
            name="lName"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        PhoneNumber:
          <input
            type="text"
            name="pNo"
            value={pNo}
            onChange={(e) => setpNo(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        AlternativeNumber:
          <input
            type="text"
            name="altpNo"
            value={altpNo}
            onChange={(e) => setaltpNo(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        Age:
          <input
            type="nummber"
            name="age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        Addressline1:
          <input
            type="text"
            name="address1"
            value={address1}
            onChange={(e) => setaddress1(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        Addressline2:
          <input
            type="mail"
            name="address2"
            value={address2}
            onChange={(e) => setaddress2(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
        State:
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => setstate(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={pincode}
            onChange={(e) => setpincode(e.target.value)}
          />
        </label>
        <br />
        <br />


        <Button variant="contained" color="primary" >
          cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={putData}>
          submit
        </Button>
      </form> */}



<Card >
<CardContent style={{backgroundColor:'aliceblue'}}>
    <Grid container spacing={1}>
<Grid item xs={6}>
<h1 style={{ textAlign: "start", color: "#1976d2" }}>
        Patient Information
      </h1>
      </Grid>
    <Grid item xs={6}>
      <div style={{ textAlign: "right",marginTop:'5%'}}>
        <Button size="large" variant="contained" onClick={backHandler}><ArrowBackIcon/></Button>
      </div>
      </Grid>
  </Grid>

      </CardContent>
      </Card>




<Card sx={{ minWidth: 275 }} style={{ paddingBottom:'0%' }}>



      <CardContent style={{ color: "#1976d2",textAlign: "center" }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <div >
                <TextField 
                  id="outlined-basic"
                  name="Firstname"
                  label={ <span >{"FirstName"}</span>}
                defaultValue='Raju'
                />
              </div>
        </Grid>
        <Grid item xs={4}>
        <div >
                <TextField 
                  id="outlined-basic"
                  name="Phone Number"
                  label={ <span >{"Phone Number"}</span>}
                defaultValue='8943486246'
                />
              </div>
        </Grid>
        <Grid item xs={4}>
        <div >
                <TextField 
                  id="outlined-basic"
                  name="Email id"
                  label={ <span >{"Email id"}</span>}
                defaultValue='mkdhshd@gmail.com'
                />
              </div>
        </Grid>

      </Grid>

<br/>
<Grid container spacing={1}>
        <Grid item xs={4}>
        <div >
                <TextField 
                  id="outlined-basic"
                  name="Alternative number"
                  label={ <span >{"Alternative number"}</span>}
                defaultValue='794466548556'
                />
              </div>
        </Grid>
        <Grid item xs={4}>
        <div >
                <TextField 
                  id="outlined-basic"
                  name="Age"
                  label={ <span >{"Age"}</span>}
                defaultValue='44'
                />
              </div>
        </Grid>
        <Grid item xs={4}>
        <div >
                <TextField 
                  id="outlined-basic"
                  name="Bloodgroup"
                  label={ <span >{"Bloodgroup"}</span>}
                defaultValue='o+'
                />
              </div>
        </Grid>

        </Grid>

        <br/>



      <Grid container spacing={1}>
      <Grid item xs={4}>
      <div >
                <TextField 
                  id="outlined-basic"
                  name="Address"
                  label={ <span >{"Address"}</span>}
                defaultValue='8-0, vizag'
                />
              </div>
  </Grid>
  <Grid item xs={4}>
  <div >
                <TextField 
                  id="outlined-basic"
                  name="State"
                  label={ <span >{"State"}</span>}
                defaultValue='AP'
                />
              </div>
  </Grid>
  <Grid item xs={4}>
<div >
                <TextField 
                  id="outlined-basic"
                  name="Country"
                  label={ <span >{"Country"}</span>}
                defaultValue='India'
                />
              </div>
  </Grid>
</Grid>

<br/>
<Grid container spacing={1}>
  <Grid item xs={4}>
  <div >
                <TextField 
                  id="outlined-basic"
                  name="Pine code"
                  label={ <span >{"Pine code"}</span>}
                defaultValue='535216'
                />
              </div>
  </Grid>
  </Grid>
      </CardContent>
    </Card>

<br/>
    <Grid container spacing={1}>
      <Grid item xs={12}>
      <div style={{ textAlign: "right"}}>
      <Button size="large" variant="contained"  onClick={nextHandler}>Next</Button>
      </div>
      </Grid>
  </Grid>

    </div>
  );
}

export default PatientDetails;
