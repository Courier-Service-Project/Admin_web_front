import React, { useEffect } from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";
import profile from "../../Assets/round.png";
import axios from "axios";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Divider, Grid } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import { changebtn, updateimg, deleteimg } from "./AccountStyles";
import Popup from "../../Components/Account/Popup";
import PopupContact from "../../Components/Account/PopupContact";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "react-avatar-edit";
import { BACKEND_URL, ID } from "../../Constants/index";
import ChangePass from "../../Components/Account/ChangePass";
import AccSkeleton from "./AccSkeleton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Account() {
  const [openpopup, setopenpopup] = React.useState(false);
  const [openConpopup, setopenConpopup] = React.useState(false);
  const [openChange, setChange] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [formdata, setFormdata] = React.useState({
    fName: "",
    fLame: "",
    eGmail: "",
    tTele: "",
  });

  const [open, setOpen] = React.useState(false);
  const [preview,setpreview]=React.useState(profile);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    upLoadProfile();
  };
  const deleteImage=()=>{
    deleteProfileImage()
  }

  

  useEffect(()=>{
    
  },[preview])
  const onClose = () => {
    setpreview(preview);
  };
  const onCrop = (view) => {
    setpreview(view);
    //alert(preview);
  };

  const upLoadProfile=async()=>{
    const body={
      preview
    }
    try{
      const result=await axios.patch(`${BACKEND_URL}/admin/updateProfile/${ID}`,body)
       console.log(result);
       if(result.data.success==200){

       }else if(result.data.success==101){

       }else{

       }
    }catch(error){

    }
    
  }

  const deleteProfileImage=async()=>{
    const result=await axios.delete(`${BACKEND_URL}/admin/deleteProfileImage/${ID}`)
    if(result.data.success=200){
      getUserDetails();
    }else if(result.data.success==101){

    }else{

    }
  }

  const getUserDetails=async()=>{
    axios
      .get(`${BACKEND_URL}/admin/getinfo?adminID=${ID}`, {
        headers: {
          access_token: localStorage.getItem("login"),
        },
      })

      .then(function (response) {
        setLoading(false);
        setFormdata({
          ...formdata,
          fName: response.data.data[0].FirstName,
          fLame: response.data.data[0].LastName,
          eGmail: response.data.data[0].Email,
          tTele: response.data.data[0].Tele,
        });
        setpreview(response.data.data[0].AdminProfileUrl)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    setLoading(true);
    getUserDetails();
  }, []);

  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh" }}>
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}
        >
          <Box sx={{ mx: 3, mb: 3 }}>
            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
              <AppsIcon sx={{ mr: 3 }} />
              Account
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              color={"#9e9e9e"}
              pl={6}
            >
              Real time information and activities of your property.
            </Typography>
          </Box>
          <Divider sx={{ mb: 8, ml: 3 }} />

          {loading ? (
            <AccSkeleton />
          ) : (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 4,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* ....................................................................... */}

                  <Box>
                      <img
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        src={preview !=null ?preview:profile}
                        alt="profile"
                      />


                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <DialogTitle
                        sx={{ m: 0, p: 2 }}
                        id="customized-dialog-title"
                      >
                        Change Profile Image
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
                        <Avatar
                          width={400}
                          height={300}
                          onCrop={onCrop}
                          onClose={onClose}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          Save changes
                        </Button>
                      </DialogActions>
                    </BootstrapDialog>
                  </Box>

                  <Box sx={{ ml: 3 }}>
                    <Typography sx={{ fontSize: 20, mb: 1 }}>
                      Profile picture
                    </Typography>
                    <Typography sx={{ fontSize: 10 }}>
                      PNG,JPEG under 15MB
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={updateimg}
                    onClick={handleClickOpen}
                  >
                    Change Image
                  </Button>
                  <Button variant="contained" sx={deleteimg}
                  onClick={deleteImage}
                  >
                    Delete Image
                  </Button>
                </Box>
              </Box>
              {/* ....................................................................... */}

              <Box sx={{ mt: 7, ml: 3 }}>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Full Name
                </Typography>

                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <Typography color={"#9e9e9e"}>First name</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      sx={{ boxShadow: 1 }}
                      id="fname"
                      defaultValue="########"
                      value={formdata.fName}
                      InputProps={{
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography color={"#9e9e9e"}>Last name</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      sx={{ boxShadow: 1 }}
                      id="lname"
                      defaultValue="###########"
                      value={formdata.fLame}
                      InputProps={{
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      justifyContent: "right",
                      display: "flex",
                      alignItems: "end",
                      pr: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => setopenpopup(true)}
                      sx={changebtn}
                    >
                      Change name
                    </Button>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 8, mb: 4 }} />
              </Box>
              <Box sx={{ mt: 4, ml: 3 }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Contact Info
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  sx={{ mb: 2 }}
                  color={"#9e9e9e"}
                >
                  Manage your accounts email address for the invoices.
                </Typography>

                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <Typography color={"#9e9e9e"}>Email</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      sx={{ boxShadow: 1 }}
                      id="email"
                      defaultValue="################"
                      value={formdata.eGmail}
                      InputProps={{
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography color={"#9e9e9e"}>Tele</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      sx={{ boxShadow: 1 }}
                      id="tele"
                      defaultValue="###################"
                      value={formdata.tTele}
                      InputProps={{
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      justifyContent: "end",
                      display: "flex",
                      alignItems: "end",
                      pr: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => setopenConpopup(true)}
                      sx={changebtn}
                    >
                      Change Contact info
                    </Button>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 8, mb: 4 }} />
              </Box>
              <Box sx={{ mt: 4, ml: 3 }}>
                <Typography sx={{ fontWeight: "bold" }}>Password</Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  color={"#9e9e9e"}
                  sx={{ mb: 2 }}
                >
                  Modify your current password.
                </Typography>

                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <Typography color={"#9e9e9e"}>Current Password</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      type="password"
                      sx={{ boxShadow: 1 }}
                      id="outlined-read-only-input"
                      defaultValue="malindaSureshMadhushan"
                      InputProps={{
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <KeyIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      justifyContent: "end",
                      display: "flex",
                      alignItems: "end",
                      pr: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => setChange(true)}
                      sx={changebtn}
                    >
                      Change Password
                    </Button>
                  </Grid>
                </Grid>

                <Divider sx={{ mt: 8, mb: 4 }} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {formdata.fLame && formdata.fName && (
        <Popup
          openpopup={openpopup}
          setopenpopup={setopenpopup}
          plname={formdata.fLame}
          pfname={formdata.fName}
          setFormdata={setFormdata}
        />
      )}

      {formdata.eGmail && formdata.tTele && (
        <PopupContact
          openpopup={openConpopup}
          setopenpopup={setopenConpopup}
          pEmail={formdata.eGmail}
          pTele={formdata.tTele}
        />
      )}

      <ChangePass openpopup={openChange} setopenpopup={setChange} />
    </Box>
  );
}
