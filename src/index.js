import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './lib/reducers';
import { loadState, saveState } from './lib/localStorage';
import registerServiceWorker from './lib/registerServiceWorker';
import App from './components/App';

import './index.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
    filter: store.getState().filter
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
