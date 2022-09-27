import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import App from './App';
import './style.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
