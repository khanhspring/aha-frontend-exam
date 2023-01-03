import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className="dark">
    <div className="font-inter bg-cod-gray-800 text-white min-h-screen">
      <App />
    </div>
  </div>
);

reportWebVitals();
