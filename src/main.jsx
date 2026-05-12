import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Globalstyle } from './styleglobal/style'
import Rotas from './rotas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyle/>
    <Rotas/>
  </StrictMode>,
)
