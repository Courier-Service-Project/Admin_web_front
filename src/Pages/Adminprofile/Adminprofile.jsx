import React from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from '@mui/icons-material/Apps';
import Admincard from "../../Components/administrators/Admincard";
import { Grid, Divider } from "@mui/material";
import pramuditha from '../../Assets/pramuditha.png';
import fphoto1 from '../../Assets/fphoto1.jpg'
import fphoto2 from '../../Assets/fphoto2.jpg'

export default function Adminprofile(){
  // Define data for each administrator
  const administratorsData = [
    {
      name: "Pramuditha Sadeepa",
      email: "mlpramuditha1@gmail.com",
      telephone: "0766022618",
      photoSrc: pramuditha
    },
    {
      name: "Dasun theekshana",
      email: "dasun2001@gmail.com",
      telephone: "0765674333",
      photoSrc: fphoto2
    },
    {
      name: "Malinda Suresh",
      email: "malinda1999@gmail.com",
      telephone: "0762256765",
      photoSrc: fphoto1   
     },
  ];

  return (
    <Box  sx={{bgcolor: "#e0f2f1",minHeight:"100vh"}}>
      <Navbar />
      <Box height={75}  />
      <Box sx={{ display: "flex"}}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3,m:3,bgcolor:"white",boxShadow:1  }}>
          <Box sx={{mx:3}}>
            <Typography sx={{fontSize:30,fontWeight: 'bold'}}>
              <AppsIcon sx={{mr:3}}/>
              Admin Profile
            </Typography>
          </Box>
          <Box sx={{m:3}}>
            <Grid container spacing={3}>
              {/* Map through administratorsData and render Admincard for each administrator */}
              {administratorsData.map((admin, index) => (
                <Grid item xs={12} key={index}>
                  <Admincard
                    name={admin.name}
                    email={admin.email}
                    telephone={admin.telephone}
                    photoSrc={admin.photoSrc}
                  />
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ marginBottom: 4 , border:'none'}} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
