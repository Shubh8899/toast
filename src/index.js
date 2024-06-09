import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContextProvider } from './ToastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </React.StrictMode>
);

reportWebVitals();
