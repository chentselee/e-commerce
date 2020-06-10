import * as actionTypes from "../actionTypes";
import axios from "axios";

export const fetchProductSuccess = (data) => ({
  type: actionTypes.FETCH_PRODUCT_SUCCESS,
  payload: { data },
});
export const fetchProductFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCT_FAILURE,
  payload: { error },
});
export const cleanUpProducts = () => ({ type: actionTypes.CLEAN_UP_PRODUCTS });
export const fetchProduct = (params = {}) => {
  return (dispatch) => {
    axios
      .get(
        process.env.NODE_ENV === "development"
          ? process.env.API
          : "http://localhost:8000/products",
        { params }
      )
      .then((res) => res.data)
      .then((data) => dispatch(fetchProductSuccess(data)))
      .catch((error) => console.error(error));
  };
};
