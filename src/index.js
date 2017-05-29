///3rd party
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
//Ours
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
