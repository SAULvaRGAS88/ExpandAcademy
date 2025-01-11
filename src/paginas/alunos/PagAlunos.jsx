import React from 'react'
import { DashApp } from '../../components/dashApp/DashApp'

export const PagAlunos = () => {
    return (
        <DashApp>
            {/* Conteúdo exclusivo para a página de Professores */}
            <section className="alunos">
                <h2>Alunos</h2>
                <p>Aqui você pode gerenciar os professores cadastrados.</p>
                {/* Adicione aqui qualquer componente ou conteúdo relacionado aos Alunos */}
            </section>
        </DashApp>
    )
}
