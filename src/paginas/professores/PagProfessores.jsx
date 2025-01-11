// PagProfessores.js
import React from 'react';
import { DashApp } from '../../components/dashApp/DashApp';

export const PagProfessores = () => {
  return (
    <DashApp>
      {/* Conteúdo exclusivo para a página de Professores */}
      <section className="professores">
        <h2>Professores</h2>
        <p>Aqui você pode gerenciar os professores cadastrados.</p>
        {/* Adicione aqui qualquer componente ou conteúdo relacionado aos professores */}
      </section>
    </DashApp>
  );
};
