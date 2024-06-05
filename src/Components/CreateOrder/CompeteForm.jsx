import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import { ToastContainer } from "react-toastify";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SenderDetails from "./SenderDetails";
import ReceiverDetails from "./ReceiverDetails";
import {senderValidation ,RecieverValidation,PickupValidation} from "../../Validation/Validation";
import PickupDetails from "./PickupDetails";
import Error from "../../Components/Notification/Error";
import axios from "axios";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const steps = ["Sender Details", "Receiver Detais", "Pickup Details"];
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

export default function CompeteForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [err,setErr] = React.useState(null);
  const [fromData, setFormData] = React.useState({
    S_name: "",
    S_telephone: "",
    S_address: "",
    R_name: "",
    R_telephone: "",
    R_district: "",
    R_HomeTown: "",
    R_address: "",
    P_address: "",
    P_district: "",
    P_VehicalType: "",
    P_telephone: "",
    P_paymentMethod: "",
    P_specialNote: "",
    P_homeTown: "",
  });

  function refreshPage() {
    window.location.reload();
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SenderDetails fromData={fromData} setFormData={setFormData} />;
      case 1:
        return (
          <ReceiverDetails fromData={fromData} setFormData={setFormData} />
        );
      case 2:
        return <PickupDetails fromData={fromData} setFormData={setFormData} />;
      default:
        throw new Error("Unknown step");
    }
  }
  //................................
  function senderValid() {
    setErr(null)
    const data = senderValidation(
      fromData.S_name,
      fromData.S_address,
      fromData.S_telephone
    )
    console.log(data)
    if(data){
      setErr(data.Error)
      return 1;

    }
  }
  //................................
  function recieverValid() {
    setErr(null)
    const data = RecieverValidation(
      fromData.R_name,
      fromData.R_district,
      fromData.R_HomeTown,
      fromData.R_telephone
    )
      console.log(data)

    if (data) {
      setErr(data.Error)
      return 1;
    }
  }
  //.............................
  function pickValid() {
     setErr(null)
    const data = PickupValidation(
      fromData.P_VehicalType,
      fromData.P_address,
      fromData.P_homeTown,
      fromData.P_paymentMethod,
      fromData.P_telephone,
      fromData.P_district,
    )
      console.log(data)

    if (data) {
      setErr(data.Error)
      return 1;
    }
  }

  function sendDetails() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Order Placed",
      showConfirmButton: false,
      timer: 2500,
    });

    // console.log(fromData.S_name)
    // console.log(fromData.S_address)
    // console.log(fromData.S_telephone)
    // console.log(fromData.R_name)
    // console.log(fromData.R_telephone)
    // console.log(fromData.R_district)
    // console.log(fromData.R_HomeTown)
    // console.log(fromData.R_address)
    // console.log(fromData.P_address)
    // console.log(fromData.P_district)
    // console.log(fromData.P_VehicalType)
    // console.log(fromData.P_telephone)
    // console.log(fromData.P_paymentMethod)
    // console.log(fromData.P_specialNote)
    // console.log(fromData.P_homeTown)
   
    axios
      .post("http://localhost:3000/src/routes/createOrder", {
        sname: fromData.S_name,
        saddress: fromData.S_address,
        stelephone: fromData.S_telephone,
        rname: fromData.R_name,
        rtelephone: fromData.R_telephone,
        rdistric: fromData.R_district,
        rhometown: fromData.R_HomeTown,
        raddress: fromData.R_address,
        paddress: fromData.P_address,
        pdistrict: fromData.P_district,
        pvehicaltype: fromData.P_VehicalType,
        ptelephone: fromData.P_telephone,
        ppaymentmethod: fromData.P_paymentMethod,
        pspecialnote: fromData.P_specialNote,
        phometown: fromData.P_homeTown,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleNext = () => {
    if (activeStep === 0) {
      if (senderValid()) {
        return;
      }
    }
    if (activeStep === 1) {
      if (recieverValid()) {
        return;
      }
    }

    if (activeStep === steps.length - 1) {
      if (pickValid()) {
        return;
      }
      sendDetails();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ px: 6, py: 3, my: 4 }}>
          <Stepper activeStep={activeStep} sx={steptyle}>
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
              <Button
                size="small"
                onClick={refreshPage}
                variant="contained"
                sx={{
                  p: 1,
                  mt: 5,
                  bgcolor: "#00897b",
                  ":hover": {
                    bgcolor: "#4db6ac",
                    color: "#fff",
                  },
                }}
                startIcon={<AddCircleOutlineIcon style={{ fontSize: 20 }} />}
              >
                <Typography sx={{ fontSize: 13 }}>New Order</Typography>
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              {err?<Box sx={{ width: '100%',mt:3 }}>
      <Collapse in={err}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setErr(null);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {err}
        </Alert>
      </Collapse>
    </Box>:""}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    sx={{
                      mt: 3,
                      ml: 1,
                      color: "#004d40",
                      ":hover": {
                        bgcolor: "#4db6ac",
                        color: "#fff",
                      },
                    }}
                  >
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  endIcon={<NavigateNextIcon />}
                  onClick={handleNext}
                  sx={{
                    mt: 3,
                    ml: 1,
                    bgcolor: "#00897b",
                    ":hover": {
                      bgcolor: "#009688",
                      color: "#616161",
                    },
                  }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
}
