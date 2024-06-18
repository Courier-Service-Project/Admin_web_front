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



export default function CompleteOrder() {
  const [CompleteOrderData, setCompleteOrderData]=useState(null);

  const { orderNo2 } = useParams();
    const location = useLocation();

    const { orderId } = location.state || {};

   
      const fetchOrderById = async(orderId)=>{
      
        try {
          console.log(`Fetching order details for ID: ${orderId}`);
          const response = await axios.get(`${BACKEND_URL}/orders/completeorderdetailsbyid/${orderId}`);
          console.log('Admin Details:', response.data);
          setCompleteOrderData(response.data.message[0]);
        
      } catch (error) {
          console.error('Error fetching order details:', error);
      }
  };

  useEffect(() => {
      if (orderId) {
          fetchOrderById(orderId);
      }
  }, [orderId]);
    
  console.log(CompleteOrderData);
  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                {CompleteOrderData ? (
                <div>
                    <AppsIcon sx={{ mr: 3 }} />OrderID - {CompleteOrderData.Order_id}
                </div>
            ) : (
              <div>Loading order details...</div>
            )}
              </Typography>
            </Box>
            <Box sx={{ml:4,mr:4,mt:5,mb:5}}>
      <Card sx={{boxShadow:3,border:"2px solid green",borderRadius:3}}>
        <CardContent>
          <Box component="form" sx={{m:4}}>
            <FormSubTitle subTitle="Sender Details" />
            <Divider sx={{ marginBottom: 1 , border:1 }} />
            <Grid container spacing={1} sx={{mt:3}}>
              <Grid item xs={12}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {CompleteOrderData ? (
                <div>
                    Name : {CompleteOrderData.CustomerFirstName + " " + CompleteOrderData.CustomerLastName}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          {/* Name : {CompleteOrderData.CusFirstName} */}
              </Box>
              </Grid>

              <Grid item xs={12} md={8}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box xs={5} sx={{ p:1, border: '1px solid grey' }}>
              {CompleteOrderData ? (
                <div>
                    Telephone No : {CompleteOrderData.Customermobile}
                </div>
              ) : (
                <div>Loading order details...</div>
              )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
              {CompleteOrderData ? (
                <div>
                    City : {CompleteOrderData.Customercity}
                </div>
              ) : (
                <div>Loading order details...</div>
              )}
              </Box>
              </Grid>
            </Grid>

            <FormSubTitle subTitle="Receiver Details" />
            <Divider sx={{ marginBottom: 1, border:1 }} />
            <Grid container spacing={1} sx={{mt:3}}>
              <Grid item xs={12}>
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {CompleteOrderData ? (
                    <div>
                        Name : {CompleteOrderData.FirstName + " " + CompleteOrderData.LastName}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none' }} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {CompleteOrderData ? (
                    <div>
                        DiliveryProvince : {CompleteOrderData.DiliveryProvince}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {CompleteOrderData ? (
                    <div>
                        DiliveryDistrict : {CompleteOrderData.DiliveryDistrict}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {CompleteOrderData ? (
                    <div>
                         StreetNo : {CompleteOrderData.StreetNo}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {CompleteOrderData ? (
                    <div>
                         Street : {CompleteOrderData.Street}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {CompleteOrderData ? (
                    <div>
                         City : {CompleteOrderData.City}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {CompleteOrderData ? (
                    <div>
                         Telephone NO : {CompleteOrderData.mobile}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

            </Grid>

            <FormSubTitle subTitle="Pickup Details" />
            <Divider sx={{ marginBottom: 1, border:1 }} />
            <Grid container spacing={1} sx={{mt:3}}>
              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {CompleteOrderData ? (
                      <div>
                          Pickup_StreetNo : {CompleteOrderData.Pickup_StreetNo}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {CompleteOrderData ? (
                      <div>
                          Pickup_Street : {CompleteOrderData.Pickup_Street}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {CompleteOrderData ? (
                      <div>
                          Pickup_City : {CompleteOrderData.Pickup_City}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {CompleteOrderData ? (
                      <div>
                          Pickup_District : {CompleteOrderData.Pickup_District}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {CompleteOrderData ? (
                      <div>
                          Order_Type: {CompleteOrderData.Emmergency}
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
