import React from "react";
import Input from "..";
import { render } from "@testing-library/react";

describe("Input component", () => {
  const component = (
    <Input
      id="currency-moneda"
      label="MONEY-TEST"
      type="number"
      focus={jest.fn()}
      change={jest.fn()}
      value={371.84}
    />
  );

  test("Should render Input component", () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });
});
