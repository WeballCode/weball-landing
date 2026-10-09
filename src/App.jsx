import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Audiences from './components/Audiences.jsx'
import Products from './components/Products.jsx'
import Credential from './components/Credential.jsx'
import Tribunal from './components/Tribunal.jsx'
import Clubs from './components/Clubs.jsx'
import Competition from './components/Competition.jsx'
import Investors from './components/Investors.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-marino font-sans text-blanco antialiased">
      <Navbar />
      <main>
        <Hero />
        <Audiences />
        <Products />
        <Credential />
        <Tribunal />
        <Clubs />
        <Competition />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
