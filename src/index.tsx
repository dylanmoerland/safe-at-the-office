import React from 'react';
import ReactDOM from 'react-dom';
import 'app/global/firebase';
import AuthProvider from 'app/auth/providers/AuthProvider';
import ConfigProvider from 'app/config/providers/ConfigProvider';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
