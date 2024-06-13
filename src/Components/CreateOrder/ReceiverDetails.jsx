import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ReceiverDetails({fromData,setFormData}) {
  const District = ['Hambantota', 'Mathara','Colombo', 'Gampaha'];
  const HomeTown = ['Katuwna', 'Walasmulla','Mathara', 'Middeniya'];
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
            autoComplete="off"
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
            autoComplete="off"
            variant="standard"
            value={fromData.R_telephone}
            onChange={(event)=>setFormData({...fromData,R_telephone:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={District}

            onChange={(event, value) => setFormData({ ...fromData, R_district:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
            name="R_district"
            label="District"
            fullWidth
            autoComplete="family-name"
            variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={HomeTown}

            onChange={(event, value) => setFormData({ ...fromData, R_HomeTown:value })}
            renderInput={(params) => (
              <TextField
              {...params}
              required
              name="R_HomeTown"
              label="Home Town"
              fullWidth
              variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="R_address"
            label="Address"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.R_address}
            onChange={(event)=>setFormData({...fromData,R_address:event.target.value})}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}