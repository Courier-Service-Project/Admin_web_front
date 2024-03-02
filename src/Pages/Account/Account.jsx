import React from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import profile from "../../Assets/round.png";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function Account() {
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
          <Box sx={{ mx: 3, mb: 5 }}>
            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
              <AppsIcon sx={{ mr: 3 }} />
              Account
            </Typography>
          </Box>
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
                variant="contained"
                sx={{
                  mx: 1,
                  bgcolor: "#bdbdbd",
                  color: "#212121",
                  ":hover": {
                    bgcolor: "#9e9e9e",
                  },
                }}
              >
                Update new Image
              </Button>
              <Button
                variant="contained"
                sx={{
                  mx: 1,
                  bgcolor: "#eeeeee",
                  color: "#212121",
                  ":hover": {
                    bgcolor: "#bdbdbd",
                  },
                }}
              >
                Delete Image
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 7, ml: 3 }}>
            <Typography sx={{ fontWeight: "bold",mb:2}}>
              Full Name
            </Typography>

            <Grid container spacing={5}>
              <Grid item xs={4}>
              <Typography color={"#9e9e9e"}>First name</Typography>
                <TextField
                fullWidth
                size="small"
                sx={{boxShadow:1}}
                  id="outlined-read-only-input"
                  defaultValue="Malinda"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
              <Typography color={"#9e9e9e"}>Last name</Typography>
                <TextField
                fullWidth
                size="small"
                sx={{boxShadow:1}}
                  id="outlined-read-only-input"
                  defaultValue="Sureshs"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
