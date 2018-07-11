import { SET_CURRENT_USER } from "../Actions/actionCreators";

const DEFAULT_STATE = {
  isAuthenticated: false, // true when logged in
  user: {} // all user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // turn empty object into false or if there are keys, true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    default:
      return state;
  }
};
