import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextFR from "./TextFR";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";

export default function SenderDetails({ fromData, setFormData }) {
  return (
    <React.Fragment>
      <Typography mb={4} sx={{ fontWeight: "500" }} variant="h6" gutterBottom>
        <ScatterPlotIcon sx={{ mr: 1 }} />
        Review Details
      </Typography>
      <Grid container>
        <Grid item xs={3}>
          <Typography
            sx={{ backgroundColor: "#e4e4e7", px: 1, color: "#71717a" }}
            variant="h6"
            px={1}
            mb={2}
            gutterBottom
          >
            Sender Details
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={3}>
          <TextFR
            name="S_fname"
            label="First name"
            value={fromData.S_fname}
            onChange={(event) =>
              setFormData({ ...fromData, S_fname: event.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextFR
            name="S_telephone"
            label="Telephone"
            value={fromData.S_telephone}
            onChange={(event) =>
              setFormData({ ...fromData, S_telephone: event.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextFR
            name="S_email"
            label="Email"
            value={fromData.S_email}
            onChange={(event) =>
              setFormData({ ...fromData, S_email: event.target.value })
            }
          />
        </Grid>
      </Grid>

      <React.Fragment>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              sx={{ backgroundColor: "#e4e4e7", px: 1, color: "#71717a" }}
              variant="h6"
              mt={4}
              px={1}
              mb={2}
              gutterBottom
            >
              Receiver Details
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextFR
              name="R_fname"
              label="First Name"
              value={fromData.R_fname}
              onChange={(event) =>
                setFormData({ ...fromData, R_fname: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextFR
              name="R_telephone"
              label="Telephone"
              value={fromData.R_telephone}
              onChange={(event) =>
                setFormData({ ...fromData, R_telephone: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextFR
              name="R_email"
              label="Email"
              value={fromData.R_email}
              onChange={(event) =>
                setFormData({ ...fromData, R_email: event.target.value })
              }
            />
          </Grid>
        </Grid>
        <Grid container mt={-3} spacing={6}>
          <Grid item xs={3}>
            <TextFR
              name="R_streetNo"
              label="Street No"
              value={fromData.R_streetNo}
              onChange={(event) =>
                setFormData({ ...fromData, R_streetNo: event.target.value })
              }
            />
          </Grid>

          <Grid item xs={3}>
            <TextFR
              name="R_street"
              label="Street"
              value={fromData.R_street}
              onChange={(event) =>
                setFormData({ ...fromData, R_street: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextFR
              name="R_HomeTown"
              label="Home Town"
              value={fromData.R_HomeTown}
              onChange={(event) =>
                setFormData({ ...fromData, R_HomeTown: event.target.value })
              }
            />
          </Grid>
        </Grid>
        <Grid container mt={-3} spacing={6}>
          <Grid item xs={12} sm={3}>
            <TextFR
              name="R_district"
              label="District"
              value={fromData.R_district}
              onChange={(event) =>
                setFormData({ ...fromData, R_district: event.target.value })
              }
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <React.Fragment>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              sx={{ backgroundColor: "#e4e4e7", px: 1, color: "#71717a" }}
              variant="h6"
              mt={4}
              px={1}
              mb={2}
              gutterBottom
            >
              Pickup Details
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextFR
              name="P_streetNo"
              label="StreetNo"
              value={fromData.P_streetNo}
              onChange={(event) =>
                setFormData({ ...fromData, P_streetNo: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextFR
              name="P_street"
              label="Street"
              value={fromData.P_street}
              onChange={(event) =>
                setFormData({ ...fromData, P_street: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextFR
              name="P_homeTown"
              label="Home Town"
              value={fromData.P_homeTown}
              onChange={(event) =>
                setFormData({ ...fromData, P_homeTown: event.target.value })
              }
            />
          </Grid>
        </Grid>

        <Grid container mt={-3} spacing={6}>
          <Grid item xs={3}>
            <TextFR
              name="P_branch"
              label="Branch"
              value={fromData.P_branch}
              onChange={(event) =>
                setFormData({ ...fromData, P_branch: event.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextFR
              name="P_district"
              label="District"
              value={fromData.P_district}
              onChange={(event) =>
                setFormData({ ...fromData, P_district: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextFR
              name="P_telephone"
              label="Telephone"
              value={fromData.P_telephone}
              onChange={(event) =>
                setFormData({ ...fromData, P_telephone: event.target.value })
              }
            />
          </Grid>
        </Grid>
        <Grid container mt={-3} spacing={6}>
          <Grid item xs={12} sm={3}>
            <TextFR
              name="P_paymentMethod"
              label="Payment Method"
              value={fromData.P_paymentMethod}
              onChange={(event, value) =>
                setFormData({ ...fromData, P_paymentMethod: value })
              }
            />
          </Grid>
          {/* <Grid item xs={12} sm={2}>
            <TextFR
              name="P_VehicalType"
              label="Vehical Type"
              value={fromData.P_VehicalType}
              onChange={(event) =>
                setFormData({ ...fromData, P_VehicalType: event.target.value })
              }
            />
          </Grid> */}
          <Grid item xs={3}>
            <TextFR
              name="P_imergency"
              label="Priority Level"
              value={fromData.P_imergency}
              onChange={(event) =>
                setFormData({ ...fromData, P_imergency: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextFR
              name="P_distanceCost"
              label="Distance Cost"
              value={localStorage.getItem("distance")}
              onChange={(event) =>
                setFormData({ ...fromData, P_distanceCost: event.target.value })
              }
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
}
