import * as types from '../constants/actionTypes';
import * as youtubeApi from '../api/youtube';

export function searchInit() {
  return {
    types: [
      types.YOUTUBE_SEARCH_INIT_REQUEST,
      types.YOUTUBE_SEARCH_INIT_SUCCESS,
      types.YOUTUBE_SEARCH_INIT_ERROR,
    ],
    promise: youtubeApi.searchVideo(),
  };
}

export function search(searchText) {
  return {
    types: [
      types.YOUTUBE_SEARCH_INIT_REQUEST,
      types.YOUTUBE_SEARCH_INIT_SUCCESS,
      types.YOUTUBE_SEARCH_INIT_ERROR,
    ],
    promise: youtubeApi.searchVideo(searchText),
  };
}

// 不用經過 api 呼叫，即使用 type 以及 data 即可。
export function searchBarSizeChange(value, callback) {
  return {
    type: types.YOUTUBE_SEARCH_BAR_SIZE_CHANGE,
    data: youtubeApi.searchBarSizeChange(value, callback),
  };
}
