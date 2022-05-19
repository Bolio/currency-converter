import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

function CurrencyConverter() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <MainTitle
          text={"Currency Converter 🏦"}
          align={"center"}
          variant={"h3"}
          gutterBottom={true}
        />
        <Divider />
      </Paper>
    </Container>
  );
}

export default CurrencyConverter;
