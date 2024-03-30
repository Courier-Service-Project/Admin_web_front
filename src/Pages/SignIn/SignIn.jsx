import React from "react";
import axios from "axios";
import Notifi from "../../Components/Notification/Notifi";
import { ToastContainer } from "react-toastify";
import {
  Paper,
  TextField,
  Button,
  Link,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import Error from "../../Components/Notification/Error";
import { useNavigate } from "react-router-dom";
import { CheckEmpty } from "../../Validation/Validation";
import { HomeScreenStyles, picts, btn, link } from "./SigninStyles";
import {BACKEND_URL} from "../../Constants/index"

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const navigation = useNavigate();
  const register = (e) => {
    e.preventDefault();
    
    //validations
    if (CheckEmpty(email) || CheckEmpty(password)) {
      const msg = "Email / Password could not Empty";
      Error(msg);
      return;
    }

    axios
      .post(`${BACKEND_URL}/src/routes/admin`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.success === 1) {
          const msg = "Login SuccessFully";
          Notifi(msg);
          navigation("/dashboard");
        } else {
          const msg = "Invalid Email / Password ";
          Error(msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <Box sx={HomeScreenStyles}>
      <Paper elevation={10}>
        <Stack direction="row">
        <Box sx={picts} width={"530px"}></Box>
          <Box >
            <Box
              sx={{ height: "470px", width: "330px", p: "20px", pt: "30px" }}
            >
              <Box align="center">
                <Typography variant="h3">Xpress</Typography>
                <Typography variant="h5" gutterBottom>
                  Sign In
                </Typography>
              </Box>
              <Box component="form">
                <Box>
                  <Box sx={{ mt: "15px", mb: "20px" }} id="uper">
                    <TextField
                      label="UserName"
                      variant="standard"
                      fullWidth
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                  <Box sx={{ mt: "5px", mb: "40px" }}>
                    <TextField
                      label="Password"
                      type="password"
                      variant="standard"
                      fullWidth
                      required
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </Box>
                  <Button
                    type="submit"
                    onClick={register}
                    variant="contained"
                    id="btn"
                    sx={btn}
                    fullWidth
                    
                  >
                    Sign In
                  </Button>
                  <Typography>
                    <Link sx={link} href="#">
                      Forgot password?
                    </Link>
                  </Typography>
                  <Typography sx={{fontSize:13}}>
                    {" "}
                    Access to the admin panel requires an account. without one,
                    entry is not permitted.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
        <ToastContainer />
      </Paper>
    </Box>
  );
}
