import React, { useEffect, useState } from 'react';
import { Divider, Typography, TextField, Button, Box, Paper, Stepper, Step, StepLabel, Card, CardContent,InputAdornment } from '@mui/material';
import { BorderAllRounded } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { BACKEND_URL } from '../../Constants';

const steps = [
    { label: 'Verify Confirm' },
    { label: 'Pending Order' },
    { label: 'Selected Order' },
    { label: 'On Delivery' },
    { label: 'Order Delivered' },
];

const statusMapping = {
    'VERIFYCONFIRM': 'Verify Confirm',
    'PENDING': 'Pending Order',
    'ONPICK': 'Selected Order',
    'ONDILIVERY': 'On Delivery',
    'DILIVERED': 'Order Delivered',
};

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [orderStatus, setOrderStatus] = useState(null);
    const [error, setError] = useState(null);
    const [orderData, setOrderData] = useState({});
    const [orderDetails, setOrderDetails] = useState({});

    useEffect(() => {
        if (orderData) {
            setOrderDetails({
                [orderId]: {
                    shipmentDetails: {
                        cost: `Rs ${orderData.Total_Cost}`,
                        weightCost: `Rs ${orderData.Weight_Cost}`,
                        serviceType: orderData.Emmergency ? 'Emergency' : 'Regular',
                        Status: orderData.Status ? statusMapping[orderData.Status] : '',
                    },
                    destinationDetails: {
                        receiverName: `${orderData.RFirstName} ${orderData.RLastName}`,
                        number: `${orderData.Rmobile}`,
                        receiverAddress: `${orderData.RStreetNo},${orderData.RStreet},${orderData.RCity}`,
                    },
                    originDetails: {
                        senderName: `${orderData.CFirstName} ${orderData.CLastName}`,
                        location: `${orderData.branchLocation}`,
                        senderAddress: `${orderData.Pickup_StreetNo},${orderData.Pickup_Street},${orderData.Pickup_City}`,
                    },
                },
            });
        }
    }, [orderData]);

    const handleOrderIdChange = (event) => {
        setOrderId(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const result = await axios.get(`${BACKEND_URL}/orders/orderDetails/${orderId}`);
            setOrderData(result.data.message[0]);

            if (result.data.success === 101) {
                setError('Invalid order ID. Enter a valid order ID.');
                setOrderStatus(null);
                return;
            }

            const status = statusMapping[result.data.message[0].Status];
            const stepIndex = steps.findIndex((step) => step.label === status);

            setOrderStatus(status || null);
            setActiveStep(stepIndex === -1 ? 0 : stepIndex);
            setError(null);
        } catch (error) {
            setError(error.message);
            setOrderStatus(null);
        }
    };

    const getShipmentDetails = (orderId) => {
        return orderDetails[orderId] ? orderDetails[orderId].shipmentDetails : {};
    };

    const getDestinationDetails = (orderId) => {
        return orderDetails[orderId] ? orderDetails[orderId].destinationDetails : {};
    };

    const getOriginDetails = (orderId) => {
        return orderDetails[orderId] ? orderDetails[orderId].originDetails : {};
    };

    return (
        <Paper style={{ padding: '30px', minHeight: error || orderStatus ? 'auto' : '30vh' }}>
            {/* <Divider /> */}
            <div style={{ margin: "10px", marginTop: "20px" }}>
                <TextField
                    label="Delivery Order ID"
                    variant="standard"
                    placeholder="Enter order ID"
                    value={orderId}
                    onChange={handleOrderIdChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        width: "50%",
                        "& input": {
                            height: "30px",
                            padding: "10px",
                        },
                    }}
                />
                <Button variant="contained" style={{ marginLeft: "20px" }} onClick={handleSearch} sx={{
                    bgcolor: "#00897b",
                    height: "60px",
                    width: "100px",
                    fontWeight: "600",
                    ":hover": {
                        bgcolor: "#009688",
                        color: "#616161",
                    },
                }}>
                    Search
                </Button>
            </div>
            {error && (
                <Typography color="error" sx={{ textAlign: 'center', fontWeight: '600' }}>
                    {error}
                </Typography>
            )}
            {!error && orderStatus && (
                <Box>
                    <Box style={{ padding: '10px', display: 'flex', alignItems: 'center', marginTop: '20px', BorderAllRounded }}>
                        <Typography variant="h6" fontWeight='600' color={{}}>
                            Order Id: {orderId}
                        </Typography>
                        <Typography variant="h6" style={{ marginLeft: '40px' }} fontWeight='600'>
                            Order Status: {getShipmentDetails(orderId).Status}
                        </Typography>
                        {orderDetails[orderId] && (
                            <Typography variant="h6" style={{ marginLeft: '40px' }} fontWeight='600'>
                                Expected Delivery Date: {orderDetails[orderId]['Estimated Delivery']}
                            </Typography>
                        )}
                    </Box>
                    <div style={{ paddingTop: '10px' }}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((step) => (
                                <Step key={step.label}>
                                    <StepLabel>{step.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>

                    <div style={{ display: 'flex', flexBasis: '30%', paddingTop: '10px' }}>
                        <Card style={{ marginRight: '100px', marginLeft: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#e0f2f1', height: "250px" }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#00897b', color: 'white' }}>
                                    Shipment Details
                                </Typography>
                                <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', paddingTop: '7px' }}>
                                    Cost: {getShipmentDetails(orderId).cost}
                                    <br /><br />
                                    Weight cost: {getShipmentDetails(orderId).weightCost}
                                    <br /><br />
                                    Service Type: {getShipmentDetails(orderId).serviceType}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ marginRight: '100px', width: '100%', backgroundColor: '#e0f2f1', height: "250px" }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#00897b', color: 'white' }}>
                                    Destination
                                </Typography>
                                <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', paddingTop: '7px' }}>
                                    Receiver Name: {getDestinationDetails(orderId).receiverName}
                                    <br /><br />
                                    Telephone Number: {getDestinationDetails(orderId).number}
                                    <br /><br />
                                    Receiver Address: {getDestinationDetails(orderId).receiverAddress}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: '#e0f2f1', height: "250px" }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#00897b', color: 'white' }}>
                                    Origin
                                </Typography>
                                <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', paddingTop: '7px' }}>
                                    Sender Name: {getOriginDetails(orderId).senderName}
                                    <br /><br />
                                    Location: {getOriginDetails(orderId).location}
                                    <br /><br />
                                    Sender Address: {getOriginDetails(orderId).senderAddress}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
            )}
        </Paper>
    );
};

export default OrderTracking;
