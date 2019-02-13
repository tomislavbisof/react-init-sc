import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import combineReducers from './combineReducers';

import App from './components/app/App';

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
