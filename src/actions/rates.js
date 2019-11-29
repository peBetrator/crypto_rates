import axios from 'axios';
import { features, URL } from '../common/consts';
import {
  FETCH_MARKET_CURRENCIES_REQUEST,
  FETCH_MARKET_CURRENCIES_SUCCESS,
  FETCH_MARKET_CURRENCIES_ERROR,
} from './types';

const { MARKET_CURRENCIES } = features;

const setLoading = feature => {
  switch (feature) {
    case MARKET_CURRENCIES:
      return {
        type: FETCH_MARKET_CURRENCIES_REQUEST,
      };
  }
};

const errorCatched = errorMsg => {
  return {
    type: FETCH_MARKET_CURRENCIES_ERROR,
    payload: errorMsg,
  };
};

// export const getAllCurrencies = () => async dispatch => {
//   try {
//     dispatch(setLoading(fetures.currency));

//     const response = await axios.get(`${URL}/coins/list`);
//     dispatch({
//       type: DATA_FETCHED,
//       payload: response.data,
//     });
//   } catch (e) {
//     console.log(e);
//     dispatch(errorCatched(e.message));
//   }
// };

export const getAllCurrenciesMarket = (
  targetCurrency,
  order = 'market_cap_desc',
  perPage = 100,
  page = '1'
) => async dispatch => {
  try {
    dispatch(setLoading(features.MARKET_CURRENCIES));

    const response = await axios.get(
      `${URL}/coins/markets?vs_currency=${targetCurrency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=7d`
    );
    dispatch({
      type: FETCH_MARKET_CURRENCIES_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
    dispatch(errorCatched(e.message));
  }
};
