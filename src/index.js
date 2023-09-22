import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReduces } from './redux/reducers/reducer'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReduces, applyMiddleware(thunk, logger)); 
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
