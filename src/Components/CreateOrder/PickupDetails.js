import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PickupDetails({fromData,setFormData}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pickup Details
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            required
            name="P_address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={fromData.P_address}
            onChange={(event)=>setFormData({...fromData,P_address:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="P_district"
            label="District"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.P_district}
            onChange={(event)=>setFormData({...fromData,P_district:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="P_telephone"
            label="Telephone"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.P_telephone}
            onChange={(event)=>setFormData({...fromData,P_telephone:event.target.value})}

          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="P_homeTown"
            label="Home Town"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.P_homeTown}
            onChange={(event)=>setFormData({...fromData,P_homeTown:event.target.value})}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="P_paymentMethod"
            label="Payment Method"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.P_paymentMethod}
            onChange={(event)=>setFormData({...fromData,P_paymentMethod:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="P_VehicalType"
            label="Vehical Type"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.P_VehicalType}
            onChange={(event)=>setFormData({...fromData,P_VehicalType:event.target.value})}
          />
        </Grid>
        
        
        <Grid item xs={12}>
          <TextField
            required
            name="P_specialNote"
            label="Special Note"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={fromData.P_specialNote}
            onChange={(event)=>setFormData({...fromData,P_specialNote:event.target.value})}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="P_Descripion"
            label="Description About Order"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={fromData.P_Descripion}
            onChange={(event)=>setFormData({...fromData,P_Descripion:event.target.value})}

          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}