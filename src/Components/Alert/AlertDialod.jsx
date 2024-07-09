import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button 
        fullWidth
        size="medium"
        variant="contained" 
        sx={{
          mt: 2,
          bgcolor: props.bgcolor,
          margin: "0px 0 0px 0",
          gap: "3px",
          ":hover": {
                  bgcolor: props.hoverbgcolor,
                  color: "#fff",
          },
        }}
      onClick={handleClickOpen}>
        {props.icon && <props.icon sx={{ mr: 1 }} />}
        {props.button}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "500px",
            maxWidth: "none",
            padding: "10px",
          },
        }}
      >
        <DialogTitle id="title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >{props.buttonName1}</Button>
          <Button 
            variant="contained"
            style={{ backgroundColor: props.bcolor }}
            onClick={props.onClick1} autoFocus>
            {props.buttonName2}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}