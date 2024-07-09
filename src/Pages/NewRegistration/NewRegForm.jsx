import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Alert, Typography, Paper, CircularProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DistrictDrop from '../../Components/DropDowns/City';
import VehicleDrop from '../../Components/DropDowns/Vehicle';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';
import { BACKEND_URL } from '../../Constants';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const telephoneRegex = /^0\d{9}$/;

const applicantformSchema = Yup.object({
  A_fname: Yup.string().min(3).required("Please enter your first name."),
  A_lname: Yup.string().min(3).required("Please enter your last name."),
  A_dob: Yup.date()
    .nullable()
    .required("Please enter your date of birth.")
    .test("DOB", "You must be at least 18 years old", function (value) {
      return dayjs().diff(dayjs(value), 'year') >= 18;
    }),
  A_telephone: Yup.string().matches(telephoneRegex, "Telephone number must be 10 digits and start with 0").required("Please enter your telephone no."),
  A_email: Yup.string().email("Please enter valid email.").required("Please enter your email address."),
  A_street: Yup.string().required("Please enter your street."),
  A_city: Yup.string().required("Please choose your city."),
  D_vehicleNo: Yup.string().required("Please enter your vehicle Number."),
  D_vehicle: Yup.string().required("Please choose your vehicle type."),
  D_city: Yup.string().required("Please choose a branch location."),
  E_fname: Yup.string().required("Please enter your emergency contact first name."),
  E_lname: Yup.string().required("Please enter your emergency contact last name."),
  E_relation: Yup.string().required("Please enter your emergency contact relation to you."),
  E_telephone: Yup.string().matches(telephoneRegex, "Telephone number must be 10 digits and start with 0").required("Please enter your emergency contact telephone no."),
});

const Newregistrationform = () => {
  const [firstError, setFirstError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async (values, setSubmitting, actions) => {
    const formData = { values: values };
    try {
      const result = await axios.post(`${BACKEND_URL}/applicant/postApplicantData`, formData);
      console.log(result);
      if (result.data.success === 200 && result.data.message === "successfully Inserted") {
        toast.success('Submitted successfully!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
        // setFirstError(null);
        // setSuccessMessage("Form submitted successfully!");
      } else {
        setSuccessMessage(null);
        setFirstError(result.data.message);
      }
    } catch (error) {
      // console.log(error.message);
      // setSuccessMessage(null);
      // setFirstError("Error in form submission.");

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
    setLoading(false);
    setSubmitting(false);
    //actions.resetForm();
  };

  const onSubmit1 = (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    setFirstError(null);
    setSuccessMessage(null);
    applicantformSchema.validate(values)
      .then(() => {
        sendRequest(values, setSubmitting, { resetForm });
      })
      .catch((error) => {
        setFirstError(error.message);
        setSuccessMessage(null);
        setLoading(false);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        A_email: "",
        A_fname: "",
        A_lname: "",
        A_dob: null,
        A_telephone: "",
        A_streetNo: "",
        A_city: "",
        A_street: "",
        E_fname: "",
        E_lname: "",
        E_relation: "",
        E_telephone: "",
        D_city: "",
        D_vehicle: "",
        D_vehicleNo: "",
      }}
      validationSchema={applicantformSchema}
      onSubmit={onSubmit1}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, touched, handleSubmit, validateForm, setFieldValue, values }) => {
        const handleFormSubmit = async (e) => {
          e.preventDefault();
          const validationErrors = await validateForm();
          if (Object.keys(validationErrors).length > 0) {
            const firstErrorField = Object.keys(validationErrors)[0];
            setFirstError(validationErrors[firstErrorField]);
          } else {
            setFirstError(null);
            handleSubmit();
          }
        };

        return (
          <Form onSubmit={handleFormSubmit}>
            <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Applicant Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Field name="A_fname"
                    as={TextField}
                    label="First Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="A_lname"
                    as={TextField}
                    label="Last Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Field name="A_dob">
                      {({ field }) => (
                        <DatePicker
                          {...field}
                          label="Date of Birth"
                          value={field.value}
                          onChange={(value) => setFieldValue('A_dob', value)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                            />
                          )}
                        />
                      )}
                    </Field>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="A_telephone"
                    as={TextField}
                    label="Telephone No."
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="A_email"
                    as={TextField}
                    type="email"
                    label="Email"
                    variant="standard"
                    style={{ width: "50%" }}
                  />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="A_streetNo"
                    as={TextField}
                    label="Street No."
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="A_street"
                    as={TextField}
                    label="Street"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="A_city"
                    as={TextField}
                    label="City"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="D_vehicleNo"
                    as={TextField}
                    label="Vehicle No"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <VehicleDrop
                    name="D_vehicle"
                    label="Vehicle Type"
                    fullWidth
                    value={values.D_vehicle}
                    onChange={(e) => setFieldValue('D_vehicle', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <DistrictDrop
                    label="Branch Location"
                    name="D_city"
                    value={values.D_city}
                    onChange={(e) => setFieldValue('D_city', e.target.value)}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Emergency Contact
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Field name="E_fname"
                    as={TextField}
                    label="Emergency Contact First Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="E_lname"
                    as={TextField}
                    label="Emergency Contact Last Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="E_relation"
                    as={TextField}
                    label="Emergency Contact Relation"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="E_telephone"
                    as={TextField}
                    label="Emergency Contact Telephone No."
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
            {firstError && (
              <Box mt={2}>
                <Alert severity="error">{firstError}</Alert>
              </Box>
            )}
            {successMessage && (
              <Box mt={2}>
                <Alert severity="success">
                  {successMessage}
                </Alert>
              </Box>
            )}
            <Box mt={2} display="flex" justifyContent="flex-end">
              {loading ? (
                <CircularProgress sx={{ color: "#4caf50" }}/>
              ) : (
                <Grid item xs={12} sm={5}>
                  <Button type="submit"
                    fullWidth
                    size="medium"
                    variant="contained"
                    sx={{
                      mt: 2,
                      bgcolor: "#4caf50",
                      margin: "0px 0 0px 0",
                      gap: "3px",
                      ":hover": {
                        bgcolor: "#4caf50",
                        color: "#fff",
                      },
                    }}>
                    <CheckCircleIcon sx={{ mr: 1 }} /> Submit
                  </Button>
                </Grid>
              )}
            </Box>
            <ToastContainer />
          </Form>
        );
      }}
    </Formik>
  );
};

export default Newregistrationform;
