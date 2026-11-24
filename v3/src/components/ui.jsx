import { Reveal } from './motion.jsx'

// Piezas que se repiten en todas las secciones (estética clara, títulos grandes y centrados)

const tonos = {
  blanco: 'bg-white text-tinta',
  fondo: 'bg-fondo text-tinta',
  negro: 'bg-marino text-blanco',
}

export function Section({ id, tone = 'blanco', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-12 ${tonos[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">{children}</div>
    </section>
  )
}

// Título de sección: corto, grande y con punto final
export function Title({ children, className = '' }) {
  return (
    <Reveal as="h2" className={`mx-auto max-w-4xl text-center text-[2.5rem] leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-6xl ${className}`}>
      {children}
    </Reveal>
  )
}

export function Lead({ children, tone, className = '' }) {
  return (
    <Reveal
      as="p"
      delay={100}
      className={`mx-auto mt-5 max-w-2xl text-center text-[1.2rem] leading-relaxed font-medium text-pretty sm:text-[1.35rem] ${tone === 'negro' ? 'text-bruma' : 'text-gris'} ${className}`}
    >
      {children}
    </Reveal>
  )
}

// Botón pastilla principal y link con flecha
export function Boton({ href, children, className = '', claro = false, ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[1.05rem] font-semibold transition ${claro ? 'bg-white text-marino ring-1 ring-marino/15 hover:bg-fondo' : 'bg-celeste text-marino hover:bg-celeste-claro'} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

export function Link({ href, children, className = '', ...rest }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-1 text-[1.05rem] font-medium text-accion hover:underline ${className}`} {...rest}>
      {children}
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">›</span>
    </a>
  )
}
