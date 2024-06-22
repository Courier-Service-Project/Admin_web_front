import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from '@mui/icons-material/Apps';
import { Typography } from "@mui/material";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import{
  Card,
  CardContent,
  Divider,
  TextField,
} from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";





export default function ViewOrder() {
  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                <AppsIcon sx={{ mr: 3 }} />
                RegisteredID - 2001N
              </Typography>
            </Box>
            <Box sx={{ml:4,mr:4,mt:5,mb:5}}>
      <Card sx={{boxShadow:3,border:"2px solid green",borderRadius:3}}>
        <CardContent>
          <Box component="form" sx={{m:4}}>
          <FormSubTitle subTitle="Register Details" />
        <Divider sx={{ mb:4,border:1}} />
        <Grid container spacing={6}>
        <Grid item xs={6} >
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                  size="small"
                  placeholder="Enter Your First name"
                  fullWidth
                  required
                />
        </Grid>
        <Grid item xs={6}>
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                  size="small"
                  placeholder="Enter Your Last name"
                  fullWidth
                  required
                />
        </Grid>
        </Grid>

        <Divider sx={{ mb:1,border:0 }} />
        <Grid item xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Address"
                  variant="standard"
                  size="small"
                  placeholder="Enter Your Address"
                  fullWidth
                  required
                />
        </Grid>

        <Divider sx={{ mb:1,border:0 }} />
        <Grid container spacing={6}>
        <Grid item xs={6}>
                <TextField
                  type="tel"
                  margin="dense"
                  id="standard-basic"
                  label="Telephone"
                  variant="standard"
                  size="small"
                  placeholder="Enter Your Phone Number"
                  fullWidth
                  required
                />
              </Grid>

        <Grid item xs={6}>
                <TextField
                  type="Email"
                  margin="dense"
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  size="small"
                  placeholder="Enter Your Email"
                  fullWidth
                  required
                />
              </Grid>
        </Grid>

        <Divider sx={{ mb:1,border:0 }} />
        <Grid container spacing={6}>
        <Grid item xs={6}>
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="NIC NO"
                  variant="standard"
                  size="small"
                  placeholder="Enter Your NIC Number"
                  fullWidth
                  required
                />
        </Grid>

        <Grid item xs={6}>
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="DOB"
                  variant="standard"
                  size="small"
                  placeholder="Enter Your birthday"
                  fullWidth
                  required
                />
        </Grid>
        </Grid>

        <Divider sx={{ mb:1,border:0 }} />
        <Grid container spacing={6}>
        <Grid item xs={6}>
                <TextField
                  type="number"
                  margin="dense"
                  id="standard-basic"
                  label="Hours Available for Work"
                  variant="standard"
                  fullWidth
                  size="small"
                  placeholder=""
                  required
                />
        </Grid>
        <Grid item xs={6}>
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Registerd Date"
                  variant="standard"
                  fullWidth
                  size="small"
                  placeholder=""
                  required
                />
        </Grid>
        </Grid>

        <Divider sx={{ mb:1,border:0 }} />
        <Grid container spacing={6}>
        <Grid item xs={6}>
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Vehicle Type"
                  variant="standard"
                  size="small"
                  fullWidth
                  placeholder=""
                  
                  required
                />
        </Grid>
        </Grid>

        <Divider sx={{ mb:1,border:0 }} />
        <Grid item xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Experience in Courier Services (if any)"
                  variant="standard"
                  size="small"
                  multiline
                  rows={3}
                  placeholder="Type here....."
                  fullWidth
                  required
                />
        </Grid>
        
          </Box>
        </CardContent>
      </Card>
    </Box>
  
          </Box>
        </Box>
      </Box>
  
    );
}
