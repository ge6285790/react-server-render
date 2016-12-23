import * as types from '../constants/actionTypes';
import * as youtubeApi from '../api/youtube';

export function searchInit() {
  return (dispatch, getState) => {
    youtubeApi.searchVideo().then((data) => {
      dispatch({
        type: types.YOUTUBE_SEARCH_INIT,
        data,
      });
    });
  };
}
