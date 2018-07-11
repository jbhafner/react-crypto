import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import myCoins from "./myCoins";

const rootReducer = combineReducers({
  currentUser,
  errors,
  myCoins
});

export default rootReducer;
