import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropHomeTown() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl margin="dense"  size="small" fullWidth required>
      <InputLabel >Home Town</InputLabel>
      <Select
        value={age}
        label="Home Town"
        onChange={handleChange}
      >
        <MenuItem value={"Katuwna"}>Katuwna</MenuItem>
        <MenuItem value={"Middeniya"}>Middeniya</MenuItem>
        <MenuItem value={"Hungama"}>Hungama</MenuItem>
      </Select>
    </FormControl>
  );
}