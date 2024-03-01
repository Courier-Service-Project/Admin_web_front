import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from '@mui/icons-material/Apps';
import { Typography } from "@mui/material";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import{
  Card,
  CardContent,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import DropPayment from "../../Components/pending/DropPayment";
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
            <Box sx={{ mx: 3 }}>
              <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                <AppsIcon sx={{ mr: 3 }} />
                OrderID-2141N
              </Typography>
            </Box>
            <Box sx={{ml:4,mr:4,mt:5,mb:5,border:1,borderColor:'black',borderRadius:1}}>
      <Card>
        <CardContent>
          <Box component="form" sx={{m:4}}>
            <FormSubTitle subTitle="Sender Details" />
            <Divider sx={{ marginBottom: 1 }} />
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Sender name"
                  fullWidth
                  required
                  value="Pramuditha Sadeepa"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Sender Address"
                  fullWidth
                  required
                  value="175/3A,wallasmulla Road,Beliatta"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="tel"
                  margin="dense"
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Sender Phone Number"
                  fullWidth
                  required
                  value="0766022618"
                />
              </Grid>
            </Grid>

            <FormSubTitle subTitle="Receiver Details" />
            <Divider sx={{ marginBottom: 1 }} />
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Receiver name"
                  fullWidth
                  required
                  value="Nethupama Shavinda"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Receiver Address"
                  fullWidth
                  required
                  value="100/A,thissa road,hungama"
                />
              </Grid>
              <Grid item xs={3} mr={2}>
                <TextField
                  type="tel"
                  margin="dense"
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Receiver Phone Number"
                  fullWidth
                  required
                  value="0765466324"
                />
              </Grid>
              <Grid item xs={3} mr={2}>
                <DropDistrict />
              </Grid>
              <Grid item xs={3} mr={2}>
                <DropHomeTown />
              </Grid>
            </Grid>

            <FormSubTitle subTitle="Pickup Details" />
            <Divider sx={{ marginBottom: 1 }} />

            <Grid container>
              <Grid xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  label="Address"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Pickup Address"
                  fullWidth
                  required
                  value="100/A,thissa Road,Hungama"
                />
              </Grid>
              <Grid xs={3} mr={2}>
                <DropDistrict />
              </Grid>
              <Grid xs={3} mr={2}>
                <TextField
                  type="tel"
                  margin="dense"
                  label="Telephone"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Pickup Phone Number"
                  fullWidth
                  required
                  value="0765466324"
                />
              </Grid>
              <Grid xs={3}>
                <DropDistrict />
              </Grid>
              <Grid xs={4} mr={2}>
                <DropPayment />
              </Grid>
              <Grid xs={3} mr={3}>
                <DropVehical />
              </Grid>
              <Grid>
                <TextField
                  type="text"
                  margin="dense"
                  label="Message"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Specical Note"
                  fullWidth
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  type="text"
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Description About Order"
                  fullWidth
                  required
                  value="Quick Dilivary"
                />
              </Grid>
              <Grid xs={4} style={{ margin: "0 auto",padding:"0 20px"}}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ margin: "30px 0 10px 0 " }}
                  variant="contained"
                  color="success"
                >
                  Create Order
                </Button>
              </Grid>

              <Grid xs={4} style={{ margin: "0 auto" ,padding:"0 20px"}}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ margin: "30px 0 10px 0 ",Color:"black"}}
                  variant="contained"
                  
                >
                  Edit Order
                </Button>
              </Grid>

              <Grid xs={4} style={{ margin: "0 auto",padding:"0 20px" }}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ margin: "30px 0 10px 0 " }}
                  variant="contained"
                  color="warning"
                >
                  Delete Order
                </Button>
              </Grid>
             

            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  
          </Box>
        </Box>
      </Box>
  
    );
}
