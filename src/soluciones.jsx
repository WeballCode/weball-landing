import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './components/Page.jsx'
import Procesos from './components/Procesos.jsx'
import Modular from './components/Modular.jsx'
import Clientes from './components/Clientes.jsx'

// Los 8 procesos: cómo se encadenan, y cómo se contratan juntos o por separado
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page page="soluciones">
      <Procesos page />
      <Modular />
      <Clientes />
    </Page>
  </StrictMode>,
)
