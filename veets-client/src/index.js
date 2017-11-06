import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/containers/Layout';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import rootReducer from './reducers/index.js';
import NavBar from './components/NavBar.js'
import Home from './containers/Home.js'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
