import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import serialize from 'serialize-javascript';
import createRoutes from '../../common/routes/routes';
import promiseMiddleware from '../../common/middleware/promiseMiddleware';
import reducers from '../../common/reducers/index';
import fetchComponentsData from '../utils/fetchComponentsData';

const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
const store = finalCreateStore(reducers);
const routes = createRoutes(store);

function renderFullPage(url, html, initialState) {
  const jsSrc = (process.env.NODE_ENV === 'development') ? '/asset/js/bundle/bundle.js' : '/asset/js/bundle/bundle.min.js';
  const cssLink = (process.env.NODE_ENV === 'development') ? '' : '<link rel=stylesheet type="text/css" href="/asset/css/bundle/bundle.min.css">';
  let videoJs = '';
  let videoCss = '';

  // if (url.indexOf('live') !== -1 || url.indexOf('watch') !== -1) {
  //   videoJs = `<script src='/asset/js/videojs/videojs.min.js'></script>
  //                 <script async src='/asset/js/videojs/videojs-contrib-hls.min.js'></script>`;
  //
  //   videoCss = '<link href="/asset/css/videojs/videojs.min.css" rel="stylesheet">';
  // }

  return (
      `<!doctype html>
      <html lang='utf-8'>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <meta name='descripti2efon' content=''>
            <link rel='shortcut icon' href='/asset/img/favicon.ico' type='image/x-icon' />
            ${cssLink}
            ${videoJs}
            <title>isomorphic</title>
        </head>
        <body>
          <div id='root'>${html}</div>
          <script>window.$REDUX_STATE = ${serialize(JSON.stringify(initialState))}</script>

          <script async src=${jsSrc}></script>
        </body>
      </html>
      ${videoCss}`
  );
}

function getPageTemplate(req, store, renderProps, components) {
  console.log('store', store, renderProps);
  fetchComponentsData(store.dispatch, components, renderProps.params)
    .then(() => {
      const initView = renderToString((
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      ));
      const state = store.getState();
      return renderFullPage(req.url, initView, state);
    });
}

export default function isomorphic(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      // routing's leaf node put a static method fetchData(),
      // in server,  we can use react-router's match  to get component and to execute static function
      const components = renderProps.components[renderProps.components.length - 1].WrappedComponent;
      fetchComponentsData(store.dispatch, components, renderProps.params)
        .then(() => {

          const initView = renderToString((
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          ));
          const state = store.getState();
          return renderFullPage(req.url, initView, state);
        })
        .then((page) => {
          res.status(200).send(page);
        });
      // const page = renderFullPage(req.url, initView, state);
    } else {
      res.send(404, 'Not found');
    }
  });
}
