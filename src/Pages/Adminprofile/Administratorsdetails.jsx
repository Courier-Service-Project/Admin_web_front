import React, { useEffect, useState } from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from '@mui/icons-material/Apps';
import axios from "axios";
import{
  Card,
  CardContent,
  Divider,
  TextField,
} from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import { useParams, useLocation } from 'react-router-dom';
import { BACKEND_URL } from "../../Constants";

export default function Administratordetails() {
  const [Administratordetails, setAdministratordetails]=useState(null);

  const { adminid1 } = useParams();
    const location = useLocation();

    const { admin_Id } = location.state || {};

   
      const fetchOrderById = async(adminId)=>{
      
        try {
          console.log(`Fetching order details for ID: ${admin_Id}`);
          const response = await axios.get(`${BACKEND_URL}/admin/AdminprofileDetailsById/${admin_Id}`);
          console.log('Admin Details:', response.data);
          setAdministratordetails(response.data.message[0]);
        
      } catch (error) {
          console.error('Error fetching Admin details:', error);
      }
  };

  useEffect(() => {
      if (admin_Id) {
          fetchOrderById(admin_Id);
      }
  }, [admin_Id]);
    
  console.log(Administratordetails);
  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
            <Box sx={{ mx: 4 }}>
            <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                {Administratordetails ? (
                <div>
                    <AppsIcon sx={{ mr: 3 }} />AdminID - {Administratordetails.admin_Id}
                </div>
            ) : (
              <div>Loading order details...</div>
            )}
              </Typography>
            </Box>
            <Box sx={{ml:4,mr:4,mt:5,mb:5}}>
      <Card sx={{boxShadow:1,border: "1px solid grey"}}>
        <CardContent>
          <Box component="form" sx={{m:4}}>
          <FormSubTitle subTitle="Administrator Details" />
        <Divider sx={{ mb:4,border:1}} />
        <Grid container spacing={3}>
        
        {Administratordetails ? (
            <Grid item xs={12} md={5} >
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="First Name:"
                  variant="standard"
                  size="small"
                  fullWidth
                  value={Administratordetails.FirstName}

                />
            </Grid>
            ) : (
              <div>Loading order details...</div>
            )}

        {Administratordetails ? (
            <Grid item xs={12} md={5} >
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Last Name:"
                  variant="standard"
                  size="small"
                  fullWidth
                  value={Administratordetails.LastName}
                />
            </Grid>
            ) : (
              <div>Loading order details...</div>
            )}
       
       {Administratordetails ? (
            <Grid item xs={12} md={5} >
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Type:"
                  variant="standard"
                  size="small"
                  fullWidth
                  value={Administratordetails.type}
                />
            </Grid>
            ) : (
              <div>Loading order details...</div>
            )}

          {Administratordetails ? (
            <Grid item xs={12} md={5} >
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Email:"
                  variant="standard"
                  size="small"
                  fullWidth
                  value={Administratordetails.Email}
                />
            </Grid>
            ) : (
              <div>Loading order details...</div>
            )}

          {Administratordetails ? (
            <Grid item xs={12} md={5} >
                <TextField
                  type="text"
                  margin="dense"
                  id="standard-basic"
                  label="Telephone No"
                  variant="standard"
                  size="small"
                  fullWidth
                  value={Administratordetails.mobile}
                />
            </Grid>
            ) : (
              <div>Loading order details...</div>
            )}

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
