import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";

export function saveToSession(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export function loadFromSession(key) {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
}

export default combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});
