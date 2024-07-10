import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { BACKEND_URL, ID } from "../../Constants/index";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Popup(props) {
  const { openpopup, setopenpopup } = props;
  const [error, setError] = React.useState(false);

  const [load, setLoad] = React.useState(false);
  const [formStep, setFormStep] = React.useState(0);

  const CompleteFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const handleClose = () => {
    setFormStep(0);
    setopenpopup(false);
  };

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

  const validationSchema0 = yup.object({
    prePass: yup.string("Enter your email").required("Email is required"),
  });
  const formik0 = useFormik({
    initialValues: {
      prePass: "",
    },
    validationSchema: validationSchema0,
    onSubmit: (values) => {
      setLoad(true);
      axios
        .post(`${BACKEND_URL}/admin/CheckPrePassword`, {
          adminID: ID,
          Password: values.prePass,
        })
        .then(function (response) {
          setLoad(false);
          console.log(response);
          if (response.data.success) {
            CompleteFormStep();
          } else {
            setError("Invalid Password Please Re-Enter");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  const validationSchema1 = yup.object({
    newPass: yup.string("Enter New Password").required("password is required"),
    comNewPass: yup
      .string()
      .oneOf([yup.ref("newPass"), null], "Passwords must match")
      .required("password is required"),
  });
  const formik1 = useFormik({
    initialValues: {
      newPass: "",
      comNewPass: "",
    },
    validationSchema: validationSchema1,
    onSubmit: (values) => {
      setLoad(true);
      axios
        .post(`${BACKEND_URL}/admin/ChangePassword`, {
          adminID: ID,
          newPassword: values.newPass,
          comPassword: values.comNewPass,
        })
        .then(function (response) {
          setLoad(false);
          console.log(response.data.success);
          if (response.data.success === 1) {
            toast.success("Change successfully completed !", {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          handleClose();
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <Button sx={changebtn} onClick={formik0.handleSubmit} type="submit">
          Next <span style={{ margin: "0 5px" }}></span>
          {load ? <CircularProgress sx={{ color: "white" }} size={20} /> : ""}
        </Button>
      );
    } else if (formStep === 1) {
      return (
        <Button sx={changebtn} onClick={formik1.handleSubmit} type="submit">
          Change Password<span style={{ margin: "0 5px" }}></span>
          {load ? <CircularProgress sx={{ color: "black" }} size={20} /> : ""}
        </Button>
      );
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openpopup}
      >
        <form>
          <DialogTitle
            sx={{
              p: 1.5,
            }}
          >
            <Typography variant="h6">Change Password</Typography>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            dividers
            sx={{
              width: "500px",
            }}
          >
            {formStep === 0 && (
              <section>
                <Box>
                  <TextField
                    hiddenLabel
                    label="Enter Pre Password"
                    variant="outlined"
                    size="small"
                    sx={{ mr: 3, mb: 1.5 }}
                    name="prePass"
                    value={formik0.values.prePass}
                    onChange={formik0.handleChange}
                    onBlur={formik0.handleBlur}
                    error={
                      formik0.touched.prePass && Boolean(formik0.errors.prePass)
                    }
                    helperText={
                      formik0.touched.prePass && formik0.errors.prePass
                    }
                  />
                  <Typography sx={{ color: "red", fontSize: "13px" }}>
                    {" "}
                    {error ? (
                      <Box mb={-3}>
                        <Collapse in={error}>
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
                        </Collapse>
                      </Box>
                    ) : (
                      ""
                    )}
                  </Typography>
                </Box>
              </section>
            )}
            {formStep === 1 && (
              <section>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <TextField
                    hiddenLabel
                    label="Enter New Password"
                    variant="outlined"
                    size="small"
                    sx={{ mr: 3, mb: 1.5 }}
                    name="newPass"
                    value={formik1.values.newPass}
                    onChange={formik1.handleChange}
                    onBlur={formik1.handleBlur}
                    error={
                      formik1.touched.newPass && Boolean(formik1.errors.newPass)
                    }
                    helperText={
                      formik1.touched.newPass && formik1.errors.newPass
                    }
                  />
                  <TextField
                    hiddenLabel
                    label="Enter New Password"
                    variant="outlined"
                    size="small"
                    sx={{ mr: 3, mb: 1.5 }}
                    name="comNewPass"
                    value={formik1.values.comNewPass}
                    onChange={formik1.handleChange}
                    onBlur={formik1.handleBlur}
                    error={
                      formik1.touched.comNewPass &&
                      Boolean(formik1.errors.comNewPass)
                    }
                    helperText={
                      formik1.touched.comNewPass && formik1.errors.comNewPass
                    }
                  />
                </Box>
              </section>
            )}
          </DialogContent>
          <DialogActions>{renderButton()}</DialogActions>
        </form>
      </BootstrapDialog>
      <ToastContainer />
    </React.Fragment>
  );
}
