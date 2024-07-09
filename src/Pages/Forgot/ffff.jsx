import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BACKEND_URL } from "../../Constants/index";
import { Paper, Link, Stack } from "@mui/material";
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
    textTransform: "none",
    bgcolor: "#26a69a",
    color: "#fff",
    ":hover": {
      bgcolor: "#80cbc4",
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

  const renderButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <Button sx={changebtn} onClick={checkEmail} type="submit">
          Next <span style={{ margin: "0 5px" }}></span>{" "}
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={20} />
          ) : (
            ""
          )}
        </Button>
      );
    } else if (formStep === 1) {
      return (
        <Button sx={changebtn} onClick={checkOtp} type="submit">
          Verify OTP<span style={{ margin: "0 5px" }}></span>{" "}
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={20} />
          ) : (
            ""
          )}
        </Button>
      );
    } else if (formStep === 2) {
      return (
        <Button sx={changebtn} onClick={savechange} type="submit">
          Save changes<span style={{ margin: "0 5px" }}></span>{" "}
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={20} />
          ) : (
            ""
          )}
        </Button>
      );
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "700px",
          height: "470px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Xpress</Typography>
          <Typography width={400} color={"#94a3b8"}>
            Enter the Email address associated with your account and we'll sent
            you a OTP to reset your password
          </Typography>
          {formStep === 0 && (
            <section>
              <Box>
                <TextField
                  hiddenLabel
                  label="Enter your Email"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 3, mb: 1.5 }}
                  name="email"
                  value={forgotData.email}
                  onChange={(event) =>
                    setForgotData({ ...forgotData, email: event.target.value })
                  }
                />
              </Box>
            </section>
          )}
          {formStep === 1 && (
            <section>
              <Box>
                <TextField
                  hiddenLabel
                  label="Enter OTP"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 3, mb: 1.5 }}
                  name="otp"
                  value={forgotData.otp}
                  onChange={(event) =>
                    setForgotData({ ...forgotData, otp: event.target.value })
                  }
                />
              </Box>
            </section>
          )}
          {formStep === 2 && (
            <section>
              <TextField
                hiddenLabel
                label="Enter New Password"
                variant="outlined"
                size="small"
                sx={{ mr: 3, mb: 1.5 }}
                name="newPass"
                value={forgotData.newPass}
                onChange={(event) =>
                  setForgotData({ ...forgotData, newPass: event.target.value })
                }
              />
              <TextField
                hiddenLabel
                label="Comfirm Password"
                variant="outlined"
                size="small"
                sx={{ mr: 3, mb: 1.5 }}
                name="comfirm"
                value={forgotData.comfirm}
                onChange={(event) =>
                  setForgotData({ ...forgotData, comfirm: event.target.value })
                }
              />
            </section>
          )}
          {formStep === 3 && (
            <section>
              change password Successfull
              <Button
                size="small"
                onClick={() => navigate("/")}
                variant="contained"
                sx={{
                  p: 1,
                  mt: 5,
                  bgcolor: "#00897b",
                  ":hover": {
                    bgcolor: "#4db6ac",
                    color: "#fff",
                  },
                }}
                startIcon={<AddCircleOutlineIcon style={{ fontSize: 20 }} />}
              >
                <Typography sx={{ fontSize: 13 }}>New Order</Typography>
              </Button>
            </section>
          )}
          {renderButton()}
          <ToastContainer />
        </Box>
      </Paper>
    </Box>
  );
}
