import * as actionTypes from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          amount: 1,
        },
      ];

    case actionTypes.CHANGE_AMOUNT_IN_CART:
      return state.map((item) => {
        if (item.id !== action.payload.id) return item;
        return {
          ...item,
          amount: action.payload.amount,
        };
      });
    case actionTypes.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
