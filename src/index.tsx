import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/app/App';
import { checkAuthAction } from './services/api-action/user-process';
import { getOffers } from './services/api-action/offers';

store.dispatch(getOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
