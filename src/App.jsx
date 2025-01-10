import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BemVindo } from './paginas/bemVindo/BemVindo';
import { Login } from './paginas/login/Login';
import { DashBoard } from './paginas/dashBoard/DashBoard';
import { ContextAppProvider } from './context/ContextApp';

function App() {
  return (
    <ContextAppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BemVindo />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </ContextAppProvider>
  );
}


export default App;
