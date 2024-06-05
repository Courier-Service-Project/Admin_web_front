import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function SenderDetails({ fromData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sender Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            name="S_name"
            label="Name"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_name}
            onChange={(event)=>setFormData({...fromData,S_name:event.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            name="S_telephone"
            label="Telephone"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_telephone}
            onChange={(event) =>
              setFormData({ ...fromData, S_telephone: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="S_address"
            label="Address"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_address}
            onChange={(event) =>
              setFormData({ ...fromData, S_address: event.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

