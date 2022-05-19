import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "../../redux/configureStore";

export const renderWithProviderSnapshot = (
  uiComponent,
  { initialState, store = configureStore(initialState) } = {}
) => {
  return renderer.create(<Provider store={store}>{uiComponent}</Provider>);
};
