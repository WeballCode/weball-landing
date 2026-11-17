import Page from './components/Page.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Problem from './components/Problem.jsx'
import Procesos from './components/Procesos.jsx'
import Modular from './components/Modular.jsx'
import Clientes from './components/Clientes.jsx'
import { TribunalSection } from './components/Modules.jsx'
import PricingTeaser from './components/PricingTeaser.jsx'
import Faq from './components/Faq.jsx'

// Página principal (V2): el sistema de las grandes ligas.
// Escala → los 8 procesos → contratá sólo lo que te falta → ligas reales → Tribunal IA → precio → dudas.
// Cada proceso tiene su página (<slug>.html); las ligas, ligas.html.
export default function App() {
  return (
    <Page page="inicio">
      <Hero />
      <Ticker />
      <Problem />
      <Procesos />
      <Modular />
      <Clientes />
      <TribunalSection />
      <PricingTeaser />
      <Faq />
    </Page>
  )
}
