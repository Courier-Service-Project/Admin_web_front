import React from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
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
import Popup from "../../Components/Account/Popup"
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



var pffname
var pllname

var firstName

export default function Account() {

  const[openpopup,setopenpopup] = React.useState(false);
  
  axios
  .post("http://localhost:3000/src/routes/profileDget", {
    id:1,
  })
  .then(function (response) {
     pffname=document.getElementById("fname").value=response.data.data[0].fname
     pllname=document.getElementById("lname").value=response.data.data[0].lname
  })
  .catch(function (error) {
    console.log(error);
  })

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  



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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src={profile}
                sx={{ width: 150, height: 150 }}
              />
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
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
              <Button variant="contained" sx={deleteimg}>
                Delete Image
              </Button>
            </Box>
          </Box>
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
                defaultValue={firstName}
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
                  defaultValue="Suresh"
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
                <Button variant="contained" onClick={()=>setopenpopup(true)} sx={changebtn}>
                  Change name
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 8, mb: 4 }} />
          </Box>
          <Box sx={{ mt: 4, ml: 3 }}>
            <Typography sx={{ fontWeight: "bold" }}>Contact Info</Typography>
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
                  id="outlined-read-only-input"
                  defaultValue="malindasuresh47@gmail.com"
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
                  id="outlined-read-only-input"
                  defaultValue="070-1271912"
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
                <Button variant="contained" sx={changebtn}>
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
                <Button variant="contained" sx={changebtn}>
                  Change Password
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 8, mb: 4 }} />
          </Box>
        </Box>
      </Box>
      <Popup
        openpopup = {openpopup}
        setopenpopup ={setopenpopup}
        pfname={pffname}
        plname={pllname}
      />
    </Box>
  );
}
