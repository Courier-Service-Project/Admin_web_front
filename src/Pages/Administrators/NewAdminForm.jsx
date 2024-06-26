import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Alert, Paper, } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AdminTypetDrop from '../../Components/DropDowns/AdminType';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';
import { BACKEND_URL } from '../../Constants';
import { red } from '@mui/material/colors';

const telephoneRegex = /^0\d{9}$/;

const adminformSchema = Yup.object({
  N_fname: Yup.string().min(3).required("Please enter your first name."),
  N_lname: Yup.string().min(3).required("Please enter your last name."),
  N_telephone: Yup.string().matches(telephoneRegex, "Please enter your valid telephone number").required("Please enter your telephone number."),
  N_email: Yup.string().email("Please enter valid email").required("Please enter your email."),
  N_dob: Yup.date()
    .nullable()
    .required("Please enter your date of birth.")
    .test("DOB", "You must be at least 18 years old", function (value) {
      return dayjs().diff(dayjs(value), 'year') >= 18;
    }),
  //N_streetNo: Yup.string().min(3).required("Please enter your first name."),
  N_street: Yup.string().min(3).required("Please enter your Street."),
  N_city: Yup.string().min(3).required("Please enter your city."),
  N_admin: Yup.string().required("Please choose Admin type.")
});

const NewAdminForm = () => {
  const [firstError, setFirstError] = useState(null);

  const sendRequest = async (values) =>{
    const formData ={
      values:values
    }
    try{
      const result = await axios.post(`${BACKEND_URL}/applicant/postAdminData`,formData)
      //console.log("im here")
      console.log(result);
    }
    catch(error){
      console.log(error.message);
      
    }
  }
  
  const onSubmit = (values, {setSubmitting}) => {
    adminformSchema.validate(values)
    .then(() => {
      sendRequest(values);
      //actions.resetForm();
      console.log(values);
      setSubmitting(false);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <Formik
      initialValues={{
        N_fname: "",
        N_lname: "",
        N_telephone: "",
        N_email: "",
        N_streetNo: "",
        N_street: "",
        N_city: "",
        N_dob:null,
        N_admin:""
      }}
      validationSchema={adminformSchema}
      onSubmit={onSubmit}
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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field name="N_fname"
                  as={TextField}
                  label="First Name"
                  variant="standard"
                  fullWidth
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="N_lname"
                  as={TextField}
                  label="Last Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field name="N_telephone"
                  as={TextField}
                  label="Telephone No."
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field name="N_email"
                  as={TextField}
                  type="email"
                  label="Email"
                  variant="standard"
                  style={{ width: "50%" }}
                />
              </Grid>
              <Grid item xs={12} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Field name="N_dob">
                      {({ field }) => (
                        <DatePicker
                          {...field}
                          label="Date of Birth"
                          value={field.value}
                          onChange={(value) => setFieldValue('N_dob', value)}
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
              <Grid item xs={12} sm={4}>
                <Field name="N_streetNo"
                  as={TextField}
                  label="Street No."
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field name="N_street"
                  as={TextField}
                  label="Street"
                  variant="standard"
                  fullWidth
                  />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field name="N_city"
                  as={TextField}
                  label="City"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <AdminTypetDrop
                    label="Admin Type"
                    name="N_admin"
                    value={values.N_admin}
                    onChange={(e) => setFieldValue('N_admin', e.target.value)}
                    />
                </Grid>
            </Grid>
            {firstError && (
              <Box mt={2}>
                <Alert severity="error">{firstError}</Alert>
              </Box>
            )}
            <Grid item sx={12} sm={4} >
            <Box mt={3} color={red}>
              <Button type="submit" variant="contained" color="primary" sx={{marginLeft: '400px',marginTop: '20px'}} >
                Next
              </Button>
            </Box>
            </Grid>
            </Paper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewAdminForm;

