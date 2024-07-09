import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import { BACKEND_URL } from "../../Constants/index";

export default function Forgot() {
  const [formStep, setFormStep] = React.useState(0);

  const [forgotData, setForgotData] = React.useState({
    email: "",
    otp: "",
    newPass: "",
    comfirm: "",
  });

  const changebtn = {
    px: 2,
    py: 0.8,
    my: 0.5,
    textTransform: "none",
    bgcolor: "#26a69a",
    color: "#fff",
    ":hover": {
      bgcolor: "#80cbc4",
      color: "#000",
    },
  };

  async function checkEmail() {
    try {
      const result = await axios.post(`${BACKEND_URL}/admin//fogotemail`, {
        email: forgotData.email,
      });

      if (result.data.success === 1) {
        CompleteFormStep();
      } else {
        alert(result.data.message);
      }
    } catch {
      alert("Backend Error");
    }
  }
  const checkOtp = () => {
    alert(forgotData.otp);
    CompleteFormStep();
  };
  const savechange = () => {
    alert(forgotData.newPass, forgotData.comfirm);
    CompleteFormStep();
  };

  const CompleteFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const renderButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <Button sx={changebtn} onClick={checkEmail} type="submit">
          Next
        </Button>
      );
    } else if (formStep === 1) {
      return (
        <Button sx={changebtn} onClick={checkOtp} type="submit">
          Verify OTP
        </Button>
      );
    } else if (formStep === 2) {
      return (
        <Button sx={changebtn} onClick={savechange} type="submit">
          Save changes
        </Button>
      );
    }
  };

  return (
    <Box>
      {formStep === 0 && (
        <section>
          <Box>
            <TextField
              hiddenLabel
              label="Enter your Email"
              variant="outlined"
              size="small"
              sx={{ mr: 3, mb: 1.5 }}
              name="email"
              value={forgotData.email}
              onChange={(event) =>
                setForgotData({ ...forgotData, email: event.target.value })
              }
            />
          </Box>
        </section>
      )}
      {formStep === 1 && (
        <section>
          <Box>
            <TextField
              hiddenLabel
              label="Enter OTP"
              variant="outlined"
              size="small"
              sx={{ mr: 3, mb: 1.5 }}
              name="otp"
              value={forgotData.otp}
              onChange={(event) =>
                setForgotData({ ...forgotData, otp: event.target.value })
              }
            />
          </Box>
        </section>
      )}
      {formStep === 2 && (
        <section>
          <TextField
            hiddenLabel
            label="Enter New Password"
            variant="outlined"
            size="small"
            sx={{ mr: 3, mb: 1.5 }}
            name="newPass"
            value={forgotData.newPass}
            onChange={(event) =>
              setForgotData({ ...forgotData, newPass: event.target.value })
            }
          />
          <TextField
            hiddenLabel
            label="Comfirm Password"
            variant="outlined"
            size="small"
            sx={{ mr: 3, mb: 1.5 }}
            name="comfirm"
            value={forgotData.comfirm}
            onChange={(event) =>
              setForgotData({ ...forgotData, comfirm: event.target.value })
            }
          />
        </section>
      )}
      {formStep === 3 && <section>change password Successfull</section>}
      {renderButton()}
    </Box>
  );
}
