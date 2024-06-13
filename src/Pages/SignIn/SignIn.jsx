import React, { useState } from "react";
import axios from "axios";
import Pulseloader from "react-spinners/PulseLoader";
import {
  Paper,
  TextField,
  Button,
  Link,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HomeScreenStyles, picts, btn, link } from "./SigninStyles";
import * as yup from "yup";
import { useFormik } from "formik";
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function SignIn() {
  const navigation = useNavigate();
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(false)


  const validationSchema = yup.object({
    userName: yup.string("Enter your emai").required(" ").email("Enter valid Email"),
    password: yup
      .string("Enter your password")
      .required(" "),
  });

 
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      setLoading(true)
      axios
        .post("http://localhost:9000/admin",{
          userName: values.userName,
          password: values.password,
        })
        .then(function (response) {
          setLoading(false)
          if (response.data.success === 1) {
            navigation("/dashboard");

          } else {
            setError("Invalid Username or Password, Please try again.")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={HomeScreenStyles}>
        <Paper elevation={10}>
          <Stack direction="row">
            <Box sx={picts} width={"530px"}></Box>
            <Box>
              <Box
                sx={{ height: "470px", width: "330px", p: "20px", pt: "30px" }}
              >
                <Box align="center">
                  <Typography variant="h3">Xpress</Typography>
                  <Typography variant="h5" gutterBottom>
                    Sign In
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Box sx={{ mt: "15px", mb: "20px" }} id="uper">
                      <TextField
                        label="UserName"
                        variant="standard"
                        name="userName"
                        fullWidth
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.userName &&
                          Boolean(formik.errors.userName)
                        }
                        helperText={
                          formik.touched.userName && formik.errors.userName
                        }
                      />
                    </Box>
                    <Box sx={{ mt: "5px", mb: "15px" }}>
                      <TextField
                        label="Password"
                        type="password"
                        variant="standard"
                        name="password"
                        fullWidth
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Box>
                    <Typography sx={{color:"red",fontSize:"13px"}}> {error? <Box mb={-3}><Collapse in={error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setError(null);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      </Collapse></Box> :""}</Typography>
                    <Button
                      type="submit"
                      variant="contained"
                      id="btn"
                      sx={btn}
                      fullWidth
                    >
                      Sign In <span style={{margin:"0 5px"}}></span><Pulseloader
                          color={"white"}
                          loading={loading}
                          size={6}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                    </Button>
                    <Typography>
                      <Link sx={link} href="#">
                        Forgot password?
                      </Link>
                    </Typography>
                    <Typography sx={{ fontSize: 13 }}>
                      {" "}
                      Access to the admin panel requires an account. without
                      one, entry is not permitted.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </form>
  );
}
