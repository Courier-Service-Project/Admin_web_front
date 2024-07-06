import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function Forgot() {
  const [formStep, setFormStep] = React.useState(0);

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

  const CompleteFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 0) {
      return (
        <Button sx={changebtn} onClick={CompleteFormStep} type="submit">
          Next
        </Button>
      );
    } else if (formStep === 1) {
      return (
        <Button sx={changebtn} onClick={CompleteFormStep} type="submit">
          Change Password
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
              label="Enter Pre Password"
              variant="outlined"
              size="small"
              sx={{ mr: 3, mb: 1.5 }}
              name="prePass"
              //   value={formik0.values.prePass}
              //   onChange={formik0.handleChange}
              //   onBlur={formik0.handleBlur}
              //   error={
              //     formik0.touched.prePass && Boolean(formik0.errors.prePass)
              //   }
              //   helperText={
              //     formik0.touched.prePass && formik0.errors.prePass
              //   }
            />
            {/* <Typography sx={{ color: "red", fontSize: "13px" }}>
              {" "}
              {error ? error : ""}
            </Typography> */}
          </Box>
        </section>
      )}
      {formStep === 1 && (
        <section>
          <Box>
            <TextField
              hiddenLabel
              label="Enter New Password"
              variant="outlined"
              size="small"
              sx={{ mr: 3, mb: 1.5 }}
              name="newPass"
              //   value={formik1.values.newPass}
              //   onChange={formik1.handleChange}
              //   onBlur={formik1.handleBlur}
              //   error={
              //     formik1.touched.newPass && Boolean(formik1.errors.newPass)
              //   }
              //   helperText={
              //     formik1.touched.newPass && formik1.errors.newPass
              //   }
            />
            <TextField
              hiddenLabel
              label="Enter New Password"
              variant="outlined"
              size="small"
              sx={{ mr: 3, mb: 1.5 }}
              name="comNewPass"
              //   value={formik1.values.comNewPass}
              //   onChange={formik1.handleChange}
              //   onBlur={formik1.handleBlur}
              //   error={
              //     formik1.touched.comNewPass &&
              //     Boolean(formik1.errors.comNewPass)
              //   }
              //   helperText={
              //     formik1.touched.comNewPass && formik1.errors.comNewPass
              //   }
            />
          </Box>
        </section>
      )}
      {formStep === 2 && (
        <section>
          <p>Successfully completed</p>
        </section>
      )}
      {renderButton()}
    </Box>
  );
}
