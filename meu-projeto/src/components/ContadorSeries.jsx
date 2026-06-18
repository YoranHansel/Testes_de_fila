import { useState } from 'react'

function ContadorSeries() {
  const [n, setN] = useState(0)
  return <button onClick={() => setN(n + 1)}>Série feita ({n})</button>
}
export default ContadorSeries
