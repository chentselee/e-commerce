import * as actionTypes from "../actionTypes";
import { saveToSession, loadFromSession } from "./rootReducer";

const KEY = "cart";
let newState;
export default (state = loadFromSession(KEY), action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      newState = [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          amount: 1,
        },
      ];
      saveToSession(KEY, newState);
      return newState;

    case actionTypes.CHANGE_AMOUNT_IN_CART:
      newState = state.map((item) => {
        if (item.id !== action.payload.id) return item;
        return {
          ...item,
          amount: action.payload.amount,
        };
      });
      saveToSession(KEY, newState);
      return newState;
    case actionTypes.REMOVE_FROM_CART:
      newState = state.filter((item) => item.id !== action.payload.id);
      saveToSession(KEY, newState);
      return newState;
    default:
      return state;
  }
};
