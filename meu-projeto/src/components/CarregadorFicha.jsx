import { useState, useEffect } from 'react'

function CarregadorFicha() {
  const [pronta, setPronta] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setPronta(true), 50)
    return () => clearTimeout(id)
  }, [])
  return <p>{pronta ? 'Ficha pronta!' : 'Carregando ficha...'}</p>
}
export default CarregadorFicha
