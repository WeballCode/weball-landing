import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Audiences from './components/Audiences.jsx'
import Credential from './components/Credential.jsx'
import Tribunal from './components/Tribunal.jsx'
import Clubs from './components/Clubs.jsx'
import Competition from './components/Competition.jsx'
import Investors from './components/Investors.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Audiences />
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
