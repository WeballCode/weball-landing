// Piezas chicas que se repiten en todas las secciones, según el manual de marca
import { Reveal } from './motion.jsx'

// Etiqueta: mayúsculas espaciadas, peso 500
export function Label({ children, dark = true }) {
  return (
    <Reveal as="p" className={`text-sm font-medium uppercase tracking-[0.2em] ${dark ? 'text-celeste' : 'text-acero'}`}>
      {children}
    </Reveal>
  )
}

// Título de sección: peso 800, mayúsculas, alineado a la izquierda
export function Title({ children, className = '' }) {
  return (
    <Reveal as="h2" delay={100} className={`mt-4 text-4xl font-extrabold uppercase leading-none sm:text-6xl ${className}`}>
      {children}
    </Reveal>
  )
}

// Contenedor de sección con uno de los dos fondos de la marca
export function Section({ id, light = false, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 ${light ? 'bg-niebla text-marino' : 'bg-marino text-blanco'} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">{children}</div>
    </section>
  )
}

// Íconos de una sola tinta
const paths = {
  liga: 'M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 6h3v2a3 3 0 0 1-3 3M7 6H4v2a3 3 0 0 0 3 3',
  club: 'M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z',
  jugador: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  inversor: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  credencial: 'M3 5h18v14H3zM7 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M14 9h4M14 13h4',
  tribunal: 'M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0L7 7zM17 7l-3 7a3 3 0 0 0 6 0l-3-7zM8 21h8',
  gestion: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  competicion: 'M4 5h5v4H4zM4 15h5v4H4zM15 10h5v4h-5zM9 7h3v10H9M12 12h3',
  app: 'M7 2h10v20H7zM11 18h2',
  comunidad: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 11a3 3 0 1 0 0-6M3 20a6 6 0 0 1 12 0M15 14a6 6 0 0 1 6 6',
}

export function Icon({ name, className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
