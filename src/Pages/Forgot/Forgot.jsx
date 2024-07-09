import React, { useState } from "react";
import axios from "axios";

import LoginIcon from "@mui/icons-material/Login";
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
import { HomeScreenStyles, picts, btn, link } from "./ForgotStyle";

import CircularProgress from "@mui/material/CircularProgress";

import Alert from "@mui/material/Alert";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BACKEND_URL } from "../../Constants/index";

export default function Forgot() {
  const [formStep, setFormStep] = React.useState(0);

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [forgotData, setForgotData] = React.useState({
    email: "",
    otp: "",
    newPass: "",
    comfirm: "",
  });

  const changebtn = {
    px: 2,
    py: 0.8,
    my: 0.5,
    mx: 2,
    textTransform: "none",
    bgcolor: "#60a5fa",
    color: "#fff",
    ":hover": {
      bgcolor: "#3b82f6",
      color: "#000",
    },
  };
  const changebtn1 = {
    px: 2,
    py: 0.8,
    my: 2,
    mx: 3,
    textTransform: "none",
    bgcolor: "#60a5fa",
    color: "#fff",
    ":hover": {
      bgcolor: "#3b82f6",
      color: "#000",
    },
  };

  async function checkEmail() {
    setLoading(true);
    try {
      const result = await axios.post(`${BACKEND_URL}/admin/fogotemail`, {
        email: forgotData.email,
      });

      if (result.data.success === 1) {
        setLoading(false);
        CompleteFormStep();
      } else {
        setLoading(false);
        toast.error("Unvalid Email !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch {
      setLoading(false);
      alert("Backend Error");
    }
  }
  const checkOtp = async () => {
    setLoading(true);
    try {
      const result = await axios.post(`${BACKEND_URL}/admin/checkopt`, {
        email: forgotData.email,
        otp: forgotData.otp,
      });

      if (result.data.success === 1) {
        setLoading(false);
        CompleteFormStep();
      } else {
        setLoading(false);
        toast.error("OTP NOT MATCH !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch {
      setLoading(false);
      alert("Backend Error");
    }
  };

  const savechange = async () => {
    setLoading(true);
    try {
      const result = await axios.post(`${BACKEND_URL}/admin/forgotChange`, {
        email: forgotData.email,
        pass: forgotData.newPass,
        compass: forgotData.comfirm,
      });

      if (result.data.success === 1) {
        setLoading(false);
        CompleteFormStep();
      } else {
        setLoading(false);
        alert(result.data.message);
      }
    } catch {
      setLoading(false);
      alert("Backend Error");
    }
  };

  const CompleteFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  return (
    <Box sx={HomeScreenStyles}>
      <Paper elevation={10}>
        <Stack direction="row">
          <Box sx={picts} width={"530px"}></Box>
          <Box>
            <Box
              sx={{
                height: "470px",
                width: "330px",
                p: "20px",
                pt: "30px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Box align="center" mt={2}>
                <Typography variant="h3">Xpress</Typography>
                <Typography color={"#a8a29e"} variant="h5">
                  Forgot Password ?
                </Typography>

                <Box sx={{ margin: "20px 0px" }}>
                  <Typography variant="body2">
                    Enter the Email address associated with your account and
                    we'll sent you a OTP to reset your password
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box sx={{ margin: "2px 0px" }}>
                    {formStep === 0 && (
                      <section>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <TextField
                              hiddenLabel
                              label="Enter your Email"
                              variant="outlined"
                              size="small"
                              name="email"
                              value={forgotData.email}
                              onChange={(event) =>
                                setForgotData({
                                  ...forgotData,
                                  email: event.target.value,
                                })
                              }
                            />
                          </Box>
                          <Box my={2}>
                            {" "}
                            <Button
                              sx={changebtn}
                              onClick={checkEmail}
                              type="submit"
                            >
                              Next <span style={{ margin: "0 5px" }}></span>{" "}
                              {loading ? (
                                <CircularProgress
                                  sx={{ color: "white" }}
                                  size={20}
                                />
                              ) : (
                                ""
                              )}
                            </Button>
                          </Box>
                        </Box>
                      </section>
                    )}
                    {formStep === 1 && (
                      <section>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <TextField
                              hiddenLabel
                              label="Enter OTP"
                              variant="outlined"
                              size="small"
                              name="otp"
                              value={forgotData.otp}
                              onChange={(event) =>
                                setForgotData({
                                  ...forgotData,
                                  otp: event.target.value,
                                })
                              }
                            />
                          </Box>
                          <Box my={2}>
                            {" "}
                            <Button
                              sx={changebtn}
                              onClick={checkOtp}
                              type="submit"
                            >
                              Verify<span style={{ margin: "0 5px" }}></span>{" "}
                              {loading ? (
                                <CircularProgress
                                  sx={{ color: "white" }}
                                  size={20}
                                />
                              ) : (
                                ""
                              )}
                            </Button>
                          </Box>
                        </Box>
                      </section>
                    )}
                    {formStep === 2 && (
                      <section>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            hiddenLabel
                            label="Enter New Password"
                            variant="outlined"
                            size="small"
                            name="newPass"
                            style={{ margin: "10px 0px" }}
                            value={forgotData.newPass}
                            onChange={(event) =>
                              setForgotData({
                                ...forgotData,
                                newPass: event.target.value,
                              })
                            }
                          />
                          <TextField
                            hiddenLabel
                            label="Comfirm Password"
                            variant="outlined"
                            size="small"
                            name="comfirm"
                            value={forgotData.comfirm}
                            onChange={(event) =>
                              setForgotData({
                                ...forgotData,
                                comfirm: event.target.value,
                              })
                            }
                          />
                          <Button
                            sx={changebtn1}
                            onClick={savechange}
                            type="submit"
                          >
                            Save changes
                            <span style={{ margin: "0 5px" }}></span>{" "}
                            {loading ? (
                              <CircularProgress
                                sx={{ color: "white" }}
                                size={20}
                              />
                            ) : (
                              ""
                            )}
                          </Button>
                        </Box>
                      </section>
                    )}
                    {formStep === 3 && (
                      <section>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Box mt={2}>
                            {/* <Typography variant="body2">
                              Change Password Successfully ....!
                            </Typography> */}
                            <Alert severity="success">
                              Change Password Successfully ....!
                            </Alert>
                          </Box>

                          <Button
                            size="small"
                            onClick={() => navigate("/")}
                            variant="contained"
                            sx={{
                              p: 1,
                              my: 4,
                              bgcolor: "#60a5fa",
                              ":hover": {
                                bgcolor: "#3b82f6",
                                color: "#fff",
                              },
                            }}
                            startIcon={<LoginIcon style={{ fontSize: 20 }} />}
                          >
                            <Typography sx={{ fontSize: 13 }}>
                              Click Here Sign UP
                            </Typography>
                          </Button>
                        </Box>
                      </section>
                    )}

                    <ToastContainer />
                  </Box>
                  {/* {renderButton()} */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
