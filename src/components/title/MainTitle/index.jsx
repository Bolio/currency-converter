import React from "react";
import Typography from "@mui/material/Typography";

const MainTitle = ({ text, align, variant, gutterBottom }) => {
  return (
    <Typography align={align} variant={variant} gutterBottom={gutterBottom}>
      {text}
    </Typography>
  );
};

export default MainTitle;
