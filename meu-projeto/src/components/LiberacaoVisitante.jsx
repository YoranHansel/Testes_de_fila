import { useState } from 'react'

function LiberacaoVisitante() {
  const [visitante, setVisitante] = useState('')
  const [documento, setDocumento] = useState('')
  const [msg, setMsg] = useState('')

  function liberar() {
    if (visitante && documento) setMsg('Acesso liberado')
    else setMsg('Informe os dados')
  }

  return (
    <form>
      <label htmlFor="visitante">Visitante</label>
      <input id="visitante" value={visitante} onChange={(e) => setVisitante(e.target.value)} />
      <label htmlFor="documento">Documento</label>
      <input id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
      <button type="button" onClick={liberar}>Liberar</button>
      {msg && <p>{msg}</p>}
    </form>
  )
}
export default LiberacaoVisitante
