import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Pendingalert(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button fullWidth  size="large" variant="contained"
          style={{
            backgroundColor: props.color,
            margin: "30px 0 10px 0",
            borderRadius: "50px",
            gap:'10px'
        }}
        // sx={{
        //     // bgcolor: "#00897b",
        //     // marginTop: '10px',
        //     // marginLeft: '200px',
        //     // ":hover": {
        //     //     bgcolor: "#009688",
        //     //     color: "#616161",
        //     // },
        //     margin: "30px 0 10px 0 ",borderRadius: "50px"
        // }}
      onClick={handleClickOpen}>
        {props.Icon}{props.button}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
            '& .MuiDialog-paper': {
              width: '500px',
              maxWidth: 'none',
              padding: "15px"
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
          <Button onClick={handleClose} sx={{ color: "black" }}>{props.buttonName1}</Button>
          <Button variant="contained" style={{backgroundColor: props.bcolor}} onClick={props.onClick1} autoFocus>
            {props.buttonName2}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}