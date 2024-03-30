import React, { useState } from 'react';
import { Divider, Typography } from '@mui/material';
import SearchForm from './SearchForm';
import OrderDetails from './OrderDetails';

const steps = [
  { label: 'Pending Order' },
  { label: 'Pickup Order' },
  { label: 'On Delivery' },
  { label: 'Order Delivered' },
];

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    // Order details object
    '123': {
          shipmentDetails: {
            quantity: 5,
            weight: '10 kg',
            serviceType: 'Emergency',
          },
          destinationDetails: {
            receiverName: 'Saman De silva',
            receiverEmail: 'desilva123@gmail.com',
            receiverAddress: '123, Main road, Henakaduwa, Tangalle',
          },
          originDetails: {
            senderName: 'Kamal soysa',
            location: 'Matara',
            senderAddress: '345, Dickwella, Matara',
          },
          'Pending Order': '2024-02-25',
          'Pickup Order': null,
          'On Delivery': null,
          'Order Delivered': null,
          'Estimated Delivery': '2024-02-25',
    },

    '456': {
            shipmentDetails: {
              quantity: 10,
              weight: '20 kg',
              serviceType: 'Normal',
            },
            destinationDetails: {
              receiverName: 'Kumara Bandara',
              receiverEmail: 'kumara12@gmail.com',
              receiverAddress: '456, New road, Galle',
            },
            originDetails: {
              senderName: 'Asanka Gunawardhana',
              location: 'Kalutara',
              senderAddress: '789, Temple Road, Kalutara',
            },
            'Pending Order': '2024-03-01',
            'Pickup Order': '2024-03-01',
            'On Delivery': '2024-03-01',
            'Order Delivered': null,
            'Estimated Delivery': '2024-03-01',
          },
          '789': {
            shipmentDetails: {
              quantity: 3,
              weight: '5 kg',
              serviceType: 'Emergency',
            },
            destinationDetails: {
              receiverName: 'Emma Siriwardhana',
              receiverEmail: 'emma@gmail.com',
              receiverAddress: '789, New Road, Gampaha ',
            },
            originDetails: {
              senderName: 'Kastura Iyar',
              location: 'Jaffna',
              senderAddress: '123, Pine Street, Jaffna',
            },
            'Pending Order': '2024-03-02',
            'Pickup Order': '2024-03-02',
            'On Delivery': '2024-03-02',
            'Order Delivered': '2024-03-02',
            'Estimated Delivery': '2024-03-02',
          },
  });

  // Handlers
  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleSearch = async () => {
    // Check if the entered order ID is valid
    if (!orderDetails.hasOwnProperty(orderId)) {
      setError('Invalid order ID. Enter a valid order ID.');
      return;
    }

    // Simulating the order status based on a static object
    const orderStatusObject = {
      '123': 'Pending Order',
      '456': 'On Delivery',
      '789': 'Order Delivered',
    };

    const status = orderStatusObject[orderId];
    const stepIndex = steps.findIndex((step) => step.label === status);

    setOrderStatus(status || null);
    setActiveStep(stepIndex === -1 ? 0 : stepIndex);
    setError(null);
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
