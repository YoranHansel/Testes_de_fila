import { useState } from 'react'

function ConfirmacaoAula() {
  const [confirmada, setConfirmada] = useState(false)
  return (
    <div>
      <button onClick={() => setConfirmada(true)}>Confirmar aula</button>
      {confirmada && <p>Aula confirmada!</p>}
    </div>
  )
}
export default ConfirmacaoAula
