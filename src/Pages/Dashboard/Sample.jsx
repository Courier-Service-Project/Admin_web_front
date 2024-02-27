import React from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Sample() {
  return (
    <>
      <Navbar />
      <Box height={75}  />
      <Box sx={{ display: "flex",bgcolor:"#e0f2f1" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3,m:3,bgcolor:"white",boxShadow:1  }}>
          Dashboard
        </Box>
      </Box>
    </>
  );
}
