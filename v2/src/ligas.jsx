import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './components/Page.jsx'
import Ligas from './components/Ligas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page page="ligas">
      <Ligas />
    </Page>
  </StrictMode>,
)
