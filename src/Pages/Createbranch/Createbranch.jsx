import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import axios from "axios";
import { Card, CardContent, Divider, Button } from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import { BACKEND_URL, ID } from "../../Constants/index";
import SaveIcon from "@mui/icons-material/Save";
import BranchTable1 from "../../Components/Createbranch/BranchTable";
import Autocomplete from "@mui/material/Autocomplete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { branchValidation } from "../../Validation/Validation.js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BranchDetails() {
  const [openA, setOpenA] = React.useState(false);
  const [create, setCreate] = useState(true);
  const [open, setOpen] = React.useState(null);
  const [existingLocations, setExistingLocations] = useState([]);

  const handleClose = () => {
    setOpenA(false);
  };

  // const District = ["Hambantota", "Mathara", "Galle", "Colombo", "Gampaha"];
  // const Province = [
  //   "Central",
  //   "Eastern",
  //   "North Central",
  //   "Northern",
  //   "North Western",
  //   "Sabaragamuwa",
  //   "Southern",
  //   "Uva",
  //   "Western",
  // ];

  const [fromData, setFormData] = React.useState({
    B_location: "",
    B_district: "",
    B_province: "",
  });

  useEffect(() => {
    const fetchExistingLocations = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/branch/`);
        if (response.data.success === 1) {
          setExistingLocations(response.data.Data);
        } else {
          console.error(
            "Error fetching existing locations:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching existing locations:", error);
      }
    };
    fetchExistingLocations();
  }, []);

  const [filteredDistricts, setFilteredDistricts] = useState([]);

  useEffect(() => {
    if (fromData.B_province) {
      setFilteredDistricts(provinceDistrictMap[fromData.B_province] || []);
    }
  }, [fromData.B_province]);
  

  const provinceDistrictMap = {
    Central: ["Kandy", "Matale", "Nuwara Eliya"],
    Eastern: ["Ampara", "Batticaloa", "Trincomalee"],
    NorthCentral: ["Anuradhapura", "Polonnaruwa"],
    Northern: ["Jaffna", "Kilinochchi", "Mannar", "Mullaitivu", "Vavuniya"],
    NorthWestern: ["Kurunegala", "Puttalam"],
    Sabaragamuwa: ["Kegalle", "Ratnapura"],
    Southern: ["Galle", "Matara", "Hambantota"],
    Uva: ["Badulla", "Monaragala"],
    Western: ["Colombo", "Gampaha", "Kalutara"],
  };

  const Province = Object.keys(provinceDistrictMap);

  const sendSave = async () => {
    const data = branchValidation(
      fromData.B_province,
      fromData.B_district,
      fromData.B_location,
      existingLocations
    );
    if (data) {
      setOpen(data.Error);
    } else {
      setOpenA(true);
    }
  };

  const comsendsave = async () => {
    setOpenA(false);

    try {
      // const accessToken = localStorage.getItem("accessToken");
      const result = await axios.post(
        `${BACKEND_URL}/branch/createNewBranch`,
        {
          br_location: fromData.B_location,
          br_district: fromData.B_district,
          br_province: fromData.B_province,
        }
        // ,{
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // }
      );
      if (result.status === 200) {
        toast.success("Branch Successfully Created", {
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
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      toast.error("Branch Creation Failed", {
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
  };

  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     window.location.reload();
  //   }
  // };

  const openbranch = async () => {
    setCreate(false);
  };
  const closebranch = async () => {
    setCreate(true);
  };

  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh" }}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}
          >
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                <div>
                  <AppsIcon sx={{ mr: 3 }} />
                  Branch Details
                </div>
              </Typography>
            </Box>

            {create ? (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  size="large"
                  onClick={openbranch}
                  // disabled={Hide}
                  variant="contained"
                  sx={{
                    margin: "20px 50px 20px 70px",
                    bgcolor: "#00897b",
                    ":hover": {
                      bgcolor: "#4db6ac",
                      color: "#fff",
                    },
                  }}
                  startIcon={<AddCircleOutlineIcon style={{ fontSize: 20 }} />}
                >
                  <Typography sx={{ fontSize: 13 }}>Create Branch</Typography>
                </Button>
              </Box>
            ) : (
              <Box sx={{ ml: 4, mr: 4, mt: 5, mb: 5 }}>
                <Card
                  sx={{
                    boxShadow: 1,
                    border: "0.1px solid grey",
                  }}
                >
                  <CardContent>
                    <Box component="form" sx={{ m: 2 }}>
                      <FormSubTitle subTitle=" Add Branch Details" />
                      <Divider sx={{ border: 1, width: "90%" }} />
                      <Grid container spacing={3} sx={{ mt: 0.1 }}>
                        <Grid item xs={12} md={3}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={Province}
                            value={fromData.B_province}
                            onChange={(event, value) =>
                              setFormData({ ...fromData, B_province: value })
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                required
                                name="B_province"
                                label="Province"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={filteredDistricts}
                            value={fromData.B_district}
                            onChange={(event, value) =>
                              setFormData({ ...fromData, B_district: value })
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                required
                                name="B_district"
                                label="District"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            required
                            name="B_location"
                            label="Location"
                            fullWidth
                            autoComplete="off"
                            variant="standard"
                            value={fromData.B_location}
                            onChange={(event) =>
                              setFormData({
                                ...fromData,
                                B_location: event.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Box sx={{ width: "100%", mt: 2, ml: 2 }}>
                          <Collapse in={open}>
                            <Alert
                              severity="error"
                              action={
                                <IconButton
                                  aria-label="close"
                                  color="inherit"
                                  size="small"
                                  onClick={() => {
                                    setOpen(false);
                                  }}
                                >
                                  <CloseIcon fontSize="inherit" />
                                </IconButton>
                              }
                              sx={{ mb: 2 }}
                            >
                              {open}
                            </Alert>
                          </Collapse>
                        </Box>

                        <Grid container justifyContent="flex-end">
                          <Grid>
                            <Button
                              size="medium"
                              onClick={closebranch}
                              variant="contained"
                              sx={{
                                mt: 1,
                                ml: 1,
                                // margin: "50px 90px 20px 0px",
                                bgcolor: "#00897b",
                                ":hover": {
                                  bgcolor: "#4db6ac",
                                  color: "#fff",
                                },
                              }}
                              startIcon={
                                <HighlightOffIcon style={{ fontSize: 20 }} />
                              }
                            >
                              <Typography sx={{ fontSize: 13 }}>
                                Close
                              </Typography>
                            </Button>

                            <Button
                              size="medium"
                              onClick={sendSave}
                              variant="contained"
                              sx={{
                                mt: 1,
                                ml: 1,
                                // margin: "50px 50px 20px 70px",
                                bgcolor: "#00897b",
                                ":hover": {
                                  bgcolor: "#4db6ac",
                                  color: "#fff",
                                },
                              }}
                              startIcon={<SaveIcon style={{ fontSize: 20 }} />}
                            >
                              <Typography sx={{ fontSize: 13 }}>
                                Save
                              </Typography>
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
                <Dialog
                  open={openA}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  sx={{
                    "& .MuiDialog-paper": {
                      width: "500px",
                      maxWidth: "none",
                      padding: "10px",
                    },
                  }}
                >
                  <DialogTitle id="alert-dialog-title">
                    Create Branch
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to Create this change?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} sx={{ color: "black" }}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#00897b" }}
                      onClick={comsendsave}
                      autoFocus
                    >
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            )}
            <BranchTable1 />
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </React.Fragment>
  );
}
