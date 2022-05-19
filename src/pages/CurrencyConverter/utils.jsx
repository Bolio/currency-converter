import React from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const choiceCurrency = (choice) => {
  if (choice === undefined) {
    return <CompareArrowsIcon sx={{ fontSize: 60 }} />;
  } else {
    return choice === "USD" ? (
      <ArrowForwardIcon sx={{ fontSize: 60 }} />
    ) : (
      <ArrowBackIcon sx={{ fontSize: 60 }} />
    );
  }
};

export { choiceCurrency };
