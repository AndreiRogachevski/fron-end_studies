import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { todoStore } from './store/todoStore';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={ todoStore }>
      <App />
    </Provider>
  </React.StrictMode>
);
