import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './component/App';
import store from './store';

import "./styles/main.scss";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
)
