import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function PickupDetails({fromData,setFormData}) {
  const District = ['Hambantota', 'Mathara','Colombo', 'Gampaha'];
  const branch = ['Galle', 'Matara'];
  const Payment = ['Online', 'Sender','Receiver'];
  const Vehical = ['Car', 'Bike','Mathara', 'Three-Wheel'];
  const status = ['Immergency', 'Normal'];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pickup Details
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={3}>
          <TextField
 
            name="P_streetNo"
            label="StreetNo"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_streetNo}
            onChange={(event)=>setFormData({...fromData,P_streetNo:event.target.value})}
          />
        </Grid>
      <Grid item xs={3}>
          <TextField

            name="P_street"
            label="Street"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_street}
            onChange={(event)=>setFormData({...fromData,P_street:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={branch}
            onChange={(event, value) => setFormData({ ...fromData, P_homeTown:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
              name="P_homeTown"
              label="Home Town"
              fullWidth
              variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
        {/* empty */}
        </Grid>    
      <Grid item xs={3}>
      <Autocomplete
            disablePortal
            options={branch}
            value={fromData.P_branch}
            onChange={(event, value) => setFormData({ ...fromData, P_branch:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
             name="P_branch"
            label="Branch"
              fullWidth
              variant="standard"
              />
            )}
          />
        </Grid>
         
        <Grid item xs={12} sm={3}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={District}
         
            onChange={(event, value) => setFormData({ ...fromData, P_district:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
              name="P_district"
              label="District"
              fullWidth
              variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        {/* empty */}
        </Grid> 
        <Grid item xs={12} sm={3}>
          <TextField
            required
            name="P_telephone"
            label="Telephone"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_telephone}
            onChange={(event)=>setFormData({...fromData,P_telephone:event.target.value})}

          />
        </Grid>
        <Grid item xs={12} sm={9}>
        {/* empty */}
        </Grid> 
        
        <Grid item xs={12} sm={2}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Payment}

            onChange={(event, value) => setFormData({ ...fromData, P_paymentMethod:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
              name="P_paymentMethod"
              label="Payment Method"
              fullWidth
   
              variant="standard"
              />
            )}
          />
     
        </Grid>
        <Grid item xs={12} sm={2}>
        <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={Vehical}
            onChange={(event, value) => setFormData({ ...fromData, P_VehicalType:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
              name="P_VehicalType"
              label="Vehical Type"
              fullWidth
              variant="standard"
              />
            )}
          />
         
        </Grid>
        
        
        
        <Grid item xs={2}>
        <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={status}
            value={fromData.P_imergency}
            onChange={(event, value) => setFormData({ ...fromData, P_imergency:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
                   name="P_imergency"
            label="Priority Level"
              fullWidth
              variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        {/* empty */}
        </Grid> 
        <Grid item xs={3}>
          <TextField
            required
            name="P_distanceCost"
            label="Distance Cost"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_distanceCost}
            onChange={(event)=>setFormData({...fromData,P_distanceCost:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
        {/* empty */}
        </Grid> 
        <Grid item xs={8}>
          <TextField
            name="P_specialNote"
            label="Special Note"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_specialNote}
            onChange={(event)=>setFormData({...fromData,P_specialNote:event.target.value})}

          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}