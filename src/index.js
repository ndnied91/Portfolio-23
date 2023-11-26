import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context';
import ReactGA from 'react-ga';

ReactGA.initialize(import.meta.TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <React.StrictMode>
      <App />
      <ToastContainer position="top-center" autoClose={2000} />
    </React.StrictMode>
  </AppProvider>
);
