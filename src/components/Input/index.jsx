import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ id, label, type, focus, change, value }) => (
  <TextField
    id={id}
    label={label}
    variant="filled"
    fullWidth
    type={type}
    onFocus={focus}
    onChange={change}
    value={value}
  />
);

export default Input;
