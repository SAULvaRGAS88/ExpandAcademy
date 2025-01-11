// DashBoard.js
import React from 'react';
import './DashApp.css';
import { MenuApp } from '../../components/menuApp/MenuApp';
import { InformativoDashAside } from './InformativoDashAside';
import { useNavigate } from 'react-router-dom';

export const DashApp = ({ children }) => {

    const navegate = useNavigate();

    const handledireciona = (item) => {
        navegate(`/${item.toLowerCase()}`)
    }

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
                            <li className='active' onClick={() => handledireciona('professores')}>Professores</li>
                            <li className='active' onClick={() => handledireciona('cursos')}>Cursos</li>
                            <li className='active' onClick={() => handledireciona('alunos')}>Alunos</li>
                            <li className='active' onClick={() => handledireciona('configurações')}>Configurações</li>
                            <li className='active' onClick={() => handledireciona('suporte')}>Suporte</li>
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
                <p>&copy; 2025 ExpandAcademy. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};
