import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestContext from "../../TestContext";
import Category from "../Category";

it("showing the display name", () => {
  const { getByText } = render(
    <TestContext>
      <Category />
    </TestContext>
  );
  expect(getByText("Food")).toBeInTheDocument();
});

it("showing the right amount of products", () => {
  const { getByTestId } = render(
    <TestContext>
      <Category />
    </TestContext>
  );
  expect(getByTestId("num-products")).toHaveTextContent("10");
  expect(getByTestId("num-products")).not.toHaveTextContent("100");
});
