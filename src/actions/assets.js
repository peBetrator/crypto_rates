import axios from 'axios';
import { features, URL } from '../common/consts';
import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_ERROR,
  CHANGE_TARGET_CURRENCY,
} from './types';

const { SUPPORTED_CURRENCIES } = features;

const setLoading = feature => {
  switch (feature) {
    case SUPPORTED_CURRENCIES:
      return {
        type: FETCH_CURRENCIES_REQUEST,
      };
  }
};

const errorCatched = errorMsg => {
  return {
    type: FETCH_CURRENCIES_ERROR,
    payload: errorMsg,
  };
};

export const getAllSupportedCurrencies = () => async dispatch => {
  try {
    dispatch(setLoading(features.SUPPORTED_CURRENCIES));

    const response = await axios.get(`${URL}/simple/supported_vs_currencies`);
    dispatch({
      type: FETCH_CURRENCIES_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
    dispatch(errorCatched(e.message));
  }
};

export const changeTargetCurrency = currency => dispatch => {
  dispatch({ type: CHANGE_TARGET_CURRENCY, payload: currency });
};
