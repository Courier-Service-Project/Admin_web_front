import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function DistrictDrop({ label, name, value, onChange, error, helperText, width }) {
  
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
        <MenuItem value="Ambalantota">Ambalantota</MenuItem>
        <MenuItem value="Beliatta">Beliatta</MenuItem>
        <MenuItem value="Embilipitiya">Embilipitiya</MenuItem>
        <MenuItem value="Tangalle">Tangalle</MenuItem>
        <MenuItem value="Colombo">Colombo</MenuItem>
        <MenuItem value="Galle">Galle</MenuItem>
        <MenuItem value="Gampaha">Gampaha</MenuItem>
        <MenuItem value="Hambantota">Hambantota</MenuItem>
        <MenuItem value="Kalutara">Kalutara</MenuItem>
        <MenuItem value="Kandy">Kandy</MenuItem>
        <MenuItem value="Kegalle">Kegalle</MenuItem>
        <MenuItem value="Kurunagala">Kurunagala</MenuItem>
        <MenuItem value="Matara">Matara</MenuItem>
        <MenuItem value="NuwaraEliya">Nuwara Eliya</MenuItem>
        <MenuItem value="Rathnapura">Rathnapura</MenuItem>
        <MenuItem value="Trincomalee">Trincomalee</MenuItem>
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

DistrictDrop.propTypes = {
  label:PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  width: PropTypes.number,
};
