import { ADD_ERROR, REMOVE_ERROR } from "../actionCreators";

export const addError = error => ({
  type: ADD_ERROR,
  error
});

export const removeError = () => ({
  type: REMOVE_ERROR
});
