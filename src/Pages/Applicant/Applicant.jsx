import React from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from '@mui/icons-material/Apps';
export default function Applicant() {
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
        Applicant
        </Typography>
        </Box>
          contend
        </Box>
      </Box>
      </Box>
  );
}
