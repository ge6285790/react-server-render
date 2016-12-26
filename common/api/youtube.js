import request from 'superagent';
import youtubeSearch from 'youtube-api-search';
import { urlPath } from '../constants/config';
import { key } from '../constants/APIKey';

// request.get(url)
// request.post(url)
// request.put(url)
// request.delete(url)

export function searchVideo(searchText = 'lakewood M32cp') {
  return new Promise((resolve, reject) => {
    youtubeSearch({ key, term: searchText }, (data) => {
      const result = {
        data,
      };
      resolve(result);
    });
  });
}

export function searchBarSizeChange(value, callback) {
  // callback()
  return value;
}
