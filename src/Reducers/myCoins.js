import {
  GET_ALL_COINS,
  GET_MY_COINS,
  GET_MY_COIN_PRICES,
  ADD_MY_COIN,
  REMOVE_MY_COIN
} from "../Actions/actionCreators";

const initalState = {
  allCoins: [],
  myCoins: [],
  myCoinPrices: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_COINS:
      return { ...state, allCoins: action.data };
    case GET_MY_COINS:
      return { ...state, myCoins: action.data };
    case GET_MY_COIN_PRICES:
      return { ...state, myCoinPrices: action.data };
    case ADD_MY_COIN:
      return { ...state, myCoins: [...state.myCoins, action.data] };
    case REMOVE_MY_COIN:
      let coins = state.myCoins.filter(val => val._id !== action.id);
      return { ...state, myCoins: coins };
    default:
      return state;
  }
};
