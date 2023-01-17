import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import store from './store/store';
import { Provider } from 'react-redux';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
