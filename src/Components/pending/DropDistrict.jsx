import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDistrict() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl margin="dense"  size="small" fullWidth required>
      <InputLabel >District</InputLabel>
      <Select
        value={age}
        label="District"
        onChange={handleChange}
      >
        <MenuItem value={"Mathara"}>Mathara</MenuItem>
        <MenuItem value={"Hambanthota"}>Hambanthota</MenuItem>
      </Select>
    </FormControl>
  );
}