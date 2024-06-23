import React from 'react';
import { TextField, Button } from '@mui/material';

const SearchForm = ({ orderId, handleOrderIdChange, handleSearch, showSearch }) => {
  return (
    <div>
      {showSearch && (
        <div style={{ margin: "10px", marginTop: "100px", marginBottom: "200px"}}>
          <TextField
            label="Delivery Order ID"
            variant="outlined"
            value={orderId}
            onChange={handleOrderIdChange}
            sx={{
              width: "80%",
              "& input": {
                height: "40px",
                padding: "10px",
              },
            }}
          />
          <Button variant="contained" style={{ marginLeft: "20px" }} onClick={handleSearch} sx={{
            bgcolor: "#00897b",
            height:  "60px",
            width: "100px",
            fontWeight: "600",
            ":hover": {
              bgcolor: "#009688",
              color: "#616161",
            },
          }}>
            Search
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
