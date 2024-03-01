import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropVehical() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl margin="dense"  size="small" fullWidth required>
      <InputLabel >Vehical Type</InputLabel>
      <Select
        value={age}
        label="Vehical Type"
        onChange={handleChange}
      >
        <MenuItem value={"Bick"}>Bick</MenuItem>
        <MenuItem value={"Car"}>Car</MenuItem>
      </Select>
    </FormControl>
  );
}