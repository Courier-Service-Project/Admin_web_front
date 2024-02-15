import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SenderDetails from './SenderDetails';
import ReceiverDetails from './ReceiverDetails';
import PickupDetails from './PickupDetails';
import axios from 'axios';
import Swal from 'sweetalert2';

const steps = ['Sender Details', 'Receiver Detais', 'Pickup Details'];

export default function CompeteForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [fromData, setFormData] = React.useState({
            S_name:"",
            S_telephone:"",
            S_address:"",
            R_name:"",
            R_telephone:"",
            R_district:"",
            R_HomeTown:"",
            R_address:"",
            P_address:"",
            P_district:"",
            P_VehicalType:"",
            P_telephone:"",
            P_paymentMethod:"",
            P_specialNote:"",
            P_homeTown:"",

  }) 

  function getStepContent(step) { 
    switch (step) {
      case 0:
        return <SenderDetails fromData={fromData} setFormData={setFormData} />;
      case 1:
        return <ReceiverDetails fromData={fromData} setFormData={setFormData} />;
      case 2:
        return <PickupDetails fromData={fromData} setFormData={setFormData} />;
      default:
        throw new Error('Unknown step');
    }
  }

  function sendDetails(){
    console.log(fromData.S_name);
    axios.post('http://localhost:3000/api/order/', {
            sname:fromData.S_name,
            rhometown:fromData.R_HomeTown,
            ptelephone:fromData.P_telephone,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  
  } 

  const handleNext = () => {
    if(activeStep === steps.length - 1){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order Placed",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment >
      <CssBaseline />
      <Container component="main" maxWidth="md" height="400px" sx={{ mb: 4, }}>
        <Paper variant="outlined" style={{height:"700px"}} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Create Order
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Order is Placed.
              </Typography>
              <Typography variant="subtitle1">
                Order has been sent to the pending order list.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}