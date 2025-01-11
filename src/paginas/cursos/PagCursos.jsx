import React from 'react'
import { DashApp } from '../../components/dashApp/DashApp'

export const PagCursos = () => {
    return (
        <DashApp>
            {/* Conteúdo exclusivo para a página de Professores */}
            <section className="cursos">
                <h2>Cursos</h2>
                <p>Aqui você pode gerenciar os Cursos cadastrados.</p>
                {/* Adicione aqui qualquer componente ou conteúdo  */}
            </section>
        </DashApp>
    )
}
