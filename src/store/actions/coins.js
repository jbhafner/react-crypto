import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
  GET_ALL_COINS,
  GET_MY_COINS,
  GET_MY_COIN_PRICES,
  ADD_MY_COIN,
  REMOVE_MY_COIN
} from "../actionCreators";

// export const loadAllCoins = allCoins => ({
//   type: GET_ALL_COINS,
//   allCoins
// });

export const loadCoins = myCoins => ({
  type: GET_MY_COINS,
  myCoins
});

export const remove = id => ({
  type: REMOVE_MY_COIN,
  id
});

export const addCoin = coin => ({
  type: ADD_MY_COIN,
  coin
});

export const removeCoin = (user_id, coin_id) => {
  console.log("removeCoin called / user_id:", user_id, "coin_id", coin_id);
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/myCoins/${coin_id}`)
      .then(() => dispatch(remove(coin_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

// export const fetchAllCoins = () => {
//   // const id = currentUser.user.id;
//   console.log("fetchAllCoins called");
//   return dispatch => {
//     return apiCall("get", `/allCoins`)
//       .then(res => {
//         console.log("fetchCoins / res", res);
//         dispatch(loadAllCoins(res));
//       })
//       .catch(err => {
//         console.log("fetchAllCoins / catch called / err", err);
//         dispatch(addError(err.message));
//       });
//   };
// };

export const fetchCoins = id => {
  // const id = currentUser.user.id;
  console.log("fetchCoins called");
  return dispatch => {
    return apiCall("get", `/api/users/${id}/myCoins`)
      .then(res => {
        console.log("fetchCoins / res", res);
        dispatch(loadCoins(res));
      })
      .catch(err => {
        console.log("fetchCoins / catch called / err", err);
        dispatch(addError(err.message));
      });
  };
};

export const postNewCoin = coin => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  console.log("coins.js/postNewCoin() - coin", coin);
  console.log(
    "coins.js/postNewCoin() - currentUser",
    currentUser,
    "coin",
    coin
  );
  return apiCall("post", `/api/users/${id}/myCoins`, { ...coin })
    .then(res => {
      // dispatch(loadCoins(res));
      console.log("actions/coin.js/postNewCoin - res", res);
      dispatch(addCoin(res));
    })
    .catch(err => dispatch(addError(err.message)));
};
