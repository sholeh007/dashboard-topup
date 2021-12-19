import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composerEnchancer = compose;
const rootReducer = combineReducers({});
const store = createStore(
  rootReducer,
  composerEnchancer(applyMiddleware(thunk))
);

export default store;
