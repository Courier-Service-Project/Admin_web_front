import React from 'react'
import axios from 'axios';
 import Notifi from "../../Components/Notification/Notifi";
 import { ToastContainer } from "react-toastify";
import "./SignIn.css"
import {
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import Error from '../../Components/Notification/Error';

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const register = (e)=>{
      e.preventDefault();
      axios.post('http://localhost:3000/api/users/', {
        email:email,
        password:password
      })
      .then(function (response) {
        if(response.data==="Hello"){
          Notifi();
        }
        else{
          Error();
        }
      })
      .catch(function (error) {
        Error();
      });
  }

  const ava = { backgroundColor: "black" };
  const link = { typography: "body1" };
  return (
    <Box className="homescreen">
    <Paper elevation={10}>
      <Stack direction="row">
        <Box className="picts">
          <Grid  className="frontImage"></Grid>
        </Box>
        <Box>
          <Box className="paper">
            <Box align="center">
              <Typography className="express" variant="h3">Xpress</Typography>
              <Typography variant="h5" gutterBottom>
                Sign In
              </Typography>
            </Box>
            <Box component="form" >
              <div className="mali"   id="uper">
                <TextField
                
                  label="UserName"
                  variant="standard"
                  fullWidth
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mali" id="under">
                <TextField
                  label="Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  required
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>

           

              <Button type="submit" onClick={register} variant="contained" id="btn" style={ava} fullWidth>
                Sign In
              </Button>
              <Typography>
                <Link style={link} href="#">
                  Forgot password?
                </Link>
              </Typography>
              <Typography style={{fontSize:13}}>
                {" "}
                Access to the admin panel requires an account. without one, entry is not permitted.
                {/* <Link style={link} href="#">
                  Sign Up
                </Link> */}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
      <ToastContainer />
      </Paper>
    </Box>
  )
}
