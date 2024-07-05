// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import AppsIcon from '@mui/icons-material/Apps';
// import { Typography } from "@mui/material";
// import Sidenav from "../../Components/Structure/Sidenav";
// import Navbar from "../../Components/Structure/Navbar";
// import AlertDialog from "../../Components/Alert/AlertDialod";
// import {
//     TextField,
//     Paper,
//     Button
// } from "@mui/material";
// import axios from 'axios';
// import { useLocation, useParams,useNavigate } from "react-router-dom";
// import { BACKEND_URL } from '../../Constants';
// import RetryModal from "../../Components/Alert/RetryModal";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import DeleteIcon from "@mui/icons-material/Delete";


// export default function ViewAdmin() {
//     const [admindata, setAdminData] = useState({});
//     const { admin_Id } = useParams();
//     const [open,setOpen] = useState(false);
//     const [open1,setOpen1] = useState(false);
//     const [error,setError] = useState(null);
//     const navigate = useNavigate();


//     useEffect(() => {
//         if (admin_Id) {
//             getAdminDetailsById(admin_Id);
//         }
//     }, [admin_Id]);

//     const getAdminDetailsById = async (admin_Id) => {
//         try {
//             const result = await axios.get(`${BACKEND_URL}/applicant/adminDataById/${admin_Id}`);
//             console.log(result.data.message);
//             setAdminData(result.data.message);
//         } catch (error) {
//             console.log('Error fetching applicant details:', error);
//             setAdminData({});
//             setError("Network error. Please try again.")
//             setOpen1(true);
//         }
//     };


//     const deleteAdminData = async(admin_Id)=> {
//         try {
//             const result = await axios.delete(`${BACKEND_URL}/applicant/adminDataDelete/${admin_Id}`);
//             console.log(result)
//             navigate("/adminApplicant");
//             setOpen(false)
//         }catch(error){
//             setError("Network error. Please try again.")
//             setOpen1(true);
//         }
//     }

//     const updateAdminStatus = async(admin_Id) =>{
//         try{
//             const result = await axios.patch(`${BACKEND_URL}/applicant/updateAdminStatus/${admin_Id}`);
//             navigate("/adminApplicant");
//             setOpen(false)
//         }catch(error){
//             setError("Network error. Please try again.")
//             setOpen1(true);
//         }
//     }
//     const handleClose = () =>{
//         setOpen1(false);
//     };

//     const handleTryAgain = () =>{
//         window.location.reload();
//     }
    


//     return (
//         <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh" }}>
//             <Navbar />
//             <Box height={75} />
//             <Box sx={{ display: "flex" }}>
//                 <Sidenav />
//                 <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}>
//                     <Box sx={{ mx: 4 }}>
//                         <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
//                             <AppsIcon sx={{ mr: 3 }} />
//                             Admin ID - {admindata.admin_Id}
//                         </Typography>
//                     </Box>
//                     <Box component="form" sx={{ m: 4 }}>
//                         <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
//                             <Grid container spacing={2} >
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         name="N_fname"
//                                         label="First Name"
//                                         value={admindata.FirstName || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         name="N_lname"
//                                         label="Last Name"
//                                         value={admindata.LastName || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} ></Grid>
//                                 <Grid item xs={12} sm={4}>
//                                     <TextField
//                                         name="N_email"
//                                         label="Email"
//                                         value={admindata.Email || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} ></Grid>
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         name="N_telephone"
//                                         label="Telephone No."
//                                         value={admindata.Tele || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} ></Grid>
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         name="N_dob"
//                                         label="Date 0f Birth"
//                                         value={admindata.DOB || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                     </Grid>
//                                 <Grid item xs={12} ></Grid>
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         name="N_streetNo"
//                                         label="Street No."
//                                         value={admindata.Street_No || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         name="N_street"
//                                         label="Street"
//                                         value={admindata.Street || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         name="N_city"
//                                         label="City"
//                                         value={admindata.City || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} ></Grid>
//                                 <Grid item xs={12} sm={3}>
//                                     <TextField
//                                         label="Admin Type"
//                                         name="N_admin"
//                                         value={admindata.type || ""}
//                                         variant="standard"
//                                         fullWidth
//                                         InputProps={{
//                                             readOnly: true,
//                                             sx: {color:'#696969',fontSize:'17px' },
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid container spacing={2}sx={{ mt: 2 }} textAlign="right">
//                                     {/* <Grid item={12} md={3}></Grid> */}
//                                     {/* <Grid item={12} md={3}></Grid> */}
//                                 <Grid item
//                                     xs={12}
//                                     md={3}
//                                     style={{ margin: "0 auto", padding: "10px 0px" }}>
                                
//                                     <AlertDialog
//                                         bgcolor="#bdbdbd"
//                                         button="Reject"
//                                         icon={DeleteIcon}
//                                         title="Confirm Rejection"
//                                         text="Are you sure want to delete this Application?"
//                                         buttonName1="Cancel"
//                                         buttonName2="Delete"
//                                         bcolor="#bdbdbd"
//                                         hoverbgcolor="#94a3b8"
//                                         onClick1={()=>{deleteAdminData(admin_Id)}}
//                                     />
//                                     </Grid>
//                                     <Grid item
//                                     xs={12}
//                                     md={3}
//                                     style={{ margin: "0 auto", padding: "10px 0px" }}>
                                
                                
//                                     <AlertDialog
//                                         bgcolor="#4caf50"
//                                         button="Accept"
//                                         icon={CheckCircleIcon}
//                                         title="Confirm Applicant"
//                                         text="Are you sure want to confirm this Application?"
//                                         buttonName1="Cancel"
//                                         buttonName2="Confirm"
//                                         bcolor="#4caf50"
//                                         hoverbgcolor="#16a34a"
//                                         onClick1={()=>{updateAdminStatus(admin_Id)}}
//                                     />
                                
//                                 </Grid>
//                                 </Grid>
//                             </Grid>
//                         </Paper>
//                     </Box>
//                 </Box>

//                 <RetryModal
//                 open={open1}
//                 onClose={handleClose}
//                 error={error}
//                 onclick1={handleTryAgain}
//                 />

                
//             </Box>
//         </Box>
//     );
// }


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
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../../Constants';
import RetryModal from "../../Components/Alert/RetryModal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";


export default function ViewAdmin() {
    const [admindata, setAdminData] = useState({});
    const { admin_Id } = useParams();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        if (admin_Id) {
            getAdminDetailsById(admin_Id);
        }
    }, [admin_Id]);

    const getAdminDetailsById = async (admin_Id) => {
        try {
            const result = await axios.get(`${BACKEND_URL}/applicant/adminDataById/${admin_Id}`);
            setAdminData(result.data.message);
        } catch (error) {
            setAdminData({});
            setError("Network error. Please try again.");
            setOpen1(true);
        }
    };

    const deleteAdminData = async (admin_Id) => {
        try {
            await axios.delete(`${BACKEND_URL}/applicant/adminDataDelete/${admin_Id}`);
            navigate("/adminApplicant");
        } catch (error) {
            setError("Network error. Please try again.");
            setOpen1(true);
        }
    };

    const updateAdminStatus = async (admin_Id) => {
        try {
            const result = await axios.patch(`${BACKEND_URL}/applicant/updateAdminStatus/${admin_Id}`);
            if (result.data.success === 200) {
                navigate("/adminApplicant");
            } else {
                setError("Failed to update status. Please try again.");
                setOpen1(true);
            }
        } catch (error) {
            setError("Network error. Please try again.");
            setOpen1(true);
        }
    };

    const handleClose = () => {
        setOpen1(false);
    };

    const handleTryAgain = () => {
        window.location.reload();
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
                            Admin ID - {admindata.admin_Id}
                        </Typography>
                    </Box>
                    <Box component="form" sx={{ m: 4 }}>
                        <Paper style={{ padding: '50px', marginBottom: "10px", marginTop: "10px" }}>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        name="N_fname"
                                        label="First Name"
                                        value={admindata.FirstName || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        name="N_lname"
                                        label="Last Name"
                                        value={admindata.LastName || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} ></Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        name="N_email"
                                        label="Email"
                                        value={admindata.Email || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} ></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        name="N_telephone"
                                        label="Telephone No."
                                        value={admindata.Tele || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} ></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        name="N_dob"
                                        label="Date 0f Birth"
                                        value={admindata.DOB || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} ></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        name="N_streetNo"
                                        label="Street No."
                                        value={admindata.Street_No || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        name="N_street"
                                        label="Street"
                                        value={admindata.Street || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        name="N_city"
                                        label="City"
                                        value={admindata.City || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} ></Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        label="Admin Type"
                                        name="N_admin"
                                        value={admindata.type || ""}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                            sx: { color: '#696969', fontSize: '17px' },
                                        }}
                                    />
                                </Grid>
                                <Grid container spacing={2} sx={{ mt: 2 }} textAlign="right">
                                    <Grid item
                                        xs={12}
                                        md={3}
                                        style={{ margin: "0 auto", padding: "10px 0px" }}>
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
                                            onClick1={() => { deleteAdminData(admin_Id) }}
                                        />
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        md={3}
                                        style={{ margin: "0 auto", padding: "10px 0px" }}>
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
                                            onClick1={() => { updateAdminStatus(admin_Id) }}
                                        />
                                    </Grid>
                                </Grid>
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
