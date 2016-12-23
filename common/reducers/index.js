import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import update from 'react-addons-update';
import * as types from '../constants/actionTypes';

const initialItems = {};

function ad(state = initialItems, action = {}) {
  switch (action.type) {
    case types.AD_REQUEST:
    case types.AD_ERROR:
      return state;

    case types.AD_SUCCESS:
      return update(state, { $set: action.data });

    default:
      return state;
  }
}
function program(state = initialItems, action = {}) {
  switch (action.type) {
    case types.LIVE_REQUEST:
      return state;

    case types.LIVE_ERROR:
      return update(state, { $set: action.data });

    case types.LIVE_SUCCESS:
      return update(state, { $set: action.data });

    default:
      return state;
  }
}

const reducers = combineReducers({
  ad,
  program,
  routing: routerReducer,
  // routerReducer,
});

export default reducers;
