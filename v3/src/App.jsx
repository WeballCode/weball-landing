import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FuncionaCon from './components/FuncionaCon.jsx'
import Escribis from './components/Escribis.jsx'
import Tareas from './components/Tareas.jsx'
import Conversacion from './components/Conversacion.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Ahorro from './components/Ahorro.jsx'
import Ligas from './components/Ligas.jsx'
import Faq from './components/Faq.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// Landing V3: "Organizá tu liga con tu IA favorita", con estética clara inspirada en Apple.
// Portada (notebook con el panel + celular con la IA) → con qué IA funciona → "Escribís. Weball lo hace." →
// los 4 pedidos → cómo funciona y control → calculadora de ahorro → ligas que ya usan Weball → preguntas → contacto.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FuncionaCon />
        <Escribis />
        <Tareas />
        <Conversacion />
        <ComoFunciona />
        <Ahorro />
        <Ligas />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
