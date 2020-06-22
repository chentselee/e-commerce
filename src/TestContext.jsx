import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const _initialState = {
  categories: [
    {
      _id: "456",
      name: "food",
      display_name: "Food",
      num_products: 10,
      id: "456",
    },
  ],
  cart: [
    {
      _id: "123",
      name: "Burger",
      amount: 4,
      price: 100,
      category: {
        _id: "456",
        name: "food",
        display_name: "Food",
        num_products: 10,
        id: "456",
      },
    },
    {
      _id: "1234",
      name: "Fries",
      amount: 2,
      price: 55,
      category: {
        _id: "456",
        name: "food",
        display_name: "Food",
        num_products: 10,
        id: "456",
      },
    },
  ],
};

const reducer = (state, action) => {
  return state;
};

const TestContext = ({ initialState = _initialState, children }) => {
  const store = createStore(reducer, initialState);
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default TestContext;
