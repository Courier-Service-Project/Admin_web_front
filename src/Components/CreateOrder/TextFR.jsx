import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextFR(props) {
  return (
    <TextField
      sx={{
        input: {
          fontFamily: "monospace",
          fontWeight: "200",
          color: "#fda4af",
        },
      }}
      InputLabelProps={{
        style: { color: "#9ca3af" },
      }}
      inputProps={{ style: { textTransform: "uppercase" } }}
      variant="standard"
      autoComplete="off"
      fullWidth
      InputProps={{
        readOnly: true,
      }}
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
