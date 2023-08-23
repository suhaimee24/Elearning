import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import App from './App';

import { Provider } from 'react-redux'
import store from './redux/store'

const MyApp = () => (
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
