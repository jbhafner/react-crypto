import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const removeMessage = (user_id, message_id) => {
  console.log("removeMessage called");
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

export const fetchMessages = () => {
  console.log("fetchMessages called");
  return dispatch => {
    return apiCall("get", "/api/messages")
      .then(res => {
        console.log("fetchMessages / res", res);
        dispatch(loadMessages(res));
      })
      .catch(err => {
        console.log("fetchMessages / catch called / err", err);
        dispatch(addError(err.message));
      });
  };
};

export const postNewMessage = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/messages`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
