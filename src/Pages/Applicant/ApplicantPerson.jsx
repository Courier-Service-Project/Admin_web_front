import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from '@mui/icons-material/Apps';
import { Typography } from "@mui/material";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import AlertDialog from "../../Components/Alert/AlertDialod";
import {
    TextField,
    Paper,
    Button
} from "@mui/material";
import axios from 'axios';
import { useLocation, useParams,useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../../Constants';
import RetryModal from "../../Components/Alert/RetryModal";

export default function ViewApplicant() {
    const [applicantdata, setApplicantData] = useState({});
    const { applicantid } = useParams();
    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    const [error,setError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        if (applicantid) {
            getApplicantDetailsById(applicantid);
        }
    }, [applicantid]);

    const getApplicantDetailsById = async (applicantid) => {
        try {
            const result = await axios.get(`${BACKEND_URL}/applicant/applicantDetailsById/${applicantid}`);
            console.log(result.data.message);
            setApplicantData(result.data.message);
        } catch (error) {
            console.log('Error fetching applicant details:', error);
            setApplicantData({});
            setError("Network error. Please try again.")
            setOpen1(true);
        }
    };

    const deleteApplicantPerson = async (applicantid) => {
        try{
            console.log(applicantid)
            const result = await axios.delete(`${BACKEND_URL}/applicant/applicantPersonDelete/${applicantid}`);
            console.log(result);
            console.log("delete...");
            navigate("/applicant");
            setOpen(false);
        }catch(error){
            console.log(error);
            setError("Network error. Please try again.")
            setOpen1(true);
        }
    };

    const sendRequest = async (applicationId,values) => {
        console.log("Sending request with values:", values);
        console.log(applicationId)
        try {
            const result = await axios.post(`${BACKEND_URL}/applicant/postregistereddata/${applicationId}`, { values });
            console.log(result);
            navigate("/applicant");
        } catch (error) {
            console.log(error.message);
            setError("Network error. Please try again.")
            setOpen1(true);
        }
    };
    
    const onclick = (applicationId) => {
        // Prepare the data to send
        const values = {
            BranchLocation: applicantdata.BranchLocation,
            City: applicantdata.City,
            DOB: applicantdata.DOB,
            E_ContactNo: applicantdata.E_ContactNo,
            E_FirstName: applicantdata.E_FirstName,
            E_LastName: applicantdata.E_LastNane,
            E_Relationship: applicantdata.E_Relationship,
            Email: applicantdata.Email,
            FirstName: applicantdata.FirstName,
            LastName: applicantdata.LastName,
            StreetNo: applicantdata.StreetNo,
            Street: applicantdata.Street,
            MobileNo: applicantdata.MobileNo,
            Vehice_Type: applicantdata.Vehice_Type,
            VehicleNo: applicantdata.VehicleNo
            // ApplicantId:applicantdata.id
        };
        sendRequest(applicationId,values);
    };

    const handleClose = () =>{
        setOpen1(false);
    };

    const handleTryAgain = () =>{
        window.location.reload();
    }
    


    return (
        <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh" }}>
            <Navbar />
            <Box height={75} />
            <Box sx={{ display: "flex" }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
                    <Box sx={{ mx: 4 }}>
                        <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                            <AppsIcon sx={{ mr: 3 }} />
                            Applicant ID - {applicantdata.id}
                        </Typography>
                    </Box>
                    <Box component="form" sx={{ m: 4 }}>
                        <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                Applicant Information
                            </Typography>
                            <Grid container spacing={3} columnSpacing={5}>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        label="First Name"
                                        name="A_fname"
                                        value={applicantdata.FirstName || ''}
                                        variant="standard"
                                        style={{ width: "250px" }}
                                        InputProps={{
                                            sx: { color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, FirstName: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        label="Last Name"
                                        name="A_lname"
                                        value={applicantdata.LastName || ''}
                                        variant="standard"
                                        style={{ width: "250px" }}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, LastName: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Date of Birth"
                                        name="A_Dob"
                                        value={applicantdata.DOB || ''}
                                        variant="standard"
                                        style={{ width: "250px" }}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, DOB: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Telephone No."
                                        name="A_telephone"
                                        value={applicantdata.MobileNo || ''}
                                        variant="standard"
                                        style={{ width: "250px" }}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, MobileNo: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        label="Email"
                                        name="email"
                                        value={applicantdata.Email || ''}
                                        variant="standard"
                                        style={{ width: "50%" }}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, Email: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="Street No."
                                        name="A_streetNo"
                                        value={applicantdata.StreetNo || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: { color:'#696969',fontSize:'17px' } 
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, StreetNo: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="Street"
                                        name="A_street"
                                        value={applicantdata.Street || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, Street: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="City"
                                        name="A_city"
                                        value={applicantdata.City || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, City: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="Applying for what city"
                                        name="D_city"
                                        value={applicantdata.BranchLocation || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, BranchLocation: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        label="Vehicle Type"
                                        name="D_vehicle"
                                        value={applicantdata.Vehice_Type || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, Vehicle_Type: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Vehicle Plate Number"
                                        name="D_vehicle_no"
                                        value={applicantdata.VehicleNo || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, VehicleNo: e.target.value })}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                Emergency Contact Information
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        label="First Name"
                                        name="E_fname"
                                        value={applicantdata.E_FirstName || ''}

                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, E_FirstName: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        label="Last Name"
                                        name="E_lname"
                                        value={applicantdata.E_LastNane || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Relationship"
                                        name="E_relationship"
                                        value={applicantdata.E_Relationship || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, E_Relationship: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        bgcolor="success"
                                        label="Telephone"
                                        name="E_telephone"
                                        value={applicantdata.E_ContactNo || ''}
                                        variant="standard"
                                        style={{width:"250px"}}
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' }
                                        }}
                                        //onChange={e => setApplicantData({ ...applicantdata, E_ContactNo: e.target.value })}
                                    />
                                </Grid>
                                {/* <Grid> */}
                                <Box>
                                
                                    <AlertDialog
                                        bgcolor="error"
                                        button="Reject"
                                        title="Confirm Rejection"
                                        text="Are you sure want to delete this Application?"
                                        buttonName1="Cancel"
                                        buttonName2="Delete"
                                        onClick1={()=>{deleteApplicantPerson(applicantid)}}
                                    />
                                
                                
                                    <AlertDialog
                                        bgcolor="success"
                                        button="Accept"
                                        title="Confirm Applicant"
                                        text="Are you sure want to confirm this Application?"
                                        buttonName1="Cancel"
                                        buttonName2="Confirm"
                                        onClick1={()=>{onclick(applicantid)}}
                                    />
                                
                                </Box>
                                {/* </Grid> */}
                            </Grid>
                        </Paper>
                    </Box>
                </Box>

                <RetryModal
                open={open1}
                onClose={handleClose}
                error={error}
                onclick1={handleTryAgain}
                />

                
            </Box>
        </Box>
    );
}
