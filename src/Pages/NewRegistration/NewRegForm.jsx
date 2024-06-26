import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Alert,Typography,Paper } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DistrictDrop from '../../Components/DropDowns/City';
import VehicleDrop from '../../Components/DropDowns/Vehicle';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { BACKEND_URL } from '../../Constants';

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
  D_city: Yup.string().required("Please choose a branch location."),
  D_vehicle: Yup.string().required("Please choose your vehicle type."),
  D_vehicleNo: Yup.string().required("Please enter your vehicle Number."),
  E_fname: Yup.string().required("Please enter your emergency contact first name."),
  E_lname: Yup.string().required("Please enter your emergency contact last name."),
  E_relation: Yup.string().required("Please enter your emergency contact relation to you."),
  E_telephone: Yup.string().matches(telephoneRegex, "Telephone number must be 10 digits and start with 0").required("Please enter your emergency contact telephone no."),
});

const Newregistrationform = () => {
  const [firstError, setFirstError] = useState(null);

  const sendRequest=async (values)=>{
    const formData={
      values:values
    }

    try{
      const result=await axios.post(`${BACKEND_URL}/applicant/postApplicantData`,formData)
      console.log(result);

    }catch(error){
      console.log(error.message);
    }
    
  }

  const onSubmit1 = (values, setSubmitting) => {
    applicantformSchema.validate(values)
    .then(() => {
      sendRequest(values);
      console.log(values);
      setSubmitting(false);

    //actions.resetForm();
    })
    .catch((error) => {

    })
    .finally(() => {
      //setLoading(false);
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
      {({ errors, touched, handleSubmit, validateForm,setFieldValue,values }) => {
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
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Field name="A_fname"
                    as={TextField}
                    label="First Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="A_lname"
                    as={TextField}
                    label="Last Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <Field name="A_telephone"
                    as={TextField}
                    label="Telephone No."
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field name="A_email"
                    as={TextField}
                    type="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="A_streetNo"
                    as={TextField}
                    label="Street No."
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="A_street"
                    as={TextField}
                    label="Street"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="A_city"
                    as={TextField}
                    label="City"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <DistrictDrop
                    label="Branch Location"
                    name="D_city"
                    value={values.D_city}
                    onChange={(e) => setFieldValue('D_city', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <VehicleDrop
                    name="D_vehicle"
                    label="Vehicle Type"
                    fullWidth
                    value={values.D_vehicle}
                    onChange={(e) => setFieldValue('D_vehicle', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="D_vehicleNo"
                    as={TextField}
                    //type="text"
                    label="Vehicle No"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Emergency Contact
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Field name="E_fname"
                    as={TextField}
                    //type="text"
                    label="Emergency Contact First Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="E_lname"
                    as={TextField}
                    //type="text"
                    label="Emergency Contact Last Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="E_relation"
                    as={TextField}
                    //type="text"
                    label="Emergency Contact Relation"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px',marginLeft: '400px',marginTop: '20px', }}>
                Next
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Newregistrationform;