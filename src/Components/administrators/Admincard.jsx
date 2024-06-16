import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, Avatar, Box, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import "./Admincard.css";
import { Link } from 'react-router-dom';

export default function Admincard(props) {
  const { name, email, telephone, photoSrc } = props;

  return (
    <Card className="admin-card" sx={{minHeight: 200, boxShadow: 3, borderRadius: 5 }}>
      <Box sx={{ m: 3 }}>
        <Grid container>
          <Grid item xs={3} sx={{ pt: 3 }}>
            <Avatar
              alt="Admin photo"
              src={photoSrc}
              sx={{ width: 150, height: 150 , ml:5 }}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              type="text"
              margin="dense"
              id="standard-basic"
              label="Name"
              variant="standard"
              size="small"
              placeholder=""
              fullWidth
              required
              value={name}
            />
            <TextField
              type="text"
              margin="dense"
              id="standard-basic"
              label="Email"
              variant="standard"
              size="small"
              placeholder=""
              fullWidth
              required
              value={email}
            />
            <TextField
              type="text"
              margin="dense"
              id="standard-basic"
              label="Telephone NO"
              variant="standard"
              size="small"
              placeholder=""
              fullWidth
              required
              value={telephone}
            />
          </Grid>
        </Grid>

        <Box sx={{
          pt: 4, display: 'flex', justifyContent: "flex-end",
        }}>
          <Link to="/adminform">
          <Button size="small" color="primary" sx={{
            border: 1, justifyContent: "flex-end",
            "&:hover": {
              backgroundColor: '#7abec5',
              color: 'white',
            }
          }}>
          <Typography>View More</Typography>
            
          </Button>
          </Link>

        </Box>

      </Box>
    </Card>
  );
}
