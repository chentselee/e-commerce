import * as actionTypes from "../actionTypes";

export const fetchCategoriesSuccess = (data) => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: { data },
});
export const fetchCategoriesFailure = (error) => ({
  type: actionTypes.FETCH_CATEGORIES_FAILURE,
  payload: { error },
});
export const fetchCategories = () => {
  return (dispatch) => {
    fetch(
      process.env.NODE_ENV === "development"
        ? process.env.API
        : "http://localhost:8000/categories"
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchCategoriesSuccess(data)))
      .catch((error) => fetchCategoriesFailure(error));
  };
};
