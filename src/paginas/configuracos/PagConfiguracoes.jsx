// PagConfiguracoes.js
import React from 'react';
import { DashApp } from '../../components/dashApp/DashApp';

export const PagConfiguracoes = () => {
  return (
    <DashApp>
      {/* Conteúdo exclusivo para a página de Configurações */}
      <section className="configuracoes">
        <h2>Configurações</h2>
        <p>Altere suas configurações de conta e preferências aqui.</p>
        {/* Adicione formulários ou outras configurações aqui */}
      </section>
    </DashApp>
  );
};
