import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestContext from "../../TestContext";
import Navbar from "../Navbar";

it("showing the amount of items in cart", () => {
  const { getByTestId } = render(
    <TestContext>
      <Navbar links={[{ path: "/nowhere", name: "nowhere" }]} />
    </TestContext>
  );
  expect(getByTestId("num-items")).toHaveTextContent("2");
  expect(getByTestId("num-items")).not.toHaveTextContent("7");
});
