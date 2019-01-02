import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);
console.log(store.getState());

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.querySelector('#app'));