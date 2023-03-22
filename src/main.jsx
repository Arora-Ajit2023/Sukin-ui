// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header1 from './Components/Header/Header1';
import Header2 from './Components/Header/Header2';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Header1 />
    <Header2 />
    <App />
  </div>
);
