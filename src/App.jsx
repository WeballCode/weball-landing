import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Products from './components/Products.jsx'
import Liga from './components/Liga.jsx'
import Scores from './components/Scores.jsx'
import Asociacion from './components/Asociacion.jsx'
import Sponsors from './components/Sponsors.jsx'
import Modules from './components/Modules.jsx'
import Investors from './components/Investors.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Las secciones alternan fondo marino y claro, como pide el manual de marca
export default function App() {
  return (
    <div className="min-h-screen bg-marino font-sans text-blanco antialiased">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Products />
        <Modules />
        <Liga />
        <Scores />
        <Asociacion />
        <Sponsors />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
