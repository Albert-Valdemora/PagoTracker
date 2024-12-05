import React from 'react';
import ReactDOM from 'react-dom/client';
import { PagoTrackerApp } from './PagoTrackerApp';
import './styles/styles.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PagoTrackerApp />
  </React.StrictMode>
);

