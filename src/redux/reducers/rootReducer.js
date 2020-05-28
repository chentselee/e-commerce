import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});
