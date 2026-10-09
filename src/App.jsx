import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Audiences from './components/Audiences.jsx'
import Products from './components/Products.jsx'
import System from './components/System.jsx'
import Credential from './components/Credential.jsx'
import Tribunal from './components/Tribunal.jsx'
import Competition from './components/Competition.jsx'
import OfficialApp from './components/OfficialApp.jsx'
import Profiles from './components/Profiles.jsx'
import Sponsors from './components/Sponsors.jsx'
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
        <Audiences />
        <Products />
        <System />
        <Credential />
        <Tribunal />
        <Competition />
        <OfficialApp />
        <Profiles />
        <Sponsors />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
