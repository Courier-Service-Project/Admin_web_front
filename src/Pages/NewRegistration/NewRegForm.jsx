import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Formik,Form, Field } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';

const telephoneRegex = /^0\d{9}$/;

const applicantformSchema = Yup.object({
  A_email: Yup.string().email("Please enter valid email.").required("Please enter your email address."),
  A_fname: Yup.string().min(3).required("Please enter your first name."),
  A_lname: Yup.string().min(3).required("Please enter your last name."),
  //A_dob: Yup.date().max(new Date(), "Date of birth cannot be in the future.").required("Please enter your date of birth."),
  A_telephone: Yup.string().matches(telephoneRegex, "Telephone number must be 10 digits and start with 0").required("Please enter your telephone no."),
  A_city: Yup.string().required("Please enter your city."),
  A_streetNo: Yup.string().required("Please enter your Street No."),
  A_street: Yup.string().required("Please enter your street."),
  E_fname: Yup.string().required("Please enter your emergency contact first name."),
  E_lname: Yup.string().required("Please enter your emergency contact last name."),
  E_relation: Yup.string().required("Please enter your emergency contact relation to you."),
  E_telephone: Yup.string().matches(telephoneRegex, "Telephone number must be 10 digits and start with 0").required("Please enter your emergency contact telephone no."),
  D_city: Yup.string().required("Please enter your city."),
  D_vehicle: Yup.string().required("Please enter your vehicle year & model."),
  //isPermanent: Yup.bool().oneOf([true], 'You must confirm that all details are correct').required('Required'),
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
  E_address: "",
  E_telephone: "",
  D_city: "",
  D_vehicle: "",
  D_area: "",
  D_document: ""
};

const Newregistrationform = () => {
  const onSubmit1 = (values, actions) => {
    console.log("yes")
    console.log(values);
    actions.resetForm();
  }
  //console.log(errors);
  //console.log(formik)
  return (
    <div className='applicantform'>
      <Formik
        initialValues={initialValues1}
        validationSchema={applicantformSchema}
        onSubmit={onSubmit1}
        >
          {({errors, touched, setFieldValue}) => (
            <Form className='applicantreg_form'>
            <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Applicant Information
              </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Field name="A_fname"
                          as={TextField}
                          //type="text"
                          label="First Name"
                          variant="standard"
                          fullWidth
                          error={touched.A_fname && errors.A_fname}
                          helperText={touched.A_fname && errors.A_fname}
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="A_lname"
                        as={TextField}
                        //type="text"
                        label="Last Name"
                        variant="standard"
                        fullWidth
                        error={touched.A_lname && !!errors.A_lname}
                        helperText={touched.A_lname && errors.A_lname}
                        />
                      </Grid>
                      {/* <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                      </Grid> */}
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
                          //type="text"
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
                          //type="text"
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
                          //type="text"
                          label="City"
                          variant="standard"
                          fullWidth
                          error={touched.A_city && !!errors.A_city}
                          helperText={touched.A_city && errors.A_city}
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="D_city"
                          as={TextField}
                          //type="text"
                          label="Applying for what city"
                          variant="standard"
                          fullWidth
                          error={touched.D_city && !!errors.D_city}
                          helperText={touched.D_city && errors.D_city}
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="D_vehicle"
                          as={TextField}
                          //type="text"
                          label="Vehicle type"
                          variant="standard"
                          fullWidth
                          error={touched.D_vehicle && !!errors.D_vehicle}
                          helperText={touched.D_vehicle && errors.D_vehicle}
                          />
                      </Grid>
                    </Grid>
                    </Paper>
            <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Driver Questionnaries 
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
                        <Field name="E_telephone"
                          as={TextField}
                          //type="text"
                          label="Emergency Contact Telephone No."
                          variant="standard"
                          fullWidth
                          error={touched.E_telephone && !!errors.E_telephone}
                          helperText={touched.E_telephone && errors.E_telephone}
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
                    </Grid>
                    </Paper>
          <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
          <Typography variant="h6" fontWeight="600" gutterBottom>
          Emergency Contact
          </Typography>
          <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Field name="D_area"
                          as={TextField}
                          //type="text"
                          label="Are you available to work in other areas? (if yes, enter the areas)"
                          variant="standard"
                          fullWidth
                          error={touched.D_area && !!errors.D_area}
                          helperText={touched.D_area && errors.D_area}
                          />
                      </Grid>
                      <Grid item xs={12}>
                        <Field name="D_document"
                          as={TextField}
                          //type="text"
                          label="If hired, are you able to submit proof that you are legally eligible for employment?"
                          variant="standard"
                          fullWidth
                          error={touched.D_document && !!errors.D_document}
                          helperText={touched.D_document && errors.D_document}
                          />
                      </Grid>
                    </Grid>
                    <Grid>
                      <Button variant="contained" color="primary" type="submit" sx={{
                        bgcolor: "#00897b",
                        marginLeft: '400px',
                        marginTop: '20px',
                        ":hover": {
                          bgcolor: "#009688",
                          color: "#616161",
                        },
                      }}>
                        Submit
                      </Button>
                    </Grid>
                  </Paper>
            </Form>
          )}
        
      </Formik>
    </div>
  )
}

export default Newregistrationform;