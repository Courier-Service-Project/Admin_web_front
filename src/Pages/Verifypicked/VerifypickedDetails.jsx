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
  Divider
} from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from "../../Constants";
import Pendingalert from "../../Components/pending/Pendingalert";


export default function VerifypickedDetails() {
  const [VerifypickedData, setVerifypickedData]=useState(null);

    const { orderNo4 } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { orderId } = location.state || {};

    const handleVerifyPicked = async () => {
      await confirmhandleVerifydata(VerifypickedData.Order_id);
      navigate("/verifypicked");
    };

    const confirmhandleVerifydata = async (orderId) => {
      try {
        const result = await axios.patch(`${BACKEND_URL}/orders/updateverifyPickedorderDetails/${orderId}`);
        console.log(result);
      } catch (error) {
        console.error('Error confirming order:', error);
      }
    };

   
      const fetchOrderById = async(orderId)=>{
      
        try {
          console.log(`Fetching order details for ID: ${orderId}`);
          const response = await axios.get(`${BACKEND_URL}/orders/verifypickedorderDetails/${orderId}`);
          console.log('VerifyPicked Details:', response.data);
          setVerifypickedData(response.data.message[0]);
        
      } catch (error) {
          console.error('Error fetching order details:', error);
      }
  };

  useEffect(() => {
      if (orderId) {
          fetchOrderById(orderId);
      }
  }, [orderId]);
    
  console.log(VerifypickedData);
  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                {VerifypickedData ? (
                <div>
                    <AppsIcon sx={{ mr: 3 }} />OrderID - {VerifypickedData.Order_id}
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
              {VerifypickedData ? (
                <div>
                    Name : {VerifypickedData.CustomerFirstName + " " + VerifypickedData.CustomerLastName}
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
              {VerifypickedData ? (
                <div>
                    Telephone No : {VerifypickedData.Customermobile}
                </div>
              ) : (
                <div>Loading order details...</div>
              )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
              {VerifypickedData ? (
                <div>
                    City : {VerifypickedData.Customercity}
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
                  {VerifypickedData ? (
                    <div>
                        Name : {VerifypickedData.FirstName + " " + VerifypickedData.LastName}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none' }} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {VerifypickedData ? (
                    <div>
                        DiliveryProvince : {VerifypickedData.DiliveryProvince}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {VerifypickedData ? (
                    <div>
                        DiliveryDistrict : {VerifypickedData.DiliveryDistrict}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {VerifypickedData ? (
                    <div>
                         StreetNo : {VerifypickedData.StreetNo}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {VerifypickedData ? (
                    <div>
                         Street : {VerifypickedData.Street}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {VerifypickedData ? (
                    <div>
                         City : {VerifypickedData.City}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {VerifypickedData ? (
                    <div>
                         Telephone NO : {VerifypickedData.mobile}
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
                    {VerifypickedData ? (
                      <div>
                          Pickup_StreetNo : {VerifypickedData.Pickup_StreetNo}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {VerifypickedData ? (
                      <div>
                          Pickup_Street : {VerifypickedData.Pickup_Street}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {VerifypickedData ? (
                      <div>
                          Pickup_City : {VerifypickedData.Pickup_City}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {VerifypickedData ? (
                      <div>
                          Pickup_District : {VerifypickedData.Pickup_District}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {VerifypickedData ? (
                      <div>
                          Order_Type: {VerifypickedData.Emmergency}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12}></Grid>

              <Grid item xs={12} md={4} style={{ margin: "0 auto", padding: "0 20px" }}>
                        <Pendingalert
                          color="success"
                          button="Confirm Order"
                          title="Confirm Order"
                          text="Are you sure you want to confirm this order?"
                          buttonName1="Cancel"
                          buttonName2="Confirm"
                          bcolor="success"
                          onClick1={handleVerifyPicked}
                        />
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
