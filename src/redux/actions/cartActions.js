import * as actionTypes from "../actionTypes";

export const addToCartAction = (id, name, price) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { id, name, price },
});

export const changeAmountInCart = (id, amount) => ({
  type: actionTypes.CHANGE_AMOUNT_IN_CART,
  payload: { id, amount },
});

export const removeFromCartAction = (id) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: { id },
});
