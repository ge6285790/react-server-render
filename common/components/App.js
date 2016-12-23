import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Router, browserHistory, match } from 'react-router';
import { Router, match } from 'react-router';
import { Provider } from 'react-redux';
import createRoutes from '../routes/routes';
import configureStores from '../store/configureStore';
// import reducers from './reducers';

// const state = JSON.parse(window.$REDUX_STATE);
// const state = {
//   done: 'true',
// };
// const store = configureStores(state);
// const routes = createRoutes(store, reducers);

// class App extends Component {
//   render() {
//     return (
//       <div>
//         aaaa6
//       </div>
//     );
//   }
// }
// match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
//
// });

// const App = (props) => (
//   <Provider store={props.store}>
//     <Router history={props.browserHistory} {...props.renderProps} />
//   </Provider>
// );

class App extends Component {
  render() {
    const { store, browserHistory, renderProps } = this.props;
    // console.log('renderProps', [...renderProps]);
    return (
      <Provider store={store}>
        <Router history={browserHistory} {...renderProps} />
      </Provider>
    );
  }
}

export default App;
