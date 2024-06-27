import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from '@mui/icons-material/Apps';
import { Typography,Card, CardContent,Divider } from "@mui/material";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../../Constants';

export default function ViewApplicant() {
    const [orderdata, setOrderData] = useState({});
    const { orderId } = useParams();

    useEffect(() => {
        if (orderId) {
            getApplicantDetailsById(orderId);
        }
    }, [orderId]);

    const getApplicantDetailsById = async (orderId) => {
        try {
            const result = await axios.get(`${BACKEND_URL}/orders/orderDetails/${orderId}`);
            console.log(result.data.message);
            setOrderData(result.data.message[0]);
        } catch (error) {
            console.log('Error fetching applicant details:', error);
            setOrderData({});
            //setError("Network error. Please try again.")
        }
    };

    return (
        <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                {orderdata? (
                <div>
                    <AppsIcon sx={{ mr: 3 }} />OrderID - {orderdata.Order_id}
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
            <FormSubTitle subTitle="Sender Details" />
            <Divider sx={{ marginBottom: 1 , border:1 }} />
            <Grid container spacing={1} sx={{mt:3}}>
              <Grid item xs={12}>
              <Box sx={{p:1, border: '1px solid grey' }}>
              {orderdata ? (
                <div>
                    Name : {orderdata.CFirstName + " " + orderdata.CLastName}
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
              {orderdata ? (
                <div>
                    Telephone No : {orderdata.Cust_mobile}
                </div>
              ) : (
                <div>Loading order details...</div>
              )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
              {orderdata ? (
                <div>
                    City : {orderdata.CCity}
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
                  {orderdata ? (
                    <div>
                        Name : {orderdata.RFirstName + " " + orderdata.RLastName}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none' }} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {orderdata ? (
                    <div>
                        DiliveryProvince : {orderdata.RDiliveryProvince}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {orderdata ? (
                    <div>
                        DiliveryDistrict : {orderdata.RDiliveryDistrict}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {orderdata ? (
                    <div>
                         StreetNo : {orderdata.RStreetNo}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {orderdata ? (
                    <div>
                         Street : {orderdata.RStreet}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {orderdata ? (
                    <div>
                         City : {orderdata.RCity}
                    </div>
                  ) : (
                    <div>Loading order details...</div>
                  )}
              </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
              <Box sx={{p:1, border: '1px solid grey' }}>
                  {orderdata ? (
                    <div>
                         Telephone NO : {orderdata.Rmobile}
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
                    {orderdata ? (
                      <div>
                          Pickup_StreetNo : {orderdata.Pickup_StreetNo}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {orderdata ? (
                      <div>
                          Pickup_Street : {orderdata.Pickup_Street}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {orderdata ? (
                      <div>
                          Pickup_City : {orderdata.Pickup_City}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {orderdata ? (
                      <div>
                          Pickup_District : {orderdata.Pickup_District}
                      </div>
                    ) : (
                      <div>Loading order details...</div>
                    )}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
              <Divider sx={{ marginBottom: 1, border:'none'}} />
                <Box sx={{p:1, border: '1px solid grey' }}>
                    {orderdata ? (
                      <div>
                          Order_Type: {orderdata.Emmergency}
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
