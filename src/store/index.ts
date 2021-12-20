import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "../features/Auth/reducer";

const composerEnchancer = compose;
const rootReducer = combineReducers({ auth: authReducer });
const store = createStore(
  rootReducer,
  composerEnchancer(applyMiddleware(thunk))
);

export default store;
