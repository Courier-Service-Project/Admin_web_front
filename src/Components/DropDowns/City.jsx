import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import axios from 'axios';

export default function DistrictDrop({ label, name, value, onChange, error, helperText, width }) {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get('http://localhost:9000/branch');
        const branches = response.data.Data;
        setBranches(branches);
      } catch (error) {
        console.log(error + ' Error loading Branch');
      }
    };
    fetchBranches();
  }, []);

  return (
    <FormControl variant="standard" fullWidth error={error}>
      <InputLabel>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {branches.map((branch) => (
          <MenuItem key={branch} value={branch}>
            {branch}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

DistrictDrop.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  width: PropTypes.number,
};
