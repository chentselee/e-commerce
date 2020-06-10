import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const INITIAL_STATE = {};

export default createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
