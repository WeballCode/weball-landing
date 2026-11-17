import Page from './components/Page.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Problem from './components/Problem.jsx'
import Liga from './components/Liga.jsx'
import { TribunalSection } from './components/Modules.jsx'
import Scores from './components/Scores.jsx'
import Asociacion from './components/Asociacion.jsx'
import Sponsors from './components/Sponsors.jsx'
import PricingTeaser from './components/PricingTeaser.jsx'
import Faq from './components/Faq.jsx'

// Página principal, corta y directa. Las soluciones, los precios y los inversores tienen su propia página.
export default function App() {
  return (
    <Page page="inicio">
      <Hero />
      <Ticker />
      <Problem />
      <Liga />
      <TribunalSection />
      <Scores />
      <Asociacion />
      <Sponsors />
      <PricingTeaser />
      <Faq />
    </Page>
  )
}
