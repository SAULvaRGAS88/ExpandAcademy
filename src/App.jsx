import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BemVindo } from './paginas/bemVindo/BemVindo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BemVindo />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
