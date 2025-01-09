import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BemVindo } from './paginas/bemVindo/BemVindo';
import { Login } from './paginas/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BemVindo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
