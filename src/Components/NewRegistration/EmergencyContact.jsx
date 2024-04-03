import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function EmergencyContact({fromData,setFormData}) {
  return (
    <React.Fragment>
      <Typography variant="h6"  fontWeight="600" gutterBottom>
        Emergency Contact 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            name="E_fname"
            label="First Name"
            autoComplete=""
            variant="standard"
            value={fromData.E_fname}
            onChange={(event)=>setFormData({...fromData,E_fname:event.target.value})}
            style={{width:"90%"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            name="E_lname"
            label="Last Name"
            autoComplete=""
            variant="standard"
            value={fromData.E_lname}
            onChange={(event)=>setFormData({...fromData,E_lname:event.target.value})}
            style={{width:"90%"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="E_relation"
            label="Relationship to You"
            autoComplete=""
            variant="standard"
            value={fromData.E_relation}
            onChange={(event)=>setFormData({...fromData,E_relation:event.target.value})}
            style={{width:"90%"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="E_address"
            label="Address"
            fullWidth
            autoComplete=""
            variant="standard"
            value={fromData.E_address}
            onChange={(event)=>setFormData({...fromData,E_address:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="E_telephone"
            label="Telephone"
            autoComplete=""
            variant="standard"
            value={fromData.E_telephone}
            onChange={(event)=>setFormData({...fromData,E_telephone:event.target.value})}
            style={{width:"90%"}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}