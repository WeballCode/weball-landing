import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FuncionaCon from './components/FuncionaCon.jsx'
import Escribis from './components/Escribis.jsx'
import Conversacion from './components/Conversacion.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Ahorro from './components/Ahorro.jsx'
import Ligas from './components/Ligas.jsx'
import Comunidad from './components/Comunidad.jsx'
import Faq from './components/Faq.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import AgendaModal from './components/AgendaModal.jsx'

// Landing V3: "Organizá tu liga con tu IA favorita", con estética clara inspirada en Apple.
// Portada (notebook con el panel + celular con la IA) → con qué IA funciona → "Escribís. Weball lo hace." →
// toda tu liga en una conversación → cómo funciona y control → ahorro (a mano vs. con la IA) → ligas que ya usan Weball → comunidad (partidos de hoy) → preguntas → contacto.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FuncionaCon />
        <Escribis />
        <Conversacion />
        <ComoFunciona />
        <Ahorro />
        <Ligas />
        <Comunidad />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
      <AgendaModal />
    </>
  )
}
