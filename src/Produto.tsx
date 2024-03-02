import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  if (dados === null)
    return (
      <div>
        <h1>Teste de contexto</h1>
        <p>o que tem nos dados é:</p>
        <p>DADOS é NULL</p>
      </div>
    );

  return (
    <div>
      <h1>Teste de contexto</h1>
      <p>o que tem nos dados é:</p>

      <ul>
        {dados.map((dado) => (
          <li key={dado.id}>{dado.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
