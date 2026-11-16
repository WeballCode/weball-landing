import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './components/Page.jsx'
import Investors from './components/Investors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page page="inversores">
      <Investors />
    </Page>
  </StrictMode>,
)
