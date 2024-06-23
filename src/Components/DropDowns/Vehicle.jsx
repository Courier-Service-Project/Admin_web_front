import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function VehicleDrop({ label, name, value, onChange, error, helperText, width }) {
  const formControlStyles = {
    minWidth: width || 120,
  };

  return (
    <FormControl variant="standard" sx={formControlStyles} error={error}>
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
        <MenuItem value="Bike">Bike</MenuItem>
        <MenuItem value="Car">Car</MenuItem>
        <MenuItem value="Van">Van</MenuItem>
        <MenuItem value={true}>12345</MenuItem>
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

VehicleDrop.propTypes = {
  label:PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  width: PropTypes.number,
};
