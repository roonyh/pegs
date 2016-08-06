import React from 'react';

import { render } from 'react-dom';

// Import css

// Import Components
import App from './components/App';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const root = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(root, document.getElementById('root'));
