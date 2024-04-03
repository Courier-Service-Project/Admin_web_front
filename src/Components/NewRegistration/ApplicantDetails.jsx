import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function ApplicantInformantion({fromData,setFormData}) {
  
  return (
    <React.Fragment>
      <Typography variant="h6" fontWeight="600" gutterBottom>
        Applicant Information
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_fname"
            label="First Name"
            autoComplete=""
            variant="standard"
            value={fromData.A_FName}
            onChange={(event)=>setFormData({...fromData,A_FName:event.target.value})}
            style={{width: "300px"}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_mname"
            label="Middle Name"
            autoComplete=""
            variant="standard"
            value={fromData.A_MName}
            onChange={(event)=>setFormData({...fromData,A_MName:event.target.value})}
            style={{width: "300px"}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_lname"
            label="Last Name"
            autoComplete=""
            variant="standard"
            value={fromData.A_LName}
            onChange={(event)=>setFormData({...fromData,A_LName:event.target.value})}
            style={{width: "300px"}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_Dob"
            label="Date Of Birth"
            style={{width: "300px"}}
            autoComplete=""
            variant="standard"
            value={fromData.A_Dob}
            onChange={(event)=>setFormData({...fromData,A_Dob:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_telephone"
            label="Telephone"
            autoComplete=""
            variant="standard"
            value={fromData.A_telephone}
            onChange={(event)=>setFormData({...fromData,A_telephone:event.target.value})}
            style={{width: "300px"}}
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="A_address"
            label="Address"
            autoComplete=""
            variant="standard"
            value={fromData.A_address}
            onChange={(event)=>setFormData({...fromData,A_address:event.target.value})}
            style={{width: "99%"}}
            
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_state"
            label="State/Province"
            autoComplete=""
            variant="standard"
            value={fromData.A_state}
            onChange={(event)=>setFormData({...fromData,A_state:event.target.value})}
            style={{width: "300px"}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_city"
            label="City"
            autoComplete=""
            variant="standard"
            value={fromData.A_city}
            onChange={(event)=>setFormData({...fromData,A_city:event.target.value})}
            style={{width: "300px"}}           
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_postalcode"
            label="Postal/Zip Code"
            autoComplete=""
            variant="standard"
            value={fromData.A_postalcode}
            onChange={(event)=>setFormData({...fromData,A_postalcode:event.target.value})}
            style={{width: "300px"}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="A_years"
            label="Number of Years at Address"
            autoComplete=""
            variant="standard"
            value={fromData.A_years}
            onChange={(event)=>setFormData({...fromData,A_years:event.target.value})}
            style={{width: "300px"}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="D_city"
            label="Applying for what city?"
            autoComplete=""
            variant="standard"
            value={fromData.D_city}
            onChange={(event)=>setFormData({...fromData,D_city:event.target.value})}
            style={{width: "300px"}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="D_vehicle"
            label="Vehicle year & model?"
            autoComplete=""
            variant="standard"
            value={fromData.D_vehicle}
            onChange={(event)=>setFormData({...fromData,D_vehicle:event.target.value})}
            style={{width: "300px"}}

          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}