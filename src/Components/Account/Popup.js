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

  const handleClickOpen = () => {
    setopenpopup(true);
  };
  const handleClose = () => {
    setopenpopup(false);
  };

  const changebtn = {
    px:2,
    py:0.8,
    my: 0.5,
    textTransform: "none",
    bgcolor: "#26a69a",
    color: "#fff",
    ":hover": {
      bgcolor: "#80cbc4",
      color: "#000",
    },
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openpopup}
      >
        <DialogTitle sx={{ p: 1.5 }}>
        <Typography variant="h6">
          Edit Username
        </Typography>
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
            id="outlined-basic"
            label="Rename first name"
            variant="outlined"
            size="small"
            sx={{ mr: 3,mb:1.5 }}
            defaultValue={pfname}
          />
          <TextField
            hiddenLabel
            id="outlined-basic"
            label="Rename last name"
            variant="outlined"
            size="small"
            defaultValue={plname}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={changebtn} onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
