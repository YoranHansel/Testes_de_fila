import { useState } from 'react'

function PainelAgendamentos({ onConfirmar }) {
  const [horarios, setHorarios] = useState(0)
  return (
    <section>
      <p>Agendados: {horarios}</p>
      <button onClick={() => setHorarios(horarios + 1)}>Adicionar horário</button>
      <button onClick={() => onConfirmar(horarios)}>Confirmar agenda</button>
    </section>
  )
}
export default PainelAgendamentos
