import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FuncionaCon from './components/FuncionaCon.jsx'
import Escribis from './components/Escribis.jsx'
import Tareas from './components/Tareas.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Ahorro from './components/Ahorro.jsx'
import Ligas from './components/Ligas.jsx'
import Faq from './components/Faq.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// Landing V3: "Organizá tu liga con tu IA favorita". Estructura inspirada en Apple, con el manual de marca de Weball:
// Roboto, marino y niebla alternados, celeste como acento, colores planos, títulos en mayúsculas.
// Portada (marino) → con qué IA (niebla) → Escribís (marino) → 4 pedidos (niebla) → cómo funciona (marino) → control (niebla)
// → ligas (marino) → ahorro (niebla) → preguntas (marino) → contacto (celeste, el destacado).
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FuncionaCon />
        <Escribis />
        <Tareas />
        <ComoFunciona />
        <Ligas />
        <Ahorro />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
