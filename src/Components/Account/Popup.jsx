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
import Typography from "@mui/material/Typography";
import axios from "axios";
import { BACKEND_URL, ID } from "../../Constants/index";
import { useFormik } from "formik";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Popup(props) {
  const { openpopup, setopenpopup, pfname, plname } = props;

  const [alert1, setAlert] = React.useState(false);

  const handleClose = () => {
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

  const validationSchema = yup.object({
    fName: yup.string("Enter your email").required("Email is required"),
    lName: yup.string("Enter your password").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fName: pfname,
      lName: plname,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAlert(true);
      axios
        .post(`${BACKEND_URL}/admin/changeUsername`, {
          adminID: ID,
          fname: values.fName,
          lname: values.lName,
        })
        .then(function (response) {
          console.log(response);
          setAlert(false);

          if (response.data.success === 1) {
            toast.success("Change successfully completed !", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          toast.warn("Check internet Connection !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });

      handleClose();
    },
  });

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openpopup}
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle sx={{ p: 1.5 }}>
            <Typography variant="h6">Edit Username</Typography>
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
          <DialogContent dividers>
            <TextField
              hiddenLabel
              label="Rename first name"
              variant="outlined"
              size="small"
              sx={{ mr: 3, mb: 1.5 }}
              name="fName"
              value={formik.values.fName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fName && Boolean(formik.errors.fName)}
              helperText={formik.touched.fName && formik.errors.fName}
            />
            <TextField
              hiddenLabel
              id="lname"
              label="Rename last name"
              variant="outlined"
              size="small"
              name="lName"
              value={formik.values.lName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lName && Boolean(formik.errors.lName)}
              helperText={formik.touched.lName && formik.errors.lName}
            />
          </DialogContent>
          <DialogActions>
            <Button sx={changebtn} type="submit">
              Save changes<span style={{ margin: "0 5px" }}></span>
              {alert1 ? (
                <CircularProgress sx={{ color: "black" }} size={20} />
              ) : (
                ""
              )}
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
      <ToastContainer />
    </React.Fragment>
  );
}
