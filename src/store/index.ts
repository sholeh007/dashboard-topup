import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "../features/Auth/reducer";
import toggleReducer from "../features/ToggleSidebar/reducer";

const composerEnchancer = compose;
const rootReducer = combineReducers({
  auth: authReducer,
  toggled: toggleReducer,
});
const store = createStore(
  rootReducer,
  composerEnchancer(applyMiddleware(thunk))
);

export default store;
