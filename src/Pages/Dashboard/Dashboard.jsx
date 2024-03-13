import React from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Card from "../../Components/DashBoard/Card"
export default function Dashboard() {
  return (
  <Box  sx={{bgcolor: "#e0f2f1",minHeight:"100vh"}}>
      <Navbar />
      <Box height={75}  />
      <Box sx={{ display: "flex"}}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3,m:3,bgcolor:"white",boxShadow:1  }}>
        <Box sx={{mx:3}}>
        <Card />
        </Box>
        </Box>
      </Box>
      </Box>
  );
}
