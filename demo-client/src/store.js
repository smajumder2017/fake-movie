import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { user, movies } from "./redux/userReducer";

const middlewares = [thunk, logger];

const store = createStore(
  combineReducers({ user, movies }),
  applyMiddleware(...middlewares)
);

export { store };
