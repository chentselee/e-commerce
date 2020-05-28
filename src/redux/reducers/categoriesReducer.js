import * as actionTypes from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return [...action.payload.data];
    case actionTypes.FETCH_CATEGORIES_FAILURE:
      return [...action.payload.error];
    default:
      return state;
  }
};
