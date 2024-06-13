import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function PickupDetails({fromData,setFormData}) {
  const District = ['Hambantota', 'Mathara','Colombo', 'Gampaha'];
  const HomeTown = ['Katuwna', 'Walasmulla','Mathara', 'Middeniya'];
  const Payment = ['Online', 'Sender','Receiver'];
  const Vehical = ['Car', 'Bike','Mathara', 'Three-Wheel'];
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
            autoComplete="off"
            variant="standard"
            value={fromData.P_address}
            onChange={(event)=>setFormData({...fromData,P_address:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={HomeTown}

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
        <Grid item xs={12} sm={6}>

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
        <Grid item xs={12} sm={6}>
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
        
        
        <Grid item xs={12}>
          <TextField
            required
            name="P_specialNote"
            label="Special Note"
            fullWidth
            autoComplete="off"
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
            autoComplete="off"
            variant="standard"
            value={fromData.P_Descripion}
            onChange={(event)=>setFormData({...fromData,P_Descripion:event.target.value})}

          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}