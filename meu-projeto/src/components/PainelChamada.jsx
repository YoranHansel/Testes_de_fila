import { useState } from "react"

// onFecharChamada e uma funcao recebida por prop (o "pai" entrega).
// O painel a chama, passando o total de presentes, ao fechar a chamada.
export default function PainelChamada({ onFecharChamada }) {
  const [presentes, setPresentes] = useState(0)   // quantos presentes na chamada

  return (
    <section>
      <p>Presentes: {presentes}</p>                                // texto do total
      <button onClick={() => setPresentes(presentes + 1)}>Marcar presença</button>
      <button onClick={() => onFecharChamada(presentes)}>Fechar chamada</button>
    </section>
  )
}