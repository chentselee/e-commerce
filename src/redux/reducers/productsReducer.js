import * as actionTypes from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return [...state, ...action.payload.data];
    case actionTypes.FETCH_PRODUCT_FAILURE:
      console.error(action.payload.error);
      return [...state];
    case actionTypes.CLEAN_UP_PRODUCTS:
      return [];
    default:
      return state;
  }
};
