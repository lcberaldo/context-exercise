import React from 'react';
import { GlobalContext } from './GlobalContext';

const Limpar = () => {
  const context = React.useContext(GlobalContext);

  const limparDados = context?.limparDados

  return (
    <button onClick={limparDados} style={{ color: 'white' }}>
      Limpar dados
    </button>
  );
};

export default Limpar;
