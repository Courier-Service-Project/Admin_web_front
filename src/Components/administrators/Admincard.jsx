import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, Avatar, Box, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import "./Admincard.css";
import { useNavigate } from "react-router-dom";

export default function Admincard(props) {
  const { name, email, telephone, photoSrc, admin_Id } = props;
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/adminform/${admin_Id}`,{
      state: { admin_Id: admin_Id },
    })
  };

  return (
    <Card className="admin-card" sx={{ minHeight: 200, boxShadow: 3, borderRadius: 5 }}>
      <Box sx={{ m: 3 }}>
        <Grid container>
          <Grid item xs={12} md={3} sx={{ pt: 3 }}>
            <Avatar
              alt="Admin photo"
              src={photoSrc}
              sx={{ width: 150, height: 150, ml: 5 }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
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
            <Button size="small" color="primary" 
              onClick={handleViewMore}
            sx={{
              border: 1, justifyContent: "flex-end",
              "&:hover": {
                backgroundColor: '#7abec5',
                color: 'white',
              }
            }}>
              <Typography>View More</Typography>
            </Button>
        </Box>
      </Box>
    </Card>
  );
}
