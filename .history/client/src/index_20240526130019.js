// index.js hoặc main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css" 
import reduxStore  from "./redux/store";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import {PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
const {store, persistor} =reduxStore()
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);