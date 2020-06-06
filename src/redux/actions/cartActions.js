import * as actionTypes from "../actionTypes";

export const addToCartAction = (product) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { product },
});

export const changeAmountInCart = (_id, amount) => ({
  type: actionTypes.CHANGE_AMOUNT_IN_CART,
  payload: { _id, amount },
});

export const removeFromCartAction = (_id) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: { _id },
});
