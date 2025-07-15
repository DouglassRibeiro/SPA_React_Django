// src/Main.jsx (com o StrictMode desativado para teste)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main_styles.css';

// Apenas removemos as tags <React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);