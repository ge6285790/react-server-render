import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App.js'
import createRoutes from './routes/routes';
import configureStore from './store/configureStore';
import reducers from './reducers/index';

// const state = JSON.parse(window.$REDUX_STATE);
const state = {
  // done: 'true',
};
console.log('1');
const store = configureStore(state, reducers);
console.log('2');
const routes = createRoutes(store);


match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  console.log('--',[...renderProps])
  render(
    <App
      store={store}
      browserHistory={browserHistory}
      renderProps={renderProps}
    />, document.getElementById('root'));
});


// console.log('aaa')
