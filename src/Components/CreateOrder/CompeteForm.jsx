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
import LinearProgress from "@mui/material/LinearProgress";
import SenderDetails from "./SenderDetails";
import ReceiverDetails from "./ReceiverDetails";
import Review from "./Review";
import {
  senderValidation,
  RecieverValidation,
  PickupValidation,
} from "../../Validation/Validation";
import PickupDetails from "./PickupDetails";
import axios from "axios";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { BACKEND_URL, ID } from "../../Constants/index";
import ReplayIcon from "@mui/icons-material/Replay";

const steps = [
  "Sender Details",
  "Receiver Detais",
  "Pickup Details",
  "Final Review",
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
const steptyle1 = {
  pt: 3,
  pb: 5,
  "& .Mui-active": {
    "& .MuiStepIcon-root": {
      color: "#dc2626",
    },
  },

  "& .Mui-completed": {
    "& .MuiStepIcon-root": {
      color: "#dc2626",
    },
  },
};

export default function CompeteForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [err, setErr] = React.useState(null);

  const [loading, setLoading] = React.useState(true);
  const [resSuccess, setResSuccess] = React.useState(true);
  const [fromData, setFormData] = React.useState({
    S_fname: "",
    S_lname: "",
    S_telephone: "",
    S_city: "",
    S_street: "",
    S_streestNo: "",
    S_email: "",

    R_lname: "",
    R_fname: "",
    R_telephone: "",
    R_district: "",
    R_HomeTown: "",
    R_streetNo: "",
    R_street: "",
    R_email: "",

    P_street: "",
    P_streetNo: "",
    P_district: "",
    P_VehicalType: "",
    P_telephone: "",
    P_paymentMethod: "",
    P_specialNote: "",
    P_homeTown: "",
    P_imergency: "",
    P_branch: "",
    P_distanceCost: "",
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
      case 3:
        return <Review fromData={fromData} setFormData={setFormData} />;
      default:
        throw new Error("Unknown step");
    }
  }
  function senderValid() {
    setErr(null);
    const data = senderValidation(
      fromData.S_fname,
      fromData.S_city,
      fromData.S_telephone,
      fromData.S_email
    );
    if (data) {
      setErr(data.Error);
      return 1;
    }
  }
  function recieverValid() {
    setErr(null);
    const data = RecieverValidation(
      fromData.R_fname,
      fromData.R_district,
      fromData.R_HomeTown,
      fromData.R_telephone,
      fromData.R_province,
      fromData.R_email
    );

    if (data) {
      setErr(data.Error);
      return 1;
    }
  }
  function pickValid() {
    setErr(null);
    const data = PickupValidation(
      fromData.P_homeTown,
      fromData.P_paymentMethod,
      fromData.P_telephone,
      fromData.P_district,
      fromData.P_branch,
      fromData.P_imergency,
      fromData.P_distanceCost,
      fromData.P_VehicalType
    );
    if (data) {
      setErr(data.Error);
      return 1;
    }
  }

  function sendDetails() {
    setLoading(true);
    axios
      .post(`${BACKEND_URL}/orders`, {
        sfname: fromData.S_fname,
        slname: fromData.S_lname,
        sstreet: fromData.S_street,
        sstreetNo: fromData.S_streestNo,
        scity: fromData.S_city,
        stelephone: fromData.S_telephone,
        sEmail: fromData.S_email,

        rfname: fromData.R_lname,
        rlname: fromData.R_fname,
        rprovince: fromData.R_province,
        rtelephone: fromData.R_telephone,
        rdistric: fromData.R_district,
        rhometown: fromData.R_HomeTown,
        rstreetNo: fromData.R_streetNo,
        rstreet: fromData.R_street,
        rEmail: fromData.R_email,

        pstreetNo: fromData.P_streetNo,
        pstreet: fromData.P_street,
        phometown: fromData.P_homeTown,
        pdistrict: fromData.P_district,
        pvehicaltype: fromData.P_VehicalType,
        ptelephone: fromData.P_telephone,
        ppaymentmethod: fromData.P_paymentMethod,
        pspecialnote: fromData.P_specialNote,
        pimergency: fromData.P_imergency,
        pdistancecost: fromData.P_distanceCost,
        pbranch: fromData.P_branch,
        padminID: ID,
      })
      .then(function (response) {
        setLoading(false);
        if (response.data.success === 1) {
          setResSuccess(true);
        } else {
          setResSuccess(false);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResSuccess(false);
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
    if (activeStep === 2) {
      if (pickValid()) {
        return;
      }
    }

    if (activeStep === steps.length - 1) {
      sendDetails();
    }
    setLoading(true);
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
          <Stepper
            activeStep={activeStep}
            sx={resSuccess ? steptyle : steptyle1}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              {loading ? (
                <LinearProgress sx={{ my: 6 }} color="success" />
              ) : resSuccess ? (
                <Box>
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
                    startIcon={
                      <AddCircleOutlineIcon style={{ fontSize: 20 }} />
                    }
                  >
                    <Typography sx={{ fontSize: 13 }}>New Order</Typography>
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Typography variant="h5" color={"#b91c1c"} gutterBottom>
                    Something went wrong while processing your order.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={"#dc2626"}
                    gutterBottom
                  >
                    Check your internet connection and try again.
                  </Typography>
                  <Button
                    size="small"
                    onClick={sendDetails}
                    variant="contained"
                    sx={{
                      p: 1,
                      mt: 5,
                      bgcolor: "#dc2626",
                      ":hover": {
                        bgcolor: "#be123c",
                        color: "#fff",
                      },
                    }}
                    startIcon={<ReplayIcon style={{ fontSize: 20 }} />}
                  >
                    <Typography sx={{ fontSize: 13 }}>Try Again</Typography>
                  </Button>
                </Box>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              {err ? (
                <Box sx={{ width: "100%", mt: 3 }}>
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
                </Box>
              ) : (
                ""
              )}
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
