import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button, Box, Paper, Stepper, Step, StepLabel, Card, CardContent, InputAdornment } from '@mui/material';
import { BorderAllRounded,LocalShipping } from '@mui/icons-material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SearchIcon from '@mui/icons-material/Search';
import InventoryIcon from '@mui/icons-material/Inventory';
import HouseIcon from '@mui/icons-material/House';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { BACKEND_URL } from '../../Constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const steps = [
    { label: 'Pending Order', icon: <ReceiptLongIcon /> },
    { label: 'On Branch', icon: <PendingActionsIcon /> },
    { label: 'On Pick', icon: <InventoryIcon /> },
    { label: 'On Delivery', icon: <LocalShipping /> },
    { label: 'Order Delivered', icon: <HouseIcon /> },
];

const steptyle = {
    pt: 3,
    pb: 5,
    "& .MuiStepIcon-root": {
        color: "#e0e0e0", // default color for icons
    },
    "& .Mui-active .MuiStepIcon-root": {
        color: "#4db6ac", // color for active step icon
    },
    "& .Mui-completed .MuiStepIcon-root": {
        color: "#4db6ac", // color for completed step icon
    },
    "& .MuiStepLabel-label": {
        fontSize: '1rem', // font size for step label
        color: '#a3a3a3', // default color for step label
    },
    "& .Mui-active .MuiStepLabel-label": {
        color: '#a3a3a3', // color for active step label
    },
    "& .Mui-completed .MuiStepLabel-label": {
        color: '#a3a3a3', // color for completed step label
    },
};

const statusMapping = {
    'VERIFYCONFIRM': 'Pending Order',
    'PENDING': 'On Branch',
    'ONPICK': 'On Pick',
    'ONDILIVERY': 'On Delivery',
    'DILIVERED': 'Order Delivered',
};

const CustomStepIcon = (props) => {
    const { active, completed, icon } = props;
    const icons = {
        1: <ReceiptLongIcon />,
        2: <PendingActionsIcon />,
        3: <InventoryIcon />,
        4: <LocalShipping />,
        5: <HouseIcon />,
    };

    return (
        <div
            style={{
                color: completed ? "#059669" : active ? "#059669" : "#a3a3a3",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {icons[String(icon)]}
        </div>
    );
};

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState({});
    const [orderStatus, setOrderStatus] = useState(null);
    const [error, setError] = useState(null);
    const [orderData, setOrderData] = useState({});
    const [orderDetails, setOrderDetails] = useState({});
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (orderData) {
            setOrderDetails({
                [orderId]: {
                    shipmentDetails: {
                        BranchUserName: `${orderData.BFirstName} ${orderData.BLastName}`,
                        BranchUserMobile: `${orderData.BMobile}`,
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
                        Cust_mobile: `${orderData.Cust_mobile}`,
                        senderAddress: `${orderData.Pickup_StreetNo},${orderData.Pickup_Street},${orderData.Pickup_City}`,
                    },
                },
            });
        }
    }, [orderId, orderData]);

    const handleOrderIdChange = (event) => {
        setOrderId(event.target.value);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const result = await axios.get(`${BACKEND_URL}/orders/orderDetails/${orderId}`);
            setOrderData(result.data.message[0]);

            if(result.data.success === 101){
                toast.error('Invalid order ID !.', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
              });
              }
            const status = statusMapping[result.data.message[0].Status];
            const stepIndex = steps.findIndex((step) => step.label === status);

            setOrderStatus(status || null);
            setActiveStep(stepIndex === -1 ? 0 : stepIndex);
            setCompletedSteps(
                steps.reduce((acc, step, index) => {
                    acc[index] = index <= stepIndex;
                    return acc;
                }, {})
            );
            setError(null);
        } catch (error) {
            //setError(error.message);
            setOrderStatus(null);
            toast.warn('Check internet Connection !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(error.message);
        }
        finally{
            setLoading(false);
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
        <Paper style={{ padding: '30px', minHeight: error || orderStatus ? 'auto' : '50vh' }}>
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
                        width: "25%",
                        "& input": {
                            height: "30px",
                            padding: "10px",
                        },
                    }}
                />
                <Button variant="contained" style={{ marginLeft: "20px", marginTop: "20px" }} onClick={handleSearch} sx={{
                    bgcolor: "#00897b",
                    height: "40px",
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
            {loading && (
                <Box>
                    <Box display="flex" justifyContent="center" alignItems="center" height="30vh">
                        <CircularProgress color='success' />
                    </Box>
                </Box>
            )}
            {!loading && error && (
                <Typography color="error" sx={{ textAlign: 'center', fontWeight: '600' }}>
                    {error}
                </Typography>
            )}
            {!loading && !error && orderStatus && (
                <Box>
                    <Box style={{ padding: '20px', display: 'flex', alignItems: 'center', marginTop: '30px', BorderAllRounded }}>
                        <Typography variant="h6" fontWeight='300' sx={{ marginLeft: '0', color:'#a3a3a3'}}>
                            Order Id: {orderData.Order_id}
                        </Typography>
                        <Typography variant="h6" sx={{ marginLeft: '100px', color:'#a3a3a3' }} fontWeight='300'>
                            Order Status: {getShipmentDetails(orderId).Status}
                        </Typography>
                    </Box>
                    <div style={{ paddingTop: '30px',paddingLeft:'100px',paddingRight:'100px',paddingBottom: '30px' }}>
                        <Stepper activeStep={activeStep} sx={steptyle} alternativeLabel>
                            {steps.map((step, index) => (
                                <Step key={step.label} completed={completedSteps[index]}>
                                    <StepLabel StepIconComponent={CustomStepIcon}>{step.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>

                    <div style={{ display: 'flex', flexBasis: '30%', paddingTop: '10px',paddingBottom:'10px' }}>
                    {orderStatus !== 'On Branch' && orderStatus !== 'Pending Order' && (
                            //<Card style={{ marginRight: '100px', marginLeft: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#e0f2f1', height: "100%" }}>
                            <Card style={{
                                marginRight: '100px',
                                marginLeft: '10px',
                                marginBottom: '10px',
                                width: '100%',
                                background: 'linear-gradient(45deg, #e0f2f1 30%, #a7ffeb 90%)',
                                borderRadius: '15px',
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                padding: '15px',
                            }}>
                                <CardContent>
                                    {/* <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#00897b', color: 'white' }}> */}
                                    <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#00897b',
                                        color: 'white',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        boxShadow: '0 3px 5px 2px rgba(0, 137, 123, .3)',
                                    }}>
                                        Shipment Details
                                    </Typography>
                                    <Box
                                        style={{
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                            paddingTop: '7px',
                                            padding: '5px',
                                            lineHeight: '1.8',
                                            color: '#004d40',
                                        }}
                                    >
                                    <Typography style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', paddingTop: '7px',padding:'5px'}}>
                                        {getShipmentDetails(orderId).BranchUserName && (
                                            <>
                                                <span>Branch User Name: </span>
                                                <span style={{fontWeight: 'bold' }}>{getShipmentDetails(orderId).BranchUserName}</span>
                                                <br /><br />
                                                <span>Branch User Tele.No: </span>
                                                <span style={{fontWeight: 'bold' }}>{getShipmentDetails(orderId).BranchUserMobile}</span>
                                                <br /><br />
                                            </>
                                        )}
                                        <span>Cost: </span>
                                        <span style={{fontWeight: 'bold' }}>{getShipmentDetails(orderId).cost}</span>
                                        <br /><br />
                                        <span>Weight cost: </span>
                                        <span style={{fontWeight: 'bold' }}>{getShipmentDetails(orderId).weightCost}</span>
                                        <br /><br />
                                    </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                    )}
                        {/* <Card style={{ marginRight: '100px', width: '100%', backgroundColor: '#e0f2f1', height: "100%" }}> */}
                        <Card style={{
                                marginRight: '100px',
                                marginLeft: '10px',
                                marginBottom: '10px',
                                width: '100%',
                                background: 'linear-gradient(45deg, #e0f2f1 30%, #a7ffeb 90%)',
                                borderRadius: '15px',
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                padding: '15px',
                            }}>
                            <CardContent>
                                {/* <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#00897b', color: 'white' }}> */}
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#00897b',
                                        color: 'white',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        boxShadow: '0 3px 5px 2px rgba(0, 137, 123, .3)',
                                    }}>
                                    Origin
                                </Typography>
                                <Box style={{
                                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                    paddingTop: '7px',
                                    padding: '5px',
                                    lineHeight: '1.8',
                                    color: '#004d40',
                                }}
                                >   
                                <Typography style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', paddingTop: '7px'}}>
                                    <span>Sender Name: </span>
                                    <span style={{fontWeight: 'bold' }}>{getOriginDetails(orderId).senderName}</span>
                                    <br /><br />
                                    <span>Sender Tele.No: </span>
                                    <span style={{fontWeight: 'bold' }}>{getOriginDetails(orderId).Cust_mobile}</span>
                                    <br /><br />
                                    <span>Sender Address: </span>
                                    <span style={{fontWeight: 'bold' }}>{getOriginDetails(orderId).senderAddress}</span>
                                </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        {/* <Card style={{ marginRight: '10px', width: '100%', backgroundColor: '#e0f2f1', height: "100%" }}> */}
                        <Card style={{
                                marginRight: '10px',
                                marginLeft: '10px',
                                marginBottom: '10px',
                                width: '100%',
                                background: 'linear-gradient(45deg, #e0f2f1 30%, #a7ffeb 90%)',
                                borderRadius: '15px',
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                padding: '15px',
                            }}>
                            <CardContent>
                                {/* <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#00897b', color: 'white' }}> */}
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: 'center',
                                        backgroundColor: '#00897b',
                                        color: 'white',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        boxShadow: '0 3px 5px 2px rgba(0, 137, 123, .3)',
                                    }}>
                                    Destination
                                </Typography>
                                <Box style={{
                                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                    paddingTop: '7px',
                                    padding: '5px',
                                    lineHeight: '1.8',
                                    color: '#004d40',
                                }}
                                >   
                                <Typography style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', paddingTop: '7px' }}>
                                    <span>Receiver Name: </span>
                                    <span style={{fontWeight: 'bold' }}>{getDestinationDetails(orderId).receiverName}</span>
                                    <br /><br />
                                    <span>Telephone Number: </span>
                                    <span style={{fontWeight: 'bold' }}>{getDestinationDetails(orderId).number}</span>
                                    <br /><br />
                                    <span>Receiver Address: </span>
                                    <span style={{fontWeight: 'bold' }}>{getDestinationDetails(orderId).receiverAddress}</span>
                                </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                    <Box mt={2} display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick = {()=>navigate(`/orderdelails/${orderId}`)} style={{ marginLeft: "200px" }} sx={{
                            bgcolor: "#00897b",
                            height: "40px",
                            width: "25%",
                            fontWeight: "600",
                            ":hover": {
                                bgcolor: "#14b8a6",
                                color: "#616161",
                            },
                        }}>
                            <RemoveRedEyeIcon sx={{ marginRight: "5px" }} />
                            View Order Details
                    </Button>
                    </Box>
                </Box>
            )}
            <ToastContainer />
        </Paper>
    );
};

export default OrderTracking;

