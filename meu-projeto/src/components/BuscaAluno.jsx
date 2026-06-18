import { useState } from 'react'

function BuscaAluno() {
  const [nome, setNome] = useState('')
  const [msg, setMsg] = useState('')
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <button type="button" onClick={() => setMsg('Ficha de ' + nome)}>Buscar</button>
      {msg && <p>{msg}</p>}
    </form>
  )
}
export default BuscaAluno
