import Navbar from './Navbar.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

// Marco común de todas las páginas: menú arriba, contacto y pie abajo, y el botón de WhatsApp.
// `page` dice en qué página estamos ('inicio', 'soluciones' o 'inversores').
export default function Page({ page = 'inicio', children }) {
  return (
    <div className="min-h-screen bg-marino font-sans text-blanco antialiased">
      <Navbar page={page} />
      <main className={page === 'inicio' ? '' : 'pt-16'}>
        {children}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
