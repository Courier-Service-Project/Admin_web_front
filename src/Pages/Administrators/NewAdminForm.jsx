import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DistrictDrop from '../../Components/DropDowns/City';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';
import { BACKEND_URL } from '../../Constants';

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const telephoneRegex = /^0\d{9}$/;

const adminformSchema = Yup.object({
  N_fname: Yup.string().min(3).required("Please enter your first name."),
  N_lname: Yup.string().min(3).required("Please enter your last name."),
  N_email: Yup.string().email("Please enter valid email").required("Please enter your email."),
  N_telephone: Yup.string().matches(telephoneRegex, "Please enter your valid telephone number").required("Please enter your telephone number."),
  N_dob: Yup.date()
    .nullable()
    .required("Please enter your date of birth.")
    .test("DOB", "You must be at least 18 years old", function (value) {
      return dayjs().diff(dayjs(value), 'year') >= 18;
    }),
    N_streetNo: Yup.string().min(3).required("Please enter your first name."),
    N_street: Yup.string().min(3).required("Please enter your first name."),
    N_city: Yup.string().min(3).required("Please enter your first name."),
  //N_dob: Yup.date().nullable().required("Please enter your date of birth."),
});

const initialValues = {
  N_fname: "",
  N_lname: "",
  N_telephone: "",
  N_email: "",
  N_streetNo: "",
  N_street: "",
  N_city: "",
  N_dob:null
};

const NewAdminForm = () => {
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
  const onSubmit = (values, actions) => {
    adminformSchema.validate(values)
    .then(() => {
      sendRequest(values);
      //console.log(values);
      //actions.resetForm();
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="newAdmin_form">
      <Formik
        initialValues={initialValues}
        validationSchema={adminformSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue,values}) => (
          <Form className="admin_form">
            <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Field name="N_fname"
                    as={TextField}
                    label="First Name"
                    variant="standard"
                    fullWidth
                    error={touched.N_fname && errors.N_fname}
                    helperText={touched.N_fname && errors.N_fname}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="N_lname"
                  as={TextField}
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  error={touched.N_lname && !!errors.N_lname}
                  helperText={touched.N_lname && errors.N_lname}
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
                              error={touched.N_dob && !!errors.N_dob}
                              helperText={touched.N_dob && errors.N_dob}
                            />
                          )}
                        />
                      )}
                    </Field>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="N_telephone"
                    as={TextField}
                    label="Telephone No."
                    variant="standard"
                    fullWidth
                    error={touched.N_telephone && !!errors.N_telephone}
                    helperText={touched.N_telephone && errors.N_telephone}
                    />
                </Grid>
                <Grid item xs={12}>
                  <Field name="N_email"
                    as={TextField}
                    type="email"
                    label="Email"
                    variant="standard"
                    style={{ width: "50%" }}
                    error={touched.N_email && !!errors.N_email}
                    helperText={touched.N_email && errors.N_email}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="N_streetNo"
                    as={TextField}
                    label="Street No."
                    variant="standard"
                    fullWidth
                    error={touched.N_streetNo && !!errors.N_streetNo}
                    helperText={touched.N_streetNo && errors.N_streetNo}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="N_street"
                    as={TextField}
                    label="Street"
                    variant="standard"
                    fullWidth
                    error={touched.N_street && !!errors.N_street}
                    helperText={touched.N_street && errors.N_street}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                <Field name="N_city"
                    as={TextField}
                    label="City"
                    variant="standard"
                    fullWidth
                    error={touched.N_city && !!errors.N_city}
                    helperText={touched.N_city && errors.N_city}
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
  );
};

export default NewAdminForm;
