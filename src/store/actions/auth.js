import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionCreators";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  console.log("store/actions/auth.js - type", type, "userData", userData);

  return dispatch => {
    return new Promise((resolve, reject) => {
      console.log("post", `/api/auth/${type}`, userData);
      return apiCall("post", `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          console.log("store/actions/auth.js - token", token);
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch(err => {
          console.log("auth.js err", err);
          dispatch(addError(err.message));
          reject();
        });
    });
  };
}
