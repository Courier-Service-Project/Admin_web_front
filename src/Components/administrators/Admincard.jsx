import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, Avatar, Box, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import "./Admincard.css";
import { useNavigate } from "react-router-dom";
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

export default function Admincard(props) {
  const { name, email, telephone, photoSrc, admin_Id } = props;
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/adminform/${admin_Id}`,{
      state: { admin_Id: admin_Id },
    })
  };

  return (
    <Card className="admin-card" sx={{ minHeight: 280, boxShadow: 3, borderRadius: 3 }}>
      <Box sx={{ m:2 }}>
        <Grid container>
          <Grid item xs={12} md={3} sx={{ pt: 3 }}>
            <Avatar
              alt="Admin photo"
              src={photoSrc}
              sx={{ width: 150, height: 150, ml: 5 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              type="text"
              margin="dense"
              id="name-field"
              label="Full Name"
              variant="standard"
              size="small"
              fullWidth
              value={name}
              InputProps={{ readOnly: true }}
            />
            <TextField
              type="text"
              margin="dense"
              id="email-field"
              label="Email"
              variant="standard"
              size="small"
              fullWidth
              value={email}
              InputProps={{ readOnly: true }}
            />
            <TextField
              type="text"
              margin="dense"
              id="telephone-field"
              label="Telephone NO"
              variant="standard"
              size="small"
              fullWidth
              value={telephone}
              InputProps={{ readOnly: true }}
            />
           
          </Grid>
        </Grid>

        <Box sx={{
          pt: 4, display: 'flex', justifyContent: "flex-end",
        }}>
            {/* <Button size="small" color="primary" 
              onClick={handleViewMore}
            sx={{
              border: 1, justifyContent: "flex-end",
              "&:hover": {
                backgroundColor: '#7abec5',
                color: 'white',
              }
            }}>
              <Typography>View More</Typography>
            </Button> */}

                <Button
                  size="medium"
                  onClick={handleViewMore}
                  variant="contained"
                  sx={{
                    margin: "0px 5px",
                    bgcolor: "#00897b",
                    ":hover": {
                      bgcolor: "#4db6ac",
                      color: "#fff",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>View More</Typography>
                  <ChevronRightSharpIcon style={{ fontSize: 20 }} />
                </Button>
        </Box>
      </Box>
    </Card>
  );
}
