export const GET_ALL_COINS = "GET_ALL_COINS";
export const GET_MY_COINS = "GET_MY_COINS";
export const GET_MY_COIN_PRICES = "GET_MY_COIN_PRICES";
export const ADD_MY_COIN = "ADD_MY_COIN";
export const REMOVE_MY_COIN = "REMOVE_MY_COIN";

export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CONTENT = "SET_CONTENT";

function handleGetAllCoins(data) {
  return {
    type: GET_ALL_COINS,
    data
  };
}

function handleGetMyCoins(data) {
  return {
    type: GET_MY_COINS,
    data
  };
}

function handleGetMyCoinPrices(data) {
  return { type: GET_MY_COIN_PRICES, data };
}

function handleAddCoin(data) {
  return {
    type: ADD_MY_COIN,
    data
  };
}

function handleRemoveCoin(id) {
  return {
    type: REMOVE_MY_COIN,
    id
  };
}

export function getAllCoins() {
  console.log("getAllCoins funtion called");
  return dispatch => {
    return fetch("http://localhost:3025/api/coins/allCoins")
      .then(res => res.json())
      .then(data => dispatch(handleGetAllCoins(data)))
      .catch(err => console.log("Something went wrong!", err));
  };
}

export function getMyCoins() {
  console.log("getMyCoins function called from actionCreator");
  return dispatch => {
    return fetch("http://localhost:3025/api/coins/")
      .then(res => res.json())
      .then(data => dispatch(handleGetMyCoins(data)))
      .catch(err => console.log("Something went wrong!", err));
  };
}

export function getMyCoinPrices(coinPrices) {
  console.log("getMyCoinPrices called from actionCreator", coinPrices);
  return (coinPrices = dispatch => {
    type: GET_MY_COIN_PRICES, coinPrices;
  });
}
