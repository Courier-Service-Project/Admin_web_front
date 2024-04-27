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
import clsx from "clsx";
import { useFormik } from "formik";
import * as yup from "yup";
import { Block } from "@mui/icons-material";
import { Hidden } from "@mui/material";

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
      CompleteFormStep();
      alert("axios0");
    },
  });

  const validationSchema1 = yup.object({
    newPass: yup.string("Enter your email").required("Email is required"),
  });
  const formik1 = useFormik({
    initialValues: {
      newPass: "",
    },
    validationSchema: validationSchema1,
    onSubmit: (values) => {
      CompleteFormStep();
      alert("axios1");
    },
  });

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <Button sx={changebtn} onClick={formik0.handleSubmit} type="submit">
          Next
        </Button>
      );
    } else if (formStep === 1) {
      return (
        <Button sx={changebtn} onClick={formik1.handleSubmit} type="submit">
          Change Password
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
          <DialogContent dividers sx={{ width: "500px" }}>
            {formStep === 0 && (
              <section>
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
                  helperText={formik0.touched.prePass && formik0.errors.prePass}
                />
              </section>
            )}
            {formStep === 1 && (
              <section>
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
                  helperText={formik1.touched.newPass && formik1.errors.newPass}
                />
              </section>
            )}
            {formStep === 2 && (
              <section>
                <p>Successfully completed</p>
              </section>
            )}
          </DialogContent>
          <DialogActions>{renderButton()}</DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}
