import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Paper, Button, Alert, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DistrictDrop from '../../Components/DropDowns/City';
import VehicleDrop from '../../Components/DropDowns/Vehicle';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { BACKEND_URL } from '../../Constants';
import SuccessfulAlert from '../../Components/Alert/SuccessfulAlert';

const telephoneRegex = /^0\d{9}$/;

const applicantformSchema = Yup.object({
  A_email: Yup.string().email("Please enter valid email.").required("Please enter your email address."),
  A_fname: Yup.string().min(3).required("Please enter your first name."),
  A_lname: Yup.string().min(3).required("Please enter your last name."),
  A_dob: Yup.date()
    .nullable()
    .required("Please enter your date of birth.")
    .test("DOB", "You must be at least 18 years old", function (value) {
      return dayjs().diff(dayjs(value), 'year') >= 18;
    }),
  A_telephone: Yup.string().matches(telephoneRegex, "Telephone number must be 10 digits and start with 0").required("Please enter your telephone no."),
  A_city: Yup.string().required("Please choose your city."),
  A_street: Yup.string().required("Please enter your street."),
  E_fname: Yup.string().required("Please enter your emergency contact first name."),
  E_lname: Yup.string().required("Please enter your emergency contact last name."),
  E_relation: Yup.string().required("Please enter your emergency contact relation to you."),
  E_telephone: Yup.string().matches(telephoneRegex, "Telephone number must be 10 digits and start with 0").required("Please enter your emergency contact telephone no."),
  D_city: Yup.string().required("Please choose a branch location."),
  D_vehicle: Yup.string().required("Please choose your vehicle type."),
  D_vehicleNo: Yup.string().required("Please enter your vehicle Number."),
});

const initialValues1 = {
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
};

const Newregistrationform = () => {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [open,setOpen] =useState(false);
  // const [success,setSucces] = useState(null);

  useEffect(()=>{
    setLoading(false);
  })
  const sendRequest=async (values)=>{
    //setLoading(true);
    const formData={
      values:values
    }
    // console.log("values:",values)
    // console.log("formData:",formData)
    try{
      const result=await axios.post(`${BACKEND_URL}/applicant/postApplicantData`,formData)
      //setLoading(true);
      console.log(result);
      //setLoading(false);
      //setSucces("Successfully Submit.")

    }catch(error){
      // setLoading(false);
      console.log(error.message);
      setLoading(false);
    }
    
  }

  const onSubmit1 = (values, actions) => {
    applicantformSchema.validate(values)
    .then(() => {
      //setLoading(true);
      sendRequest(values);
    // console.log(values);
    //setOpen(true);
    //actions.resetForm();
    })
    .catch((error) => {
      setShowErrorAlert(true);
    })
    .finally(() => {
      //setLoading(false);
    });
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleSuccessful = () => {
  //   window.location.reload();
  // }
  return (
    <div className='applicantform'>
      <Formik
        initialValues={initialValues1}
        validationSchema={applicantformSchema}
        onSubmit={onSubmit1}
      >
        {({ errors, touched, setFieldValue, values}) => (
          <Form className='applicantreg_form'>
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
                    error={touched.A_fname && !!errors.A_fname}
                    helperText={touched.A_fname && errors.A_fname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="A_lname"
                    as={TextField}
                    label="Last Name"
                    variant="standard"
                    fullWidth
                    error={touched.A_lname && !!errors.A_lname}
                    helperText={touched.A_lname && errors.A_lname}
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
                              error={touched.A_dob && !!errors.A_dob}
                              helperText={touched.A_dob && errors.A_dob}
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
                    error={touched.A_telephone && !!errors.A_telephone}
                    helperText={touched.A_telephone && errors.A_telephone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field name="A_email"
                    as={TextField}
                    type="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    error={touched.A_email && !!errors.A_email}
                    helperText={touched.A_email && errors.A_email}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="A_streetNo"
                    as={TextField}
                    label="Street No."
                    variant="standard"
                    fullWidth
                    error={touched.A_streetNo && !!errors.A_streetNo}
                    helperText={touched.A_streetNo && errors.A_streetNo}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="A_street"
                    as={TextField}
                    label="Street"
                    variant="standard"
                    fullWidth
                    error={touched.A_street && !!errors.A_street}
                    helperText={touched.A_street && errors.A_street}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="A_city"
                    as={TextField}
                    label="City"
                    variant="standard"
                    fullWidth
                    error={touched.A_city && !!errors.A_city}
                    helperText={touched.A_city && errors.A_city}
                    width={300} // You can pass custom width here
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <DistrictDrop
                    label="Branch Location"
                    name="D_city"
                    value={values.D_city}
                    onChange={(e) => setFieldValue('D_city', e.target.value)}
                    error={touched.D_city && !!errors.D_city}
                    helperText={touched.D_city && errors.D_city}
                    width={300} // You can pass custom width here
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <VehicleDrop
                    name="D_vehicle"
                    label="Vehicle Type"
                    width={300}
                    value={values.D_vehicle}
                    onChange={(e) => setFieldValue('D_vehicle', e.target.value)}
                    error={touched.D_vehicle && !!errors.D_vehicle}
                    helperText={touched.D_vehicle && errors.D_vehicle}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="D_vehicleNo"
                    as={TextField}
                    //type="text"
                    label="Vehicle No"
                    variant="standard"
                    fullWidth
                    error={touched.D_vehicleNo && !!errors.D_vehicleNo}
                    helperText={touched.D_vehicleNo && errors.D_vehicleNo}
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
                    error={touched.E_fname && !!errors.E_fname}
                    helperText={touched.E_fname && errors.E_fname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="E_lname"
                    as={TextField}
                    //type="text"
                    label="Emergency Contact Last Name"
                    variant="standard"
                    fullWidth
                    error={touched.E_lname && !!errors.E_lname}
                    helperText={touched.E_lname && errors.E_lname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="E_relation"
                    as={TextField}
                    //type="text"
                    label="Emergency Contact Relation"
                    variant="standard"
                    fullWidth
                    error={touched.E_relation && !!errors.E_relation}
                    helperText={touched.E_relation && errors.E_relation}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="E_telephone"
                    as={TextField}
                    label="Emergency Contact Telephone No."
                    variant="standard"
                    fullWidth
                    error={touched.E_telephone && !!errors.E_telephone}
                    helperText={touched.E_telephone && errors.E_telephone}
                  />
                </Grid>
              </Grid>
              {showErrorAlert && (
                <Alert severity="error" onClose={() => setShowErrorAlert(false)}>
                  You have an error in your form. Please check all fields and try again.
                </Alert>
              )}
              {/* <Button
                type="submit"
                width="20px"
                variant="contained"
                color="primary"
                disabled={loading}
                style={{ marginTop: '16px',marginLeft: '400px',marginTop: '20px', }}
                // onClick={() => {
                //   if (Object.keys(errors).length > 0) {

                //     setShowErrorAlert(true);
                //   } else {
                    
                //     setShowErrorAlert(false);
                //   }
                // }}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit'}
                {/* //Submit */}
              {/* </Button> */} 
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                style={{ marginTop: '16px',marginLeft: '400px',marginTop: '20px', }}
              >
                {loading ? (<CircularProgress size={24} style={{ color: 'red', marginRight: '10px' }}/>): ('Submit')}
                {/* {loading && (
                  <CircularProgress size={40} style={{ color: 'red', marginRight: '10px' }} />
                )}
                Submit */}
              </Button>
            </Paper>
            

            {/* <SuccessfulAlert
              open={open}
              onClose={handleClose}
              error={success}
              onclick1={handleSuccessful}
            /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Newregistrationform;

