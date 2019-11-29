import {
  FETCH_MARKET_CURRENCIES_REQUEST,
  FETCH_MARKET_CURRENCIES_SUCCESS,
  FETCH_MARKET_CURRENCIES_ERROR,
} from '../actions/types';

export default (
  state = {
    id: '',
    currencyList: [],
    loading: false,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case FETCH_MARKET_CURRENCIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MARKET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencyList: action.payload,
        loading: false,
      };
    case FETCH_MARKET_CURRENCIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
