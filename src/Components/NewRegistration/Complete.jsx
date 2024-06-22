import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DriverQuestionnaries from './DriverQuestionnaries';
import EmergencyContact from './EmergencyContact';
import ApplicantInformantion from './ApplicantDetails';
import Divider from '@mui/material/Divider';
import {  Card,
          CardContent,
          Button } from '@mui/material';


const initialFormData = {
  A_fname: "",
  A_mname: "",
  A_lname: "",
  A_Dob: "",
  A_telephone: "",
  A_address: "",
  A_state: "",
  A_city: "",
  A_postalcode: "",
  A_years: "",
  E_fname: "",
  E_lname: "",
  E_relation: "",
  E_district: "",
  E_city: "",
  E_state: "",
  E_address: "",
  E_telephone: "",
  D_city: "",
  D_vehicle: "",
  D_area: "",
  D_document: "",
  D_skill: "",
};

export default function CombinedForm() {
  const [formData, setFormData] = React.useState(initialFormData);

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Card style={{ marginRight: '20px',marginLeft:'20px',marginBottom:'20px',marginTop:"20px", width:'100%'}}>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ApplicantInformantion fromData={formData} setFormData={setFormData} />
        </Grid>
      </Grid>
      </CardContent>
      </Card>
      <Card style={{ marginRight: '100px',marginLeft:'20px',marginBottom:'20px', width:'100%'}}>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EmergencyContact fromData={formData} setFormData={setFormData} />
        </Grid>
      </Grid>
      </CardContent>
      </Card>
      <Card style={{ marginRight: '100px',marginLeft:'20px',marginBottom:'20px', width:'100%'}}>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DriverQuestionnaries fromData={formData} setFormData={setFormData} />
        </Grid>
      </Grid>
      </CardContent>
      </Card>

      <Grid container justifyContent="center">
      <Button variant="contained" color="primary"  onClick={handleSubmit} sx={{
            bgcolor: "#00897b",
            ":hover": {
              bgcolor: "#009688",
              color: "#616161",
            },
          }}>
        Submit
      </Button>
      </Grid>
    </div>
  );
}
