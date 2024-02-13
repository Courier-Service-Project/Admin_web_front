import React from 'react'
import axios from 'axios';
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

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const register = (e)=>{
      console.log("im clicked")
      e.preventDefault();
      axios.post('http://localhost:3000/api/users/', {
        email:email,
        password:password
      })
      .then(function (response) {
        alert(response.data.success)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
                Sign Up
              </Typography>
            </Box>
            <Box component="form" >
              <div className="mali">
                <TextField
                  id="standard-basic"
                  label="UserName"
                  variant="standard"
                  fullWidth
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mali">
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  required
                  onChange={(e) => setPass(e.target.value)}

                />
              </div>

              <div className="reme">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me "
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
              <Typography>
                {" "}
                Do you have an account?
                <Link style={link} href="#">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
      </Paper>
    </Box>
  )
}
