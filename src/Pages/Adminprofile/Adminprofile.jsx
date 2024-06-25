import React, { useEffect } from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";
import Admincard from "../../Components/administrators/Admincard";
import { Grid, Divider } from "@mui/material";
import pramuditha from "../../Assets/pramuditha.png";
import fphoto1 from "../../Assets/fphoto1.jpg";
import fphoto2 from "../../Assets/fphoto2.jpg";
import axios from "axios";
import { BACKEND_URL } from "../../Constants";

export default function Adminprofile() {
  useEffect(() => {
    getAdminprofileDetails();
  }, []);

  const [AdminprofileData, setAdminprofileData] = React.useState();

  const getAdminprofileDetails = async () => {
    try {
      const result = await axios.get(
        `${BACKEND_URL}/admin/AdminprofileDetails`
      );
      console.log(result);
      console.log(result.data.message[0]);
      setAdminprofileData(result.data.message);
    } catch (error) {
      // setIsError(true);
    }
  };

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
          <Box sx={{ mx: 3 }}>
            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
              <AppsIcon sx={{ mr: 3 }} />
              Admin Profile
            </Typography>
          </Box>

          <Box sx={{ m: 3 }}>
            <Grid container spacing={3}>
              {AdminprofileData &&
                AdminprofileData.map((admin) => (
                  <Grid item xs={12} key={admin}>
                    <Admincard
                      name={admin.FirstName + " " + admin.LastName}
                      email={admin.Email}
                      telephone={admin.mobile}
                      photoSrc={admin.photoSrc}
                      admin_Id={admin.admin_Id}
                    />
                  </Grid>
                ))}
            </Grid>
            <Divider sx={{ marginBottom: 4, border: "none" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
