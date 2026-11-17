import Page from './components/Page.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Problem from './components/Problem.jsx'
import Liga from './components/Liga.jsx'
import Modular from './components/Modular.jsx'
import Leagues from './components/Leagues.jsx'
import { TribunalSection } from './components/Modules.jsx'
import PricingTeaser from './components/PricingTeaser.jsx'
import Faq from './components/Faq.jsx'

// Página principal: Weball como el sistema de las grandes ligas.
// Los procesos en detalle, los precios y los inversores tienen su propia página.
export default function App() {
  return (
    <Page page="inicio">
      <Hero />
      <Ticker />
      <Problem />
      <Liga />
      <Modular />
      <Leagues />
      <TribunalSection />
      <PricingTeaser />
      <Faq />
    </Page>
  )
}
