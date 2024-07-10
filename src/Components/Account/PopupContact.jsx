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
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
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

export default function PopupContact(props) {
  const { openpopup, setopenpopup, pEmail, pTele } = props;

  const [conLoad, setconLoad] = React.useState(false);

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

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    tele: yup
      .string("Enter your Telephone")
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: pEmail,
      tele: pTele,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setconLoad(true);
      axios
        .post(`${BACKEND_URL}/admin/changeContact`, {
          adminID: ID,
          email: values.email,
          tele: values.tele,
        })
        .then(function (response) {
          setconLoad(false);
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
            handleClose();
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            toast.error("Change Not Successfull !", {
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
          setconLoad(false);
          console.log(error);
          toast.warn("Check internet Connection !", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });

      // handleClose();
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
            <Typography variant="h6">Edit Contact Info</Typography>
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
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              hiddenLabel
              label="Change email"
              variant="outlined"
              size="small"
              sx={{ mr: 3, mb: 1.5 }}
            />

            <TextField
              name="tele"
              value={formik.values.tele}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.tele && Boolean(formik.errors.tele)}
              helperText={formik.touched.tele && formik.errors.tele}
              hiddenLabel
              label="Change Tele"
              variant="outlined"
              size="small"
            />
          </DialogContent>
          <DialogActions>
            <Button sx={changebtn} type="submit">
              Save changes<span style={{ margin: "0 5px" }}></span>
              {conLoad ? (
                <CircularProgress sx={{ color: "black" }} size={20} />
              ) : (
                ""
              )}
            </Button>
          </DialogActions>
        </form>
        <ToastContainer />
      </BootstrapDialog>
    </React.Fragment>
  );
}
