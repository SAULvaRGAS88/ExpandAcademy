import React from 'react';
import { DashApp } from '../../components/dashApp/DashApp';
import CarrosselApp from '../../components/carrosselApp/CarrosselApp';

export const DashBoard = () => {
  return (
    <DashApp>
      {/* Conteúdo exclusivo para a página de Professores */}
      <section className="DashBoard">
        <h2>DashBoard</h2>
        <p>Aqui você pode visualizar o DashBoard.</p>
        {/* Adicione aqui qualquer componente ou conteúdo */}
        <CarrosselApp />
      </section>
    </DashApp>
  );
};
