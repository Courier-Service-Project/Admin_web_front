import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropPayment() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl margin="dense"  size="small" fullWidth required>
      <InputLabel >Select Payment Method</InputLabel>
      <Select
        value={age}
        label="Select Payment Method"
        onChange={handleChange}
      >
        <MenuItem value={"Sender"}>Sender</MenuItem>
        <MenuItem value={"Receiver"}>Receiver</MenuItem>
      </Select>
    </FormControl>
  );
}