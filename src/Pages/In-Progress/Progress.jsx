import React, { useState } from "react";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";
import Inprogresstable from "../../Components/Inprogress/Inprogresstable";
import Ondiliverytable from "../../Components/Inprogress/Ondiliverytable";
import ONBranchtable from "../../Components/Inprogress/OnBranchtable";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Progress() {
  const [selectedValue, setSelectedValue] = useState("onbranch");

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
          {selectedValue === "onpic" && (
            <Box sx={{ mx: 3 }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                <AppsIcon sx={{ mr: 3 }} />
                OnPick
              </Typography>
            </Box>
          )}

          {selectedValue === "ondil" && (
              <Box sx={{ mx: 3 }}>
                <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                  <AppsIcon sx={{ mr: 3 }} />
                  OnDilivery
                </Typography>
              </Box>
          )}

          {selectedValue === "onbranch" && (
              <Box sx={{ mx: 3 }}>
                <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                  <AppsIcon sx={{ mr: 3 }} />
                  OnBranch
                </Typography>
              </Box>
          )}
        
        
        <Box sx={{ mx: 9,mt:3,mb:3 }}>
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
                value="onbranch"
                control={<Radio/>}
                label={<Typography sx={{ fontWeight: 'bold',fontSize:"20px"}}>OnBranch</Typography>}
              />
              <FormControlLabel sx={{ml:"20px"}} 
                value="onpic"
                control={<Radio/>}
                label={<Typography sx={{ fontWeight: 'bold',fontSize:"20px"}}>OnPick</Typography>}
              />
              <FormControlLabel sx={{ml:"20px"}}
                value="ondil"
                control={<Radio/>}
                label={<Typography sx={{ fontWeight: 'bold',fontSize:"20px"}}>OnDilivery</Typography>}
              />
            </RadioGroup>
          </FormControl>
          </Box>

          {selectedValue === "onpic" && (
            <Box>
            <Inprogresstable />
          </Box>
          )}

          {selectedValue === "ondil" && (
            <Box>
              <Ondiliverytable />
            </Box>
          )}

          {selectedValue === "onbranch" && (
            <Box>
              <ONBranchtable />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
