import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './components/Page.jsx'
import Modules from './components/Modules.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page page="soluciones">
      <Modules />
    </Page>
  </StrictMode>,
)
