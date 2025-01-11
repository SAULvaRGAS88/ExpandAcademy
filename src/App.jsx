import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BemVindo } from './paginas/bemVindo/BemVindo';
import { Login } from './paginas/login/Login';
import { DashBoard } from './paginas/dashBoard/DashBoard';
import { ContextAppProvider } from './context/ContextApp';
import { PagProfessores } from './paginas/professores/PagProfessores';
import { PagConfiguracoes } from './paginas/configuracos/PagConfiguracoes';
import { PagCursos } from './paginas/cursos/PagCursos';
import { PagAlunos } from './paginas/alunos/PagAlunos';

function App() {
  return (

    <BrowserRouter>
      <ContextAppProvider>
        <Routes>
          <Route path="/" element={<BemVindo />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="professores" element={<PagProfessores />} />
          <Route path="configurações" element={<PagConfiguracoes />} />
          <Route path="cursos" element={<PagCursos />} />
          <Route path="alunos" element={<PagAlunos />} />
        </Routes>
      </ContextAppProvider>
    </BrowserRouter>

  );
}


export default App;
