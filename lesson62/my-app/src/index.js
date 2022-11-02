import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import './index.css';
=======
import './index.css';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> d9538636367796709c533322e57efbe54488ccc0

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> d9538636367796709c533322e57efbe54488ccc0
