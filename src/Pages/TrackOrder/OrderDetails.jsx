import React from 'react';
import { Typography, Stepper, Step, StepLabel, Card, CardContent } from '@mui/material';

const OrderDetails = ({ orderId, orderStatus, orderDetails, activeStep, setActiveSteps }) => {
  const steps = [
    { label: 'Pending Order' },
    { label: 'Pickup Order' },
    { label: 'On Delivery' },
    { label: 'Order Delivered' },
  ];

  const steptyle = {
    pt: 3,
    pb: 5,
    "& .Mui-active": {
      "& .MuiStepIcon-root": {
        color: "#4db6ac",
      },
    },
  
    "& .Mui-completed": {
      "& .MuiStepIcon-root": {
        color: "#4db6ac",
      },
    },
  };

  const getShipmentDetails = (orderId) => {
    // Retrieve shipment details for the given orderId from orderDetails
    const shipmentDetails = orderDetails[orderId] ? orderDetails[orderId].shipmentDetails : {};
    return shipmentDetails;
  };

  const getDestinationDetails = (orderId) => {
    // Retrieve destination details for the given orderId from orderDetails
    const destinationDetails = orderDetails[orderId] ? orderDetails[orderId].destinationDetails : {};
    return destinationDetails;
  };

  const getOriginDetails = (orderId) => {
    // Retrieve origin details for the given orderId from orderDetails
    const originDetails = orderDetails[orderId] ? orderDetails[orderId].originDetails : {};
    return originDetails;
  };

  return (
    <>
    {orderStatus && (
    <div>
      <div style={{ padding: '80px', display: 'flex', alignItems: 'center', paddingTop: '30px', marginTop: '20px' }}>
        <Typography variant="h6" fontWeight='600' color={{}}>
          Order Id: {orderId}
        </Typography>
        <Typography variant="h6" style={{ marginLeft: '40px' }} fontWeight='600'>
          Order Status: {getShipmentDetails(orderId).Status }
        </Typography>
        {orderDetails[orderId] && (
          <Typography variant="h6" style={{ marginLeft: '40px' }} fontWeight='600'>
            Expected Delivery Date: {orderDetails[orderId]['Estimated Delivery']}
          </Typography>
        )}
      </div>
      <div style={{ paddingTop: '10px' }}>
        <Stepper activeStep={activeStep} sx={steptyle} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>
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
    </div>
    )}
    </>
  );
};

export default OrderDetails;
