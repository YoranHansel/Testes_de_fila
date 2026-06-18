import { useState } from "react";

function PainelChekin() {
  const [fila, setFila] = useState(0);

  const registrarEntrada = () => {
    setFila(fila + 1);
  };

  return (
    <div>
      <p>Alunos na sala: {fila}</p>

      {fila === 0 && <p>Sala Vazia</p>}
      {fila > 0 && fila < 8 && <p>{fila} treinando agora</p>}
      
      {fila >= 8 && (
        <div role="alert">
          <p>Sala lotada</p>
        </div>
      )}

      <button onClick={registrarEntrada}>Registrar entrada</button>
    </div>
  );
}

export default PainelChekin;