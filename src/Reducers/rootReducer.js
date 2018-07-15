import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import coins from "./myCoins";

const rootReducer = combineReducers({
  currentUser,
  errors,
  coins
});

export default rootReducer;
