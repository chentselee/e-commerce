import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const INITIAL_STATE = {};

export default createStore(
  rootReducer,
  INITIAL_STATE,
  compose(applyMiddleware(thunk))
);
