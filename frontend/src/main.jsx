// src/main.jsx - Correto
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // 1. Importe o HashRouter
import App from './App.jsx';
import './main_styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  {/* 2. Envolva o <App/> com o HashRouter aqui */}
      <App />
    </HashRouter>
  </React.StrictMode>
);