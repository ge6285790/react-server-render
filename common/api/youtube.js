import request from 'superagent';
import { urlPath } from '../constants/config';
// request.get(url)
// request.post(url)
// request.put(url)
// request.delete(url)

export function searchVideo(searchText) {
  const url = '/login';
  // const pwd = crypto.createHash('md5').update(password).digest('hex');

  return new Promise((resolve, reject) => {
    request.post(url)
      .set('Accept', 'application/json')
      .send(searchText)
      .end((err, res) => {
        if (err || res.status !== 200 || res.body.result !== 1) {
          if (err || res.status !== 200) {
            resolve(res.body);
          } else {
            resolve(res.body);
          }
        } else {
          resolve(res.body);
        }
      });
  });
}
