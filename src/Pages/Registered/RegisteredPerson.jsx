import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from '@mui/icons-material/Apps';
import { Typography } from "@mui/material";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import axios from "axios";
import{
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import { useParams, useLocation } from 'react-router-dom';
import { BACKEND_URL } from "../../Constants";




export default function RegisterdPerson() {
  const [registeredPersonData, setregisteredPersonData]=useState(null);

  const {registerdid} = useParams();
    const location = useLocation();

    const { orderId } = location.state || {};

    const fetchOrderById = async(orderId)=>{
    try{
      console.log(`Fetching order details for ID: ${orderId}`);
      const response = await axios.get(`${BACKEND_URL}/branchuser/RegisterdpersonDetailsbyid/${orderId}`);
      console.log('Order Details:', response.data);
      setregisteredPersonData(response.data.message[0]);
      }
      catch(error){
        console.log('Error fetching order details:', error);
      }
    };

    useEffect(()=>{
      if(orderId){
        fetchOrderById(orderId);
      }
    },[orderId]);

    console.log(registeredPersonData);
  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
              {registeredPersonData ? (
                <div>
                    <AppsIcon sx={{ mr: 3 }} />RegisterdID - {registeredPersonData.BranchUser_id}
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
          <FormSubTitle subTitle="Register Details" />
        <Divider sx={{ marginBottom: 1 , border:1}} />
        <Grid container spacing={1} sx={{mt:3}}>
        <Grid item xs={12}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    Name : {registeredPersonData.FirstName + " " + registeredPersonData.LastName}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={4}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    StreetNo : {registeredPersonData.StreetNo}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={4}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    Street : {registeredPersonData.Street}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={4}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    City : {registeredPersonData.City}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={8}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    Email : {registeredPersonData.Email}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={4}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    NewUser : {registeredPersonData.NewUser}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={8}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    BranchLocation : {registeredPersonData.branchLocation}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>
          <Grid item xs={12} md={8}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {registeredPersonData ? (
                <div>
                    Telephone : {registeredPersonData.Mobile}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          </Box>
          </Grid>

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
