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
    Paper
} from "@mui/material";
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../../Constants';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function ViewApplicant() {
    const [applicantdata, setApplicantData] = useState({});
    const { applicantid } = useParams();
    const [open2,setopen2] = useState(false);
    // const [open1,setOpen1] = useState(false);
    // const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [loading2,setLoading2] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (applicantid) {
            getApplicantDetailsById(applicantid);
        }
    }, [applicantid]);

    const getApplicantDetailsById = async (applicantid) => {
        try {
            const result = await axios.get(`${BACKEND_URL}/applicant/applicantDetailsById/${applicantid}`);
            //console.log("get"+result.data.message);
            if(result.data.success === 3){
                navigate("/applicant");
            }
            setApplicantData(result.data.message);
        } catch (error) {
            console.log('Error fetching applicant details:', error);
            setApplicantData({});
            // setError("Network error. Please try again.")
            // setOpen1(true);
            toast.warn('Check internet Connection !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(error.message);
        }
    };
    const deleteApplicantPerson = async (applicantid) => {
        setLoading2(true);
        try{
            console.log(applicantid)
            const result = await axios.delete(`${BACKEND_URL}/applicant/applicantPersonDelete/${applicantid}`);
            setLoading2(false);
            if(result.data.success === 200){                   
                toast.success('Successfully Deleted', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    
                    setTimeout(() => {
                        navigate("/applicant");
                    }, 2000);
            }else{
                toast.error('Delete is failed.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    
            }
            setopen2(false);
        }catch(error){
            toast.warn('Check internet Connection !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(error.message);
        }
    };

    const sendRequest = async (applicationId,values) => {
        console.log("Sending request with values:", values);
        console.log(applicationId)
        setLoading(true);
        try {
            const result = await axios.post(`${BACKEND_URL}/applicant/postregistereddata/${applicationId}`, { values });
            console.log(result);
            //navigate("/applicant");

            setLoading(false);
            if(result.data.success === 200){                   
                toast.success('Successfully Selected', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    
                    setTimeout(() => {
                        navigate("/applicant");
                    }, 2000);

                   
            }else{
                toast.error('Confirmation is failed.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        } catch (error) {
            toast.warn('Check internet Connection !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(error.message);
            //setError("Network error. Please try again.")
            //setOpen1(true);
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
                            <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="First Name"
                                        name="A_fname"
                                        value={applicantdata.FirstName || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: { color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Last Name"
                                        name="A_lname"
                                        value={applicantdata.LastName || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Date of Birth"
                                        name="A_Dob"
                                        value={applicantdata.DOB || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Telephone No."
                                        name="A_telephone"
                                        value={applicantdata.MobileNo || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        type="email"
                                        label="Email"
                                        name="email"
                                        value={applicantdata.Email || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Street No."
                                        name="A_streetNo"
                                        value={applicantdata.StreetNo || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: { color:'#696969',fontSize:'17px' },
                                            readOnly: true 
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Street"
                                        name="A_street"
                                        value={applicantdata.Street || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="City"
                                        name="A_city"
                                        value={applicantdata.City || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Branch Location"
                                        name="D_city"
                                        value={applicantdata.BranchLocation || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Vehicle Type"
                                        name="D_vehicle"
                                        value={applicantdata.Vehice_Type || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Vehicle Plate Number"
                                        name="D_vehicle_no"
                                        value={applicantdata.VehicleNo || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Emergency contact's First Name"
                                        name="E_fname"
                                        value={applicantdata.E_FirstName || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Emergency contact's Last Name"
                                        name="E_lname"
                                        value={applicantdata.E_LastNane || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Relationship"
                                        name="E_relationship"
                                        value={applicantdata.E_Relationship || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Emergency contact's Telephone"
                                        name="E_telephone"
                                        value={applicantdata.E_ContactNo || ''}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            sx: {color:'#696969',fontSize:'17px' },
                                            readOnly: true
                                        }}
                                    />
                                </Grid>
                                <Grid container spacing={2}sx={{ mt: 2 }} textAlign="right">
                                    {/* <Grid item={12} md={3}></Grid> */}
                                    {/* <Grid item={12} md={3}></Grid> */}
                                <Grid item
                                    xs={12}
                                    md={3}
                                    style={{ margin: "0 auto", padding: "10px 0px" }}>
                                        {loading2 ? (
                                            <CircularProgress size={30} sx={{color:"#bdbdbd",animationDuration:"1500ms",ml:"100px"}}/>
                                        ): (
                                            <AlertDialog
                                            bgcolor="#bdbdbd"
                                            button="Reject"
                                            icon={DeleteIcon}
                                            title="Confirm Rejection"
                                            text="Are you sure want to delete this Application?"
                                            buttonName1="Cancel"
                                            buttonName2="Delete"
                                            bcolor="#bdbdbd"
                                            hoverbgcolor="#94a3b8"
                                            onClick1={()=>{deleteApplicantPerson(applicantid);
                                                setopen2(false);
                                            }}
                                        />
                                        )}
                                    
                                    </Grid>
                                    <Grid item
                                    xs={12}
                                    md={3}
                                    style={{ margin: "0 auto", padding: "10px 0px" }}>
                                        {loading?( 
                                            <CircularProgress size={30} sx={{color:"#4caf50",animationDuration:"1500ms",ml:"100px"}}/>
                                        ):(
                                    <AlertDialog
                                        bgcolor="#4caf50"
                                        button="Accept"
                                        icon={CheckCircleIcon}
                                        title="Confirm Applicant"
                                        text="Are you sure want to confirm this Application?"
                                        buttonName1="Cancel"
                                        buttonName2="Confirm"
                                        bcolor="#4caf50"
                                        hoverbgcolor="#16a34a"
                                        onClick1={()=>{onclick(applicantid);
                                            setopen2(false);
                                        }}
                                    />
                                    )}
                                </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Box>
            </Box>
            <ToastContainer />
        </Box>
    );
}
