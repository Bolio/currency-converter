import React from "react";
import configureMockStore from "redux-mock-store";
import CurrencyConverter from "..";
import { render } from "@testing-library/react";
import initialState from "../../../jest/utils/initialState";
import { renderWithProviderSnapshot } from "../../../jest/utils";

const mockStore = configureMockStore([]);

console.log("initialState", initialState);

const currentConversionInitialState = {
  ...initialState,
  currency: {
    currentConversion: {
      date: "2022-05-19",
      info: {
        rate: 19.92868,
        timestamp: 1652997843,
      },
      query: {
        amount: 1,
        from: "USD",
        to: "MXN",
      },
      result: 19.92868,
      success: true,
    },
    fetching: false,
    success: false,
    error: false,
    errorMessage: "",
  },
};
const store = mockStore(currentConversionInitialState);

describe("CurrencyConverter component", () => {
  const component = renderWithProviderSnapshot(<CurrencyConverter />, {
    initialState: currentConversionInitialState,
    store,
  });

  test("Should render CurrencyConverter component", () => {
    const container = component;
    expect(container).toMatchSnapshot();
  });
});
