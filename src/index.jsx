import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Table from './Table.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Table  />
  </React.StrictMode>
);