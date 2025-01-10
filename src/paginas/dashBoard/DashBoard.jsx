import React from 'react';
import './DashBoard.css';
import { MenuApp } from '../../components/menuApp/MenuApp';
import { InformativoDashAside } from './InformativoDashAside';
import { useDataContext } from '../../context/ContextApp';

export const DashBoard = () => {

  const { usuarioLogado } = useDataContext();
  console.log("Usuário logado:", usuarioLogado);

  return (
    <div className="dashboard">

      {/* Barra de navegação */}
      <header className="dashboard-header margin-bottom=2 ">
        <MenuApp />
      </header>

      <main className="dashboard-main">
        {/* Lateral esquerda */}
        <aside className="dashboard-aside">
          <nav>
            <ul>
              <li><a href="#cursos">Cursos</a></li>
              <li><a href="#professores">Professores</a></li>
              <li><a href="#alunos">Alunos</a></li>
              <li><a href="#configuracoes">Configurações</a></li>
              <li><a href="#fale-conosco">Fale Conosco</a></li>
            </ul>
            <InformativoDashAside />
          </nav>
        </aside>

        {/* Conteúdo principal */}
        <section className="dashboard-content">
          <h1>Bem-vindo ao Painel</h1>
          <p>{usuarioLogado || "Usuário desconhecido"}</p>
          <p>Escolha uma opção no menu ao lado para começar.</p>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 ExpandAcademy. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
};
