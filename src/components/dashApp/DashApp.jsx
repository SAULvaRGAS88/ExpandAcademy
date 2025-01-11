// DashBoard.js
import React from 'react';
import './DashApp.css';
import { MenuApp } from '../../components/menuApp/MenuApp';
import { InformativoDashAside } from './InformativoDashAside';

export const DashApp = ({ children }) => {

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
                            <li><a href="#fale-conosco">Suporte</a></li>
                        </ul>
                        <InformativoDashAside />
                    </nav>
                </aside>

                {/* Conteúdo principal - Aqui o que for passado como 'children' será exibido */}
                <section className="dashboard-content">
                    {children}
                </section>
            </main>

            {/* Rodapé */}
            <footer className="dashboard-footer">
                <p>&copy; 2024 ExpandAcademy. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};
