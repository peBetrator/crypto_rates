import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_ERROR,
  CHANGE_TARGET_CURRENCY,
} from '../actions/types';

export default (
  state = {
    supported_cur: [],
    current_cur: 'eur',
    loading: false,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        supported_cur: action.payload,
        loading: false,
      };
    case FETCH_CURRENCIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CHANGE_TARGET_CURRENCY:
      return {
        ...state,
        current_cur: action.payload,
      };

    default:
      return state;
  }
};
