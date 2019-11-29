import { combineReducers } from 'redux';
import rates from './rates';
import assets from './assets';

export default combineReducers({ assets, rates });
