import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/app/App';
import Toast from './components/error-message/toast';
import { browserHistory } from './store/browser-history';
import HistoryRouter from './store/history-router';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <Toast />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
