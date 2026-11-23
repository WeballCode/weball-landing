import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AntesAhora from './components/AntesAhora.jsx'
import Tareas from './components/Tareas.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Ahorro from './components/Ahorro.jsx'
import Faq from './components/Faq.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// Landing V3: "Organizá tu liga con tu IA favorita".
// Portada con el chat → antes y ahora → las 4 tareas → cómo funciona → calculadora de ahorro → dudas → contacto.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AntesAhora />
        <Tareas />
        <ComoFunciona />
        <Ahorro />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
