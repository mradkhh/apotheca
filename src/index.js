import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Fonts/stylesheet.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import store from './Redux/store';


ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider>
      <BrowserRouter>
        <React.StrictMode>
         <App />
       </React.StrictMode>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
  ,
  document.getElementById('root')
);
