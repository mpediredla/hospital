import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PatientDetails2() {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  const finishHandler = () => {
    navigate("/menu/patientslist");
  };

  return (
    <div>
      <Card style={{ backgroundColor:'aliceblue'}}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <h1 style={{ textAlign: "start", color: "#1976d2" }}>Reports</h1>
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: "right", marginTop: "3.5%" }}>
              <Button size="large" variant="contained" onClick={backHandler}>
                <ArrowBackIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>

      <h3 style={{ textAlign: "start", color: "#1976d2" }}>
        Patient Problem : Cold
      </h3>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275}}>
            <h2>Lab Reports</h2>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275}}>
            <h2>Scanning Reports</h2>
          </Card>
        </Grid>
      </Grid>

      <br />

      <div>
        <TextField
          style={{ width: 1290 }}
          name="Doctor Description"
          id="outlined-multiline-static"
          label="Doctor Description"
          variant="outlined"
          multiline
          rows={4}
        />
      </div>

      <br />
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div style={{ textAlign: "right" }}>
              <Button size="large" variant="contained" onClick={finishHandler}>
                Finish
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PatientDetails2;
