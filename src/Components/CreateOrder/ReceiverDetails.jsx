import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TextFSRP from "./TextFSRP";

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
          <TextFSRP
            required={true}
            name="R_fname"
            label="First Name"
            value={fromData.R_fname}
            onChange={(event) =>
              setFormData({ ...fromData, R_fname: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TextFSRP
            name="R_lname"
            label="Last Name"
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
          <TextFSRP
            required={true}
            name="R_telephone"
            label="Telephone"
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
          <TextFSRP
            required={true}
            name="R_email"
            label="Email"
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
            sx={{ input: { fontFamily: "monospace", fontWeight: "300" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
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
            sx={{ input: { fontFamily: "monospace", fontWeight: "300" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
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
          <TextFSRP
            name="R_streetNo"
            label="Street No"
            value={fromData.R_streetNo}
            onChange={(event) =>
              setFormData({ ...fromData, R_streetNo: event.target.value })
            }
          />
        </Grid>

        <Grid item xs={3}>
          <TextFSRP
            name="R_street"
            label="Street"
            value={fromData.R_street}
            onChange={(event) =>
              setFormData({ ...fromData, R_street: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextFSRP
            required={true}
            name="R_HomeTown"
            label="Home Town"
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
