import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import {Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import axios from "axios";
import { Card, CardContent, Divider, Button } from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import { BACKEND_URL } from "../../Constants";
import SaveIcon from '@mui/icons-material/Save';
import BranchTable1 from "../../Components/Createbranch/BranchTable";

export default function BranchDetails() {

   const [fromData, setFormData] = React.useState({
      B_location:"",
      B_district:"",
      B_province:"",
    });

  const sendSave = async () => {

    axios
      .post(`${BACKEND_URL}/orders/createNewBranch`,{
         br_location:fromData.B_location,
         br_district:fromData.B_district,
         br_province:fromData.B_province,
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
                      Create Branch
                    </div>
                </Typography>
              </Box>
              <Box sx={{ ml: 4, mr: 4, mt: 5, mb: 5 }}>
                <Card
                  sx={{
                    boxShadow:1,
                    border: "0.1px solid grey",
                  }}
                >
                  <CardContent>
                    <Box component="form" sx={{ m: 4 }}>
                      <FormSubTitle subTitle="Branch Details" />
                      <Divider sx={{ marginBottom: 1, border: 1 }} />
                      <Grid container spacing={4} sx={{ mt: 3 }}>
                        
  
                        <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            name="B_location"
                            label="Location"
                            fullWidth
                            autoComplete="off"
                            variant="standard"
                            value={fromData.B_location}
                            onChange={(event)=>setFormData({...fromData,B_location:event.target.value})}
                          />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            name="B_district"
                            label="District"
                            fullWidth
                            autoComplete="off"
                            variant="standard"
                            value={fromData.B_district}
                            onChange={(event)=>setFormData({...fromData,B_district:event.target.value})}
                          />
                        </Grid>

                        <Grid item xs={12} sm={4}></Grid>

                        <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            name="B_province"
                            label="Province"
                            fullWidth
                            autoComplete="off"
                            variant="standard"
                            value={fromData.B_province}
                            onChange={(event)=>setFormData({...fromData,B_province:event.target.value})}
                          />
                        </Grid>

                        <Grid container justifyContent="flex-end">
                        <Grid item xs={12} md={3}>
                        <Button
                           fullWidth
                           size="large"
                           style={{backgroundColor:"#0288d1"}}
                           sx={{ margin: "30px 0 10px 0", borderRadius: "50px", gap:"15px" }}
                           variant="contained"
                           onClick={sendSave}
                           >
                          <SaveIcon/>
                            Save
                        </Button>
                      </Grid>
                      </Grid>
                    </Grid>
  
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ mx: 4 }}>
                <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                    <div>
                      <AppsIcon sx={{ mr: 3 }} />
                      Branch Details
                    </div>
                </Typography>
              </Box>
            
            <BranchTable1/>

            </Box>
          </Box>
        </Box>
      </React.Fragment>
    );
  }