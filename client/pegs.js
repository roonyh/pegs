import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const root = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(root, document.getElementById('root'));
