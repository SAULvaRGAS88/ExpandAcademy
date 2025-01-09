import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Importando o componente App
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Criando a raiz uma única vez

// Usando StrictMode para envolver a aplicação
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
