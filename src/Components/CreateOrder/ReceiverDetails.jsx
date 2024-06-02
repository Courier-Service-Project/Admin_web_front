import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function ReceiverDetails({fromData,setFormData}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Receiver Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <TextField
            required
            name="R_name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={fromData.R_name}
            onChange={(event)=>setFormData({...fromData,R_name:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="R_telephone"
            label="Telephone"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.R_telephone}
            onChange={(event)=>setFormData({...fromData,R_telephone:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="R_district"
            label="District"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.R_district}
            onChange={(event)=>setFormData({...fromData,R_district:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="R_HomeTown"
            label="Home Town"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={fromData.R_HomeTown}
            onChange={(event)=>setFormData({...fromData,R_HomeTown:event.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="R_address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={fromData.R_address}
            onChange={(event)=>setFormData({...fromData,R_address:event.target.value})}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}