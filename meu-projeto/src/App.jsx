import { useState } from 'react'
import './App.css'

import ContadorFila from './components/PainelChekin'

function App() {
  const [exibirPainel, setExibirPainel] = useState(false)

  return (
    <>
      {exibirPainel && <ContadorFila />}
    </>
  )
}

export default App