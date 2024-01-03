import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Store from './store';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import {  Action } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createstore } from 'redux';
import ComponentA from './ComponentA'; 


const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
      <store />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
      <ComponentB />
    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
  ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
      <ComponentC />
    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
  
  ReactDOM.render(
    <Provider store={store}>
      <ComponentA />
    </Provider>,
    document.getElementById('root')
  );