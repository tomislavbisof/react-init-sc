import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { injectGlobal } from 'styled-components';

import combineReducers from './combineReducers';
import colors from './constants/colors';

import App from './App';

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

injectGlobal`
  html, body, h1, p, ul {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${colors.body};
    color: ${colors.secondary};

    font-family: 'Roboto', sans-serif;
    font-size: 13px;
  }
`;
