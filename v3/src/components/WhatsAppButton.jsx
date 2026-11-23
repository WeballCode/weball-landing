import { useEffect, useState } from 'react'
import { whatsappLink } from '../links.js'

// Botón flotante de WhatsApp: acompaña en toda la página para escribir con un toque.
// Aparece cuando la persona empieza a bajar, para no tapar la portada.
export default function WhatsAppButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink('Hola Weball, quiero más información.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={`fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-celeste text-marino shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition duration-300 hover:scale-105 hover:bg-celeste-claro sm:right-6 sm:bottom-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {/* Ícono de WhatsApp en línea, de una sola tinta */}
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
        <path d="M9 8.5c.2-.5.6-.6 1-.6.3 0 .5.4.7.9.2.5.4 1 .2 1.3l-.6.7c.6 1.2 1.6 2.2 2.8 2.8l.7-.6c.3-.2.8 0 1.3.2.5.2.9.4.9.7 0 .4-.1.8-.6 1-1 .5-2.4.3-4.1-1.2S8.4 10 9 8.5z" />
      </svg>
    </a>
  )
}
