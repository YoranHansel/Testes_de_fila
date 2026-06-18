import { useState } from 'react'

function ContadorVagas() {
  const [n, setN] = useState(6)
  const faixa = n <= 5 ? 'Poucas vagas' : 'Vagas abertas'
  return (
    <div>
      <p>Vagas: {n}</p>
      <p>{faixa}</p>
      <button onClick={() => setN(n - 1)}>Reservar vaga</button>
    </div>
  )
}
export default ContadorVagas
