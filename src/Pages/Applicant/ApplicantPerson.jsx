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

export default function ViewApplicant() {
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                name="A_lname"
                                variant="standard"
                                style={{width:"90%"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                    label="Date of Birth"
                                    name="A_Dob"
                                    variant="standard"
                                    style={{width:"90%"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Telephone No."
                                name="A_telephone"
                                variant="standard"
                                style={{width:"90%"}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Email"
                                name="email"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Street No."
                                name="A_streetNo"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Street"
                                name="A_street"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="City"
                                name="A_city"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Applying for what city"
                                name="D_city"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Vehicle year & model"
                                name="D_vehicle"
                                variant="standard"
                                fullWidth
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
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                label="Emergency Contact Last Name"
                                name="E_lname"
                                variant="standard"
                                style={{width:"90%"}}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                label="Emergency Contact Telephone No."
                                name="E_telephone"
                                variant="standard"
                                style={{width:"90%"}}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                label="Relationship"
                                name="E_relation"
                                variant="standard"
                                style={{width:"90%"}}
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
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                label="If hired, are you able to submit proof that you are legally eligible for employment?"
                                name="D_document"
                                variant="standard"
                                fullWidth
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
                        </Paper>
            </form>
        
            </Box>
        </Box>
  
        </Box>
    </Box>
  
    );
}
