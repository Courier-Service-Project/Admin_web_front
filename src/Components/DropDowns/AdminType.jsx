import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function AdminTypetDrop({ label, name, value, onChange, error, helperText, width }) {
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
            <MenuItem value="SuperAdmin">Super Admin</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
    }

AdminTypetDrop.propTypes = {
    label:PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    width: PropTypes.number,
};
