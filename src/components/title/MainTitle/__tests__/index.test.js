import React from "react";
import MainTitle from "..";
import { render } from "@testing-library/react";

describe("MainTitle component", () => {
  const component = (
    <MainTitle
      text={"Hola Test"}
      align={"center"}
      variant={"h3"}
      gutterBottom={true}
    />
  );

  test("Should render MainTitle component", () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  test("Should find a title", () => {
    const { getByText } = render(component);
    expect(getByText("Hola Test")).toBeInTheDocument();
  });
});
