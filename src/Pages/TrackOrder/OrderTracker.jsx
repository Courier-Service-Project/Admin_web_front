import React, { useEffect, useState } from 'react';
import { Divider, Typography } from '@mui/material';
import SearchForm from './SearchForm';
import OrderDetails from './OrderDetails';
import axios from 'axios';
import { BACKEND_URL } from '../../Constants';

//step lebels
const steps = [
  { label: 'Verify Confirm'},
  { label: 'Pending Order' },
  { label: 'Selected Order' },
  { label:'Verify Picked'},
  { label: 'On Delivery' },
  {label: 'Verify Dilivery'},
  { label: 'Order Delivered' }, 
];

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState(null);
  const [orderData,setOrderData] =useState({});
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(()=>{
    setOrderDetails({
      // Order details from database
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
    },[orderData])


    const statusMapping = {
      'VERIFYCONFIRM':'Verify Confirm',
      'PENDING': 'Pending Order',
      'ONPICK': 'Selected Order',
      'VERIFYPICKED': 'Verify Picked',
      'ONDILIVERY': 'On Delivery',
      'VERIFYDILIVERY': 'Verify Dilivery',
      'DILIVERED': 'Order Delivered'

    };
  // Handlers
  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleSearch = async () => {

    try{
      const result=await axios.get(`${BACKEND_URL}/orders/orderDetails/${orderId}`);
      setOrderData(result.data.message[0]);
      console.log(result.data.message[0].Status);

    if (result.data.success===101) {
      setError('Invalid order ID. Enter a valid order ID.');
      return;
    }

    const status = statusMapping[orderData.Status];
    console.log(status)
    const stepIndex = steps.findIndex((step) => step.label === status);

    setOrderStatus(status || null);
    setActiveStep(stepIndex === -1 ? 0 : stepIndex);
    setError(null);
  }catch(error){
    console.log(error.message)
  }
  };


  const showSearch = !orderStatus;

  return (
    <div style={{ height: '100%' }}>
      <Divider />
      <SearchForm
        orderId={orderId}
        handleOrderIdChange={handleOrderIdChange}
        handleSearch={handleSearch}
        showSearch={showSearch}
      />
      {error && (
        <Typography color="error" sx={{ textAlign: 'center', fontWeight: '600' }}>
          {error}
        </Typography>
      )}
      {orderStatus && (
        <OrderDetails
          orderId={orderId}
          orderStatus={orderStatus}
          orderDetails={orderDetails}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}
    </div>
  );
};

export default OrderTracking;
