import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import MainTitle from "../../components/title/MainTitle";
import Input from "../../components/Input";
import { choiceCurrency } from "./utils";
import { fetchInformationCurrenciesThunk } from "../../redux/modules/currencyConverter";

function CurrencyConverter() {
  const dispatch = useDispatch();
  const [choice, setChoice] = useState(undefined);
  const [valueMxn, setValueMxn] = useState("");
  const [valueUsd, setValueUsd] = useState("");

  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchInformationCurrenciesThunk(choice));
  }, [choice]);

  const dataCurrencyExchangeAPI = useSelector((state) => state.currency);
  console.log("dataCurrencyExchangeAPI", dataCurrencyExchangeAPI);

  const handleChangeInput = (value, currency) => {
    // console.log("currency:", currency);
    // console.log("value:", value);

    if (currency === "USD") {
      setValueUsd(value);
      setValueMxn(value * dataCurrencyExchangeAPI?.currentConversion?.result);
    } else if (currency === "MXN") {
      setValueMxn(value);
      setValueUsd(value * dataCurrencyExchangeAPI?.currentConversion?.result);
    }
  };

  const handleFocus = (choice) => {
    setChoice(choice);
    setValueMxn("");
    setValueUsd("");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <MainTitle
          text="Currency Converter 💱"
          align="center"
          variant="h3"
          gutterBottom={true}
        />
        <Grid container>
          <Grid item xs={5}>
            <Input
              id="currency-usd"
              label="USD"
              type="number"
              focus={(e) => handleFocus("USD")}
              change={(e) => handleChangeInput(e.target.value, "USD")}
              value={valueUsd}
            />
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            {choiceCurrency(choice)}
          </Grid>
          <Grid item xs={5}>
            <Input
              id="curency-mxn"
              label="MXN"
              type="number"
              focus={(e) => handleFocus("MXN")}
              change={(e) => handleChangeInput(e.target.value, "MXN")}
              value={valueMxn}
            />
          </Grid>
          {dataCurrencyExchangeAPI?.error && (
            <Grid item xs={12}>
              <Alert severity="error">
                {dataCurrencyExchangeAPI.errorMessage}
              </Alert>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default CurrencyConverter;
