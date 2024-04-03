import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function DriverQuestionnaries({fromData,setFormData}) {
  return (
    <React.Fragment>
      <Typography variant="h6" fontWeight="600" gutterBottom>
        Driver Questionnaries
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            name="D_area"
            label="Are you available to work in other areas?(if yes, enter the areas)"
            fullWidth
            autoComplete=""
            variant="standard"
            value={fromData.D_area}
            onChange={(event)=>setFormData({...fromData,D_area:event.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="D_document"
            label="If hired, are you able to submit proof that you are leagelly eligible for employment?"
            fullWidth
            autoComplete=""
            variant="standard"
            value={fromData.D_document}
            onChange={(event)=>setFormData({...fromData,D_document:event.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="D_skill"
            label="Applicant Skill"
            fullWidth
            autoComplete=""
            variant="standard"
            value={fromData.D_skill}
            onChange={(event)=>setFormData({...fromData,D_skill:event.target.value})}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}