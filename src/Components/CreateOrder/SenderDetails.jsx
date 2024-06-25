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
        <Grid item xs={12} sm={3}>
          <TextField
            sx={{ input: { fontFamily: "monospace", fontWeight: "bold" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
            variant="standard"
            autoComplete="off"
            fullWidth
            required
            name="S_fname"
            label="First name"
            value={fromData.S_fname}
            onChange={(event) =>
              setFormData({ ...fromData, S_fname: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            sx={{ input: { fontFamily: "monospace", fontWeight: "bold" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
            name="S_lname"
            label="Last name"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_lname}
            onChange={(event) =>
              setFormData({ ...fromData, S_lname: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* empty */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            sx={{ input: { fontFamily: "monospace", fontWeight: "bold" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
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
        <Grid item xs={12} sm={8}>
          {/* empty */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            sx={{ input: { fontFamily: "monospace", fontWeight: "bold" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
            required
            name="S_email"
            label="Email"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_email}
            onChange={(event) =>
              setFormData({ ...fromData, S_email: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* empty */}
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ input: { fontFamily: "monospace", fontWeight: "bold" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
            name="S_streestNo"
            label="Street No"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_streestNo}
            onChange={(event) =>
              setFormData({ ...fromData, S_streestNo: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ input: { fontFamily: "monospace", fontWeight: "bold" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
            name="S_street"
            label="Street"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_street}
            onChange={(event) =>
              setFormData({ ...fromData, S_street: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ input: { fontFamily: "monospace", fontWeight: "bold" } }}
            inputProps={{ style: { textTransform: "uppercase" } }}
            required
            name="S_city"
            label="HomeTown"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={fromData.S_city}
            onChange={(event) =>
              setFormData({ ...fromData, S_city: event.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
