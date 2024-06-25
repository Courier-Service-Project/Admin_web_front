import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ReceiverDetails({ fromData, setFormData }) {
  const District = ["Hambantota", "Mathara", "Colombo", "Gampaha"];
  const Province = ["Western", "Central", "Southern", "Eastern"];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Receiver Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            required
            name="R_fname"
            label="First Name"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.R_fname}
            onChange={(event) =>
              setFormData({ ...fromData, R_fname: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="R_lname"
            label="Last Name"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.R_lname}
            onChange={(event) =>
              setFormData({ ...fromData, R_lname: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* empty */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            name="R_telephone"
            label="Telephone"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.R_telephone}
            onChange={(event) =>
              setFormData({ ...fromData, R_telephone: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* empty */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            name="R_email"
            label="Email"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.R_email}
            onChange={(event) =>
              setFormData({ ...fromData, R_email: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* empty */}
        </Grid>
        <Grid item xs={3}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Province}
            value={fromData.R_province}
            onChange={(event, value) =>
              setFormData({ ...fromData, R_province: value })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                required
                name="R_province"
                label="Province"
                fullWidth
                autoComplete="family-name"
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
            value={fromData.R_district}
            onChange={(event, value) =>
              setFormData({ ...fromData, R_district: value })
            }
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
          {/* empty */}
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="R_streetNo"
            label="Street No"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.R_streetNo}
            onChange={(event) =>
              setFormData({ ...fromData, R_streetNo: event.target.value })
            }
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            name="R_street"
            label="Street"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.R_street}
            onChange={(event) =>
              setFormData({ ...fromData, R_street: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            name="R_HomeTown"
            label="Home Town"
            autoComplete="off"
            fullWidth
            variant="standard"
            value={fromData.R_HomeTown}
            onChange={(event) =>
              setFormData({ ...fromData, R_HomeTown: event.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
