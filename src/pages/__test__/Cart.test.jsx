import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestContext from "../../TestContext";
import Cart from "../Cart";

it("showing the correct message if no items in cart", () => {
  const { getByText } = render(
    <TestContext initialState={{ cart: [] }}>
      <Cart />
    </TestContext>
  );
  expect(getByText("還沒有任何商品...快去選購吧~")).toBeInTheDocument();
});

it("showing the right subtotal", () => {
  const { getByText } = render(
    <TestContext>
      <Cart />
    </TestContext>
  );
  expect(getByText("$400")).toBeInTheDocument();
});

it("showing the right total", () => {
  const { getByText } = render(
    <TestContext>
      <Cart />
    </TestContext>
  );
  expect(getByText("總計：＄510")).toBeInTheDocument();
});
