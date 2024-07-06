import React, { useState } from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";
import EPendingTable from "../../Components/pending/EPendingTable";
import NEPendingTable from "../../Components/pending/NEPending";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Pending() {
  const [selectedValue, setSelectedValue] = useState("EO");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        bgcolor: "#e0f2f1",
        minHeight: "100vh",
        minWidth: "100%",
        width: "fit-content",
      }}
    >
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}
        >
          {selectedValue === "EO" && (
            <Box sx={{ mx: 3 }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                <AppsIcon sx={{ mr: 3 }} />
                Emmergency Order
              </Typography>
            </Box>
          )}

          {selectedValue === "NEO" && (
            <Box sx={{ mx: 3 }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                <AppsIcon sx={{ mr: 3 }} />
                Non Emmergency Order
              </Typography>
            </Box>
          )}

          <Box sx={{ mx: 9, mt: 3, mb: 3 }}>
            <FormControl>
              <RadioGroup
                variant="standard"
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="EO"
                  control={<Radio />}
                  label={
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                      Emmergency
                    </Typography>
                  }
                />
                <FormControlLabel sx={{ml:"20px"}}
                  value="NEO"
                  control={<Radio />}
                  label={
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                      Non Emmergency
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {selectedValue === "EO" && (
            <Box>
              <EPendingTable />
            </Box>
          )}

          {selectedValue === "NEO" && (
            <Box>
              <NEPendingTable />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
