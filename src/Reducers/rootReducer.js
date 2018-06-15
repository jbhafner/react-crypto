import {
  GET_ALL_COINS,
  GET_MY_COINS,
  ADD_MY_COIN,
  REMOVE_MY_COIN
} from "../Actions/actionCreators";

const initalState = {
  allCoins: [],
  myCoins: []
};

export default function rootReducer(state = initalState, action) {
  switch (action.type) {
    case GET_ALL_COINS:
      return { ...state, allCoins: action.data };
    case GET_MY_COINS:
      return { ...state, myCoins: action.data };
    case ADD_MY_COIN:
      return { ...state, myCoins: [state.myCoins, action.data] };
    case REMOVE_MY_COIN:
      return { ...state, myCoins: action.data };
    default:
      return state;
  }
}
