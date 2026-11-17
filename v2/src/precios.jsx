import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './components/Page.jsx'
import Pricing from './components/Pricing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page page="precios">
      <Pricing />
    </Page>
  </StrictMode>,
)
