// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { useState, useEffect } from "react";
// import TextField from '@mui/material/TextField';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import {Paper,
//         Button,
//         FormControl,
//         FormControlLabel,
//         FormHelperText,
//         Checkbox as MuiCheckbox} from '@mui/material';

// export default function App() {
//   const [inputFields, setInputFields] = useState({
//     email: "",
//     //password: "",
//     //age: null,
//     A_fname: "",
//     A_lname: "",
//     A_Dob: null,
//     A_telephone: "",
//     A_streetNo: "",
//     A_city: "",
//     A_street: "",
//     //A_years: "",
//     E_fname: "",
//     E_lname: "",
//     E_relation: "",
//     E_district: "",
//     E_city: "",
//     //E_state: "",
//     E_address: "",
//     E_telephone: "",
//     D_city: "",
//     D_vehicle: "",
//     D_area: "",
//     D_document: "",
//     //D_skill: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [isPermanent, setIsPermanent] = useState(false);

//   const validateValues = (inputValues) => {
//     let errors = {};
//     const telephoneRegex = /^0\d{9}$/; // Regular expression for 10 digits starting with 0
//     if (inputValues.email.length < 15) {
//       errors.email = "Email is too short";
//     }
//     if (!inputValues.A_Dob) {
//       errors.A_Dob = "Require your date of birth";
//     } else if (isNaN(new Date(inputValues.A_Dob).getTime())) {
//       errors.A_Dob = "Invalid date of birth";
//     } else if (new Date(inputValues.A_Dob) > new Date()) {
//       errors.A_Dob = "Date of birth cannot be in the future";
//     }
//     if(inputValues.A_city.length==0){
//         errors.A_city = "Require city";
//     }
//     if(inputValues.A_fname.length==0){
//         errors.A_fname = "Require your first name";
//     }
//     if(inputValues.A_lname.length==0){
//         errors.A_lname = "Require your Last name";  
//     }
//     if(inputValues.A_streetNo.length == 0){
//         errors.A_streetNo = " Require your Province";
//     }
//     if (!telephoneRegex.test(inputValues.A_telephone)) {
//       errors.A_telephone = "Telephone number must be 10 digits and start with 0";
//     }else if(inputValues.A_telephone.length == 0){
//         errors.A_telephone = " Require your telephone no.";
//     }
//     if(inputValues.A_telephone.length == 0){
//         errors.A_telephone = " Require your telephone no.";
//     }
//     if(inputValues.A_street.length == 0){
//         errors.A_street = " Require your street";
//     }
//     if(inputValues.E_address.length == 0){
//         errors.E_address = " Require your emergency contact address";
//     }
//     if(inputValues.E_fname.length == 0){
//         errors.E_fname = " Require your emergency contact first name";
//     }
//     if(inputValues.E_lname.length == 0){
//         errors.E_lname = " Require your emergency contact last name";
//     }
//     if(inputValues.E_relation.length == 0){
//         errors.E_relation = " Require your emergency contact relation to you";
//     }
//     if (!telephoneRegex.test(inputValues.E_telephone)) {
//       errors.E_telephone = "Telephone number must be 10 digits and start with 0";
//     }else if(inputValues.E_telephone.length == 0){
//         errors.E_telephone = " Require your emergency contact telephone no.";
//     }
//     if(inputValues.D_city.length == 0){
//         errors.D_city = " Require your city.";
//     }
//     if(inputValues.D_vehicle.length == 0){
//         errors.D_vehicle = " Require your emergency contact telephone no.";
//     }
//     if(!isPermanent){
//         errors.isPermanent = "You must confirm that all details are correct";
//     }
//     return errors;
//   };

//   const handleChange = (e) => {
//     setInputFields({ ...inputFields, [e.target.name]: e.target.value });
//   };

//   const handleDateChange = (date) => {
//     setInputFields({ ...inputFields, A_Dob: date });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validateValues(inputFields));
//     setSubmitting(true);
//     console.log(inputFields);
//   };

//   const finishSubmit = () => {
//     console.log(inputFields);
//     //window.location.reload();
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && submitting) {
//       finishSubmit();
//     }
//   }, [errors]);

//   return (
//     <React.Fragment>
//       <div className="App">
//         {Object.keys(errors).length === 0 && submitting ? (
//           <span className="success">Successfully submitted ✓</span>
//         ) : null}
//         <form onSubmit={handleSubmit}>
//             <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
//           <Typography variant="h6" fontWeight="600" gutterBottom>
//             Applicant Information
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="First Name"
//                 name="A_fname"
//                 variant="standard"
//                 autoComplete=""
//                 style={{width:"90%"}}
//                 value={inputFields.A_fname}
//                 onChange={handleChange}
//                 error={!!errors.A_fname}
//                 helperText={errors.A_fname ? "Fill this first name" : ""}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Last Name"
//                 name="A_lname"
//                 variant="standard"
//                 style={{width:"90%"}}
//                 value={inputFields.A_lname}
//                 onChange={handleChange}
//                 error={!!errors.A_lname}
//                 helperText={errors.A_lname ? "Fill this last name" : ""}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               <DatePicker
//                 label="Date of Birth"
//                 value={inputFields.A_Dob}
//                 onChange={handleDateChange}
//               />
//             </LocalizationProvider>
//             {errors.A_Dob && (
//               <Typography variant="body2" color="error">
//                 {errors.A_Dob}
//               </Typography>
//             )}
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Telephone No."
//                 name="A_telephone"
//                 variant="standard"
//                 style={{width:"90%"}}
//                 value={inputFields.A_telephone}
//                 onChange={handleChange}
//                 error={!!errors.A_telephone}
//                 helperText={errors.A_telephone}
//                 //helperText={errors.A_telephone ? "Fill your telephone No." : ""}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 type="email"
//                 label="Email"
//                 name="email"
//                 variant="standard"
//                 fullWidth
//                 value={inputFields.email}
//                 onChange={handleChange}
//                 error={!!errors.email}
//                 helperText={errors.email ? "Email should be at least 15 characters long" : ""}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="Street No."
//                 name="A_streetNo"
//                 variant="standard"
//                 fullWidth
//                 value={inputFields.A_streetNo}
//                 onChange={handleChange}
//                 error={!!errors.A_streetNo}
//                 helperText={errors.A_streetNo ? "Fill your Street No." : ""}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="Street"
//                 name="A_street"
//                 variant="standard"
//                 fullWidth
//                 value={inputFields.A_street}
//                 onChange={handleChange}
//                 error={!!errors.A_street}
//                 helperText={errors.A_street ? "Fill your Street" : ""}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="City"
//                 name="A_city"
//                 variant="standard"
//                 fullWidth
//                 value={inputFields.A_city}
//                 onChange={handleChange}
//                 error={!!errors.A_city}
//                 helperText={errors.A_city ? "Fill your City" : ""}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Applying for what city"
//                 name="D_city"
//                 variant="standard"
//                 fullWidth
//                 value={inputFields.D_city}
//                 onChange={handleChange}
//                 error={!!errors.D_city}
//                 helperText={errors.D_city ? "Fill your applying city" : ""}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Vehicle year & model"
//                 name="D_vehicle"
//                 variant="standard"
//                 fullWidth
//                 value={inputFields.D_vehicle}
//                 onChange={handleChange}
//                 error={!!errors.D_vehicle}
//                 helperText={errors.D_vehicle ? "Fill your vehicle's year & model " : ""}
//               />
//             </Grid>
//           </Grid>
//           </Paper>
//           <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
//           <Typography variant="h6" fontWeight="600" gutterBottom>
//           Emergency Contact
//           </Typography>
//           <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//           <TextField
//             label="Emergency Contact First Name"
//             name="E_fname"
//             variant="standard"
//             style={{width:"90%"}}
//             value={inputFields.E_fname}
//             onChange={handleChange}
//             error={!!errors.E_fname}
//             helperText={errors.E_fname ? "Fill your emergency contact's first name" : ""}
//           />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//           <TextField
//             label="Emergency Contact Last Name"
//             name="E_lname"
//             variant="standard"
//             style={{width:"90%"}}
//             value={inputFields.E_lname}
//             onChange={handleChange}
//             error={!!errors.E_lname}
//             helperText={errors.E_lname ? "Fill your emergency contact's last name" : ""}
//           />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//           <TextField
//             label="Emergency Contact Telephone No."
//             name="E_telephone"
//             variant="standard"
//             style={{width:"90%"}}
//             value={inputFields.E_telephone}
//             onChange={handleChange}
//             error={!!errors.E_telephone}
//             helperText={errors.E_telephone}
//             //helperText={errors.E_telephone ? "Fill your emergency contact's telephone No." : ""}
//           />
//           </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Relationship"
//             name="E_relation"
//             variant="standard"
//             style={{width:"90%"}}
//             value={inputFields.E_relation}
//             onChange={handleChange}
//             error={!!errors.E_relation}
//             helperText={errors.E_relation ? "Fill your relationship" : ""}
//           />
//           </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Emergency Contact Address"
//             name="E_address"
//             variant="standard"
//             fullWidth
//             value={inputFields.E_address}
//             onChange={handleChange}
//             error={!!errors.E_address}
//             helperText={errors.E_address ? "Fill your emergency contact's address" : ""}
//           />
//           </Grid>
//       </Grid>
//       </Paper>
//       <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
//       <Typography variant="h6"  fontWeight="600" gutterBottom>
//       Driver Questionnaries 
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <TextField
//             label="Are you available to work in other areas? (if yes, enter the areas)"
//             name="D_area"
//             variant="standard"
//             fullWidth
//             value={inputFields.D_area}
//             onChange={handleChange}
//             error={!!errors.D_area}
//             helperText={errors.D_area}
//           />
//           </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="If hired, are you able to submit proof that you are legally eligible for employment?"
//             name="D_document"
//             variant="standard"
//             fullWidth
//             value={inputFields.D_document}
//             onChange={handleChange}
//             error={!!errors.D_document}
//             helperText={errors.D_document}
//           />
//         </Grid>
//       </Grid>
//           {/* <button type="submit">Submit</button> */}
//           <Grid>
//               <FormControl>
//                 <FormControlLabel
//                   control={<MuiCheckbox
//                     name="isPermanent"
//                     color="primary"
//                     sx={{ marginLeft: '20px' }}
//                     checked={isPermanent}
//                     onChange={(e) => setIsPermanent(e.target.checked)}
//                   />}
//                   label="Yes, I confirm all my details are correct"
//                 />
//                 {errors.isPermanent && (
//                     <FormHelperText error sx={{ marginLeft: '20px' }}>
//                     {errors.isPermanent}
//                     </FormHelperText>
//                 )}
//               </FormControl>
//               <Button variant="contained" color="primary" onClick={handleSubmit} sx={{
//                 bgcolor: "#00897b",
//                 marginLeft: '500px',
//                 ":hover": {
//                   bgcolor: "#009688",
//                   color: "#616161",
//                 },
//               }}>
//                 Submit
//               </Button>
//             </Grid>
//           </Paper>
//         </form>
//       </div>
//     </React.Fragment>
//   );
// }
