import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextFSRP(props) {
  return (
    <TextField
      sx={{ input: { fontFamily: "monospace", fontWeight: "300" } }}
      inputProps={{ style: { textTransform: "uppercase" } }}
      variant="standard"
      autoComplete="off"
      required={props.required}
      resource={props.required}
      fullWidth
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
