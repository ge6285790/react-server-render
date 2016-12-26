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

function youtube(state = { searchBarSize: 30 }, action = {}) {
  switch (action.type) {
    case types.YOUTUBE_SEARCH_INIT_REQUEST:
      return state;
    case types.YOUTUBE_SEARCH_INIT_SUCCESS:
      return update(state, {
        youtubeList: { $set: action.data },
      });
    case types.YOUTUBE_SEARCH_INIT_ERROR:
      return update(state, {
        youtubeList: { $set: action.data },
      });
    case types.YOUTUBE_SEARCH_INIT:
      return update(state, {
        youtubeList: { $set: action.data },
      });
    case types.YOUTUBE_SEARCH_BAR_SIZE_CHANGE:
      return update(state, {
        searchBarSize: { $set: action.data },
      });
    default:
      return state;
  }
}

const reducers = combineReducers({
  ad,
  program,
  youtube,
  routing: routerReducer,
  // routerReducer,
});

export default reducers;
