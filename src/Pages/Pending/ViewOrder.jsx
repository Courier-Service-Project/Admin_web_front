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
  Button
} from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import { useParams, useLocation } from 'react-router-dom';
import { BACKEND_URL } from "../../Constants";



export default function ViewOrder() {
  const [viewOrderData, setViewOrderData]=useState(null);

  const { orderNo1 } = useParams();
    const location = useLocation();

    const { orderId } = location.state || {};

   
      const fetchOrderById = async(orderId)=>{
      
        try {
          console.log(`Fetching order details for ID: ${orderId}`);
          const response = await axios.get(`${BACKEND_URL}/api/web/orders/pendingorderdetailsbyid/${orderId}`);
          console.log('Order Details:', response.data);
          setViewOrderData(response.data.message[0]);
        
      } catch (error) {
          console.error('Error fetching order details:', error);
      }
  };

  useEffect(() => {
      if (orderId) {
          fetchOrderById(orderId);
      }
  }, [orderId]);
    
  console.log(viewOrderData);
  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                {viewOrderData ? (
                <div>
                    <AppsIcon sx={{ mr: 3 }} />OrderID - {viewOrderData.Order_id}
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
              {viewOrderData ? (
                <div>
                    Name : {viewOrderData.CustomerFirstName + " " + viewOrderData.CustomerLastName}
                </div>
            ) : (
                <div>Loading order details...</div>
            )}
          {/* Name : {viewOrderData.CusFirstName} */}
              </Box>
              </Grid>

              <Grid item xs={12} md={8}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box xs={5} sx={{ p:1, border: '1px solid grey' }}>
              {viewOrderData ? (
                <div>
                    Telephone No : {viewOrderData.Customermobile}
                </div>
              ) : (
                <div>Loading order details...</div>
              )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
              {viewOrderData ? (
                <div>
                    City : {viewOrderData.Customercity}
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
                  {viewOrderData ? (
                    <div>
                        Name : {viewOrderData.FirstName + " " + viewOrderData.LastName}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none' }} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {viewOrderData ? (
                    <div>
                        DiliveryProvince : {viewOrderData.DiliveryProvince}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {viewOrderData ? (
                    <div>
                        DiliveryDistrict : {viewOrderData.DiliveryDistrict}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {viewOrderData ? (
                    <div>
                         StreetNo : {viewOrderData.StreetNo}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {viewOrderData ? (
                    <div>
                         Street : {viewOrderData.Street}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {viewOrderData ? (
                    <div>
                         City : {viewOrderData.City}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {viewOrderData ? (
                    <div>
                         Telephone NO : {viewOrderData.mobile}
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
                    {viewOrderData ? (
                      <div>
                          Pickup_StreetNo : {viewOrderData.Pickup_StreetNo}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {viewOrderData ? (
                      <div>
                          Pickup_Street : {viewOrderData.Pickup_Street}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {viewOrderData ? (
                      <div>
                          Pickup_City : {viewOrderData.Pickup_City}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {viewOrderData ? (
                      <div>
                          Pickup_District : {viewOrderData.Pickup_District}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {viewOrderData ? (
                      <div>
                          Order_Type: {viewOrderData.Emmergency}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              
              <Grid xs={12}>
              </Grid>

              <Grid xs={12} md={4} style={{ margin: "0 auto",padding:"0 20px"}}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ margin: "30px 0 10px 0 " }}
                  variant="contained"
                  color="success"
                >
                  Confirm Order
                </Button>
              </Grid>

              <Grid xs={12} md={4} style={{ margin: "0 auto" ,padding:"0 20px"}}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ margin: "30px 0 10px 0 ",Color:"black"}}
                  variant="contained"
                  
                >
                  Edit Order
                </Button>
              </Grid>

              <Grid xs={12} md={4} style={{ margin: "0 auto",padding:"0 20px" }}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ margin: "30px 0 10px 0 " }}
                  variant="contained"
                  color="warning"
                >
                  Delete Order
                </Button>
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
