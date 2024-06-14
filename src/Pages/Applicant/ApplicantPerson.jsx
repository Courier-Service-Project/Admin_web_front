import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from '@mui/icons-material/Apps';
import { Typography } from "@mui/material";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import{ TextField,
        Paper,
        Button
} from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import DropDistrict from "../../Components/pending/DropDistrict";
import DropHomeTown from "../../Components/pending/DropHomeTown";
import DropVehical from "../../Components/pending/DropVehicle";




export default function ViewOrder() {
  return (
    <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh"}}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
        <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
                <Box sx={{ mx: 4 }}>
                <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                <AppsIcon sx={{ mr: 3 }} />
                    Applicant ID - 
                </Typography>
            </Box>
            <Box component="form" sx={{m:4}}>
            <form>
                <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                        Applicant Information
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                name="A_fname"
                                variant="standard"
                                autoComplete=""
                                style={{width:"90%"}}
                                // value={inputFields.A_fname}
                                // onChange={handleChange}
                                // error={!!errors.A_fname}
                                // helperText={errors.A_fname ? "Fill this first name" : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                name="A_lname"
                                variant="standard"
                                style={{width:"90%"}}
                                // value={inputFields.A_lname}
                                // onChange={handleChange}
                                // error={!!errors.A_lname}
                                // helperText={errors.A_lname ? "Fill this last name" : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                    label="Date of Birth"
                                    name="A_Dob"
                                    variant="standard"
                                    style={{width:"90%"}}
                                    // value={inputFields.A_telephone}
                                    // onChange={handleChange}
                                    // error={!!errors.A_telephone}
                                    // helperText={errors.A_telephone ? "Fill your telephone No." : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Telephone No."
                                name="A_telephone"
                                variant="standard"
                                style={{width:"90%"}}
                                // value={inputFields.A_telephone}
                                // onChange={handleChange}
                                // error={!!errors.A_telephone}
                                // helperText={errors.A_telephone ? "Fill your telephone No." : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Email"
                                name="email"
                                variant="standard"
                                fullWidth
                                // value={inputFields.email}
                                // onChange={handleChange}
                                // error={!!errors.email}
                                // helperText={errors.email ? "Email should be at least 15 characters long" : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                name="A_address"
                                variant="standard"
                                fullWidth
                                // value={inputFields.A_address}
                                // onChange={handleChange}
                                // error={!!errors.A_address}
                                // helperText={errors.A_address ? "Fill your address" : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="State/Province"
                                name="A_state"
                                variant="standard"
                                fullWidth
                                // value={inputFields.A_state}
                                // onChange={handleChange}
                                // error={!!errors.A_state}
                                // helperText={errors.A_state ? "Fill your province" : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="City"
                                name="A_city"
                                variant="standard"
                                fullWidth
                                // value={inputFields.A_city}
                                // onChange={handleChange}
                                // error={!!errors.A_city}
                                // helperText={errors.A_city ? "Fill your city" : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Postal/Zip Code"
                                name="A_postalcode"
                                variant="standard"
                                fullWidth
                                // value={inputFields.A_postalcode}
                                // onChange={handleChange}
                                // error={!!errors.A_postalcode}
                                // helperText={errors.A_postalcode ? "Fill your Postal Code / Zip code" : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Applying for what city"
                                name="D_city"
                                variant="standard"
                                fullWidth
                                // value={inputFields.D_city}
                                // onChange={handleChange}
                                // error={!!errors.D_city}
                                // helperText={errors.D_city ? "Fill your applying city" : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Vehicle year & model"
                                name="D_vehicle"
                                variant="standard"
                                fullWidth
                                // value={inputFields.D_vehicle}
                                // onChange={handleChange}
                                // error={!!errors.D_vehicle}
                                // helperText={errors.D_vehicle ? "Fill your vehicle's year & model " : ""}
                            />
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                        Emergency Contact
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Emergency Contact First Name"
                                name="E_fname"
                                variant="standard"
                                style={{width:"90%"}}
                                // value={inputFields.E_fname}
                                // onChange={handleChange}
                                // error={!!errors.E_fname}
                                // helperText={errors.E_fname ? "Fill your emergency contact's first name" : ""}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                label="Emergency Contact Last Name"
                                name="E_lname"
                                variant="standard"
                                style={{width:"90%"}}
                                // value={inputFields.E_lname}
                                // onChange={handleChange}
                                // error={!!errors.E_lname}
                                // helperText={errors.E_lname ? "Fill your emergency contact's last name" : ""}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                label="Emergency Contact Telephone No."
                                name="E_telephone"
                                variant="standard"
                                style={{width:"90%"}}
                                // value={inputFields.E_telephone}
                                // onChange={handleChange}
                                // error={!!errors.E_telephone}
                                // helperText={errors.E_telephone ? "Fill your emergency contact's telephone No." : ""}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                label="Relationship"
                                name="E_relation"
                                variant="standard"
                                style={{width:"90%"}}
                                // value={inputFields.E_relation}
                                // onChange={handleChange}
                                // error={!!errors.E_relation}
                                // helperText={errors.E_relation ? "Fill your relationship" : ""}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                label="Emergency Contact Address"
                                name="E_address"
                                variant="standard"
                                fullWidth
                                // value={inputFields.E_address}
                                // onChange={handleChange}
                                // error={!!errors.E_address}
                                // helperText={errors.E_address ? "Fill your emergency contact's address" : ""}
                            />
                            </Grid>
                        </Grid>
                        </Paper>
                        <Paper style={{padding: '50px', marginBottom : "10px", marginTop: "10px"}}>
                        <Typography variant="h6"  fontWeight="600" gutterBottom>
                        Driver Questionnaries 
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <TextField
                                label="Are you available to work in other areas? (if yes, enter the areas)"
                                name="D_area"
                                variant="standard"
                                fullWidth
                                // value={inputFields.D_area}
                                // onChange={handleChange}
                                // error={!!errors.D_area}
                                // helperText={errors.D_area}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                label="If hired, are you able to submit proof that you are legally eligible for employment?"
                                name="D_document"
                                variant="standard"
                                fullWidth
                                // value={inputFields.D_document}
                                // onChange={handleChange}
                                // error={!!errors.D_document}
                                // helperText={errors.D_document}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary" sx={{
                                bgcolor: "#cc473b",
                                marginTop: '10px',
                                marginLeft: '50px',
                                ":hover": {
                                bgcolor: "#d2554d",
                                color: "#616161",
                                },
                            }}>
                                Reject
                            </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary" sx={{
                                bgcolor: "#00897b",
                                marginTop: '10px',
                                marginLeft: '200px',
                                ":hover": {
                                bgcolor: "#009688",
                                color: "#616161",
                                },
                            }}>
                                Accept
                            </Button>
                            </Grid>
                        </Grid>
            {/* <button type="submit">Submit</button> */}
                        {/* <Grid>
                            <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary" sx={{
                                bgcolor: "#00897b",
                                marginTop: '10px',
                                
                                ":hover": {
                                bgcolor: "#009688",
                                color: "#616161",
                                },
                            }}>
                                Reject
                            </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary" sx={{
                                bgcolor: "#00897b",
                                marginTop: '10px',
                                
                                ":hover": {
                                bgcolor: "#009688",
                                color: "#616161",
                                },
                            }}>
                                Accept
                            </Button>
                            </Grid>
                        </Grid> */}
                        </Paper>
            </form>
        
            </Box>
        </Box>
  
        </Box>
    </Box>
  
    );
}
