import { combineReducers } from "redux";
// redux-fayl-page
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const combaReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default combaReducers;
