import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const telephoneRegex = /^0\d{9}$/;

const adminformSchema = Yup.object({
  N_fname: Yup.string().min(3).required("Please enter your first name."),
  N_lname: Yup.string().min(3).required("Please enter your last name."),
  N_email: Yup.string().email("Please enter valid email").required("Please enter your email."),
  N_telephone: Yup.string().matches(telephoneRegex, "Please enter your valid telephone number").required("Please enter your telephone number."),
  N_password: Yup.string().matches(passwordRegex, "Please enter a valid password").required("Please enter your password."),
  N_pasConfirm: Yup.string().oneOf([Yup.ref("N_password")], "Passwords do not match!").required("Please confirm your password."),
  N_dob: Yup.date().nullable().required("Please enter your date of birth."),
});

const initialValues = {
  N_fname: "",
  N_lname: "",
  N_telephone: "",
  N_email: "",
  N_pasConfirm: "",
  N_password: "",
  N_dob:null
};

const NewAdminForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log("no");
    actions.resetForm();
  };
//console.log(errors)
  return (
    <div className="newAdmin_form">
      <Formik
        initialValues={initialValues}
        validationSchema={adminformSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue}) => (
          <Form className="admin_form">
            <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Field name="N_fname"
                    as={TextField}
                    label="First Name"
                    variant="standard"
                    fullWidth
                    error={touched.N_fname && errors.N_fname}
                    helperText={touched.N_fname && errors.N_fname}
                    />
                    {/* {({ field }) => (
                      <TextField
                        {...field}// Spreads Formik's field props (value, onChange, onBlur)
                        label="First Name"
                        variant="standard"
                        fullWidth
                        error={touched.N_fname && errors.N_fname}
                        helperText={touched.N_fname && errors.N_fname}
                      />
                    )}
                  </Field> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="N_lname"
                  as={TextField}
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  error={touched.N_lname && !!errors.N_lname}
                  helperText={touched.N_lname && errors.N_lname}
                  />
                    {/* {({ field }) => (
                      <TextField
                        {...field}
                        label="Last Name"
                        variant="standard"
                        fullWidth
                        error={touched.N_lname && !!errors.N_lname}
                        helperText={touched.N_lname && errors.N_lname}
                      />
                    )}
                  </Field> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                <Grid item xs={12} sm={6}>
                  <Field name="N_telephone"
                    as={TextField}
                    label="Telephone No."
                    variant="standard"
                    fullWidth
                    error={touched.N_telephone && !!errors.N_telephone}
                    helperText={touched.N_telephone && errors.N_telephone}
                    />
                    {/* {({ field }) => (
                      <TextField
                        {...field}
                        label="Telephone No."
                        variant="standard"
                        fullWidth
                        error={touched.N_telephone && !!errors.N_telephone}
                        helperText={touched.N_telephone && errors.N_telephone}
                      />
                    )}
                  </Field> */}
                </Grid>
                <Grid item xs={12}>
                  <Field name="N_email"
                    as={TextField}
                    type="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    error={touched.N_email && !!errors.N_email}
                    helperText={touched.N_email && errors.N_email}
                    />
                    {/* {({ field }) => (
                      <TextField
                        {...field}
                        type="email"
                        label="Email"
                        variant="standard"
                        fullWidth
                        error={touched.N_email && !!errors.N_email}
                        helperText={touched.N_email && errors.N_email}
                      />
                    )}
                  </Field> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="N_password"
                    as={TextField}
                    type="password"
                    label="Password"
                    variant="standard"
                    fullWidth
                    error={touched.N_password && !!errors.N_password}
                    helperText={touched.N_password && errors.N_password}
                    />
                    {/* {({ field }) => (
                      <TextField
                        {...field}
                        type="password"
                        label="Password"
                        variant="standard"
                        fullWidth
                        error={touched.N_password && !!errors.N_password}
                        helperText={touched.N_password && errors.N_password}
                      />
                    )}
                  </Field> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="N_pasConfirm"
                    as={TextField}
                    type="password"
                    label="Confirm Password"
                    variant="standard"
                    fullWidth
                    error={touched.N_pasConfirm && !!errors.N_pasConfirm}
                    helperText={touched.N_pasConfirm && errors.N_pasConfirm}
                    />
                    {/* {({ field }) => (
                      <TextField
                        {...field}
                        type="password"
                        label="Confirm Password"
                        variant="standard"
                        fullWidth
                        error={touched.N_pasConfirm && !!errors.N_pasConfirm}
                        helperText={touched.N_pasConfirm && errors.N_pasConfirm}
                      />
                    )}
                  </Field> */}
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
