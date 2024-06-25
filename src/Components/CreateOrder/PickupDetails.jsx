import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { BACKEND_URL, ID } from "../../Constants/index";
import InputAdornment from "@mui/material/InputAdornment";

export default function PickupDetails({ fromData, setFormData }) {
  const [getbranch, setBranch] = useState(["Loading"]);
  const [cost, setcost] = React.useState("");

  setFormData({ ...fromData, P_streetNo: cost });

  // useEffect(() => {
  //   const fetchBranch = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:9000/branch");
  //       const branch = response.data.Data;
  //       setBranch(branch);
  //     } catch (error) {
  //       console.log(error + " Error loading Branch");
  //     }
  //   };
  //   fetchBranch();
  // }, []);

  // React.useEffect(() => {
  //   axios
  //     .post(`${BACKEND_URL}/branch/getDistance`, {
  //       Slocation: fromData.R_district,
  //       Rlocation: fromData.P_district,
  //     })
  //     .then(function (response) {
  //       setcost(response.data.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [fromData.P_district]);

  const District = ["Hambantota", "Mathara", "Colombo", "Gampaha"];
  const Payment = ["Sender", "Receiver"];
  const Vehical = ["Car", "Bike", "Three-Wheel"];
  const status = ["Emergency", "Normal"];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pickup Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            name="P_streetNo"
            label="StreetNo"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_streetNo}
            onChange={(event) =>
              setFormData({ ...fromData, P_streetNo: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="P_street"
            label="Street"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_street}
            onChange={(event) =>
              setFormData({ ...fromData, P_street: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="P_homeTown"
            label="Home Town"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_homeTown}
            onChange={(event) =>
              setFormData({ ...fromData, P_homeTown: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* empty */}
        </Grid>
        <Grid item xs={3}>
          <Autocomplete
            disablePortal
            options={getbranch}
            value={fromData.P_branch}
            onChange={(event, value) =>
              setFormData({ ...fromData, P_branch: value })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                required
                name="P_branch"
                label="Branch"
                fullWidth
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
            value={fromData.P_district}
            onChange={(event, value) =>
              setFormData({ ...fromData, P_district: value })
            }
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
        <Grid item xs={2}>
          <TextField
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs :</InputAdornment>
              ),
              readOnly: true,
            }}
            sx={{
              input: {
                fontFamily: "monospace",
                fontWeight: "500",
                color: "#f43f5e",
              },
            }}
            InputLabelProps={{
              style: { color: "#9ca3af" },
            }}
            name="P_distanceCost"
            label="Distance Cost"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={cost}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* empty */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            name="P_telephone"
            label="Telephone"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_telephone}
            onChange={(event) =>
              setFormData({ ...fromData, P_telephone: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          {/* empty */}
        </Grid>

        <Grid item xs={12} sm={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Payment}
            value={fromData.P_paymentMethod}
            onChange={(event, value) =>
              setFormData({ ...fromData, P_paymentMethod: value })
            }
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
        <Grid item xs={12} sm={2}>
          <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={Vehical}
            value={fromData.P_VehicalType}
            onChange={(event, value) =>
              setFormData({ ...fromData, P_VehicalType: value })
            }
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

        <Grid item xs={2}>
          <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={status}
            value={fromData.P_imergency}
            onChange={(event, value) =>
              setFormData({ ...fromData, P_imergency: value })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                required
                name="P_imergency"
                label="Priority Level"
                fullWidth
                variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* empty */}
        </Grid>

        <Grid item xs={8}>
          <TextField
            name="P_specialNote"
            label="Special Note"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.P_specialNote}
            onChange={(event) =>
              setFormData({ ...fromData, P_specialNote: event.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
