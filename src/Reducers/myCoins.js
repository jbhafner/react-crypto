import {
  GET_ALL_COINS,
  GET_MY_COINS,
  GET_MY_COIN_PRICES,
  ADD_MY_COIN,
  REMOVE_MY_COIN
} from "../store/actionCreators";

const initialState = {
  allCoins: [],
  myCoins: [{ symbol: "BTC", name: "Bitcoin" }],
  myCoinPrices: []
};

export default (state = initialState, action) => {
  console.log("myCoins.js - action", action);
  switch (action.type) {
    case GET_ALL_COINS:
      return { ...state, allCoins: action.data };
    case GET_MY_COINS:
      return { ...state, myCoins: action.myCoins };
    case GET_MY_COIN_PRICES:
      return { ...state, myCoinPrices: action.data };
    case ADD_MY_COIN:
      console.log("myCoins.js called - state", state, "action", action);
      return {
        ...state,
        myCoins: [...state.myCoins, { ...action.coin }]
      };
    case REMOVE_MY_COIN:

      let coins = state.myCoins.filter(val => val._id !== action.id);
      return { ...state, myCoins: coins };
    default:
      return state;
  }
};
