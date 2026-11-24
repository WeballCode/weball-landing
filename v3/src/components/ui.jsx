import { Reveal } from './motion.jsx'

// Piezas que se repiten en todas las secciones, según el manual de marca:
// etiqueta chica en mayúsculas espaciadas → título grande en mayúsculas (peso 800, a la izquierda) → una frase.
// Fondos marino y niebla alternados; bloques rectos y planos, con una línea gruesa arriba.

const tonos = {
  marino: 'bg-marino text-blanco',
  niebla: 'bg-niebla text-marino',
  blanco: 'bg-blanco text-marino',
}

export function Section({ id, tone = 'marino', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 ${tonos[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">{children}</div>
    </section>
  )
}

// Etiqueta: peso 500, mayúsculas espaciadas. Celeste sobre marino, acero sobre claro.
export function Etiqueta({ children, tone = 'marino', className = '' }) {
  return (
    <Reveal as="p" className={`text-sm font-medium tracking-[0.2em] uppercase ${tone === 'marino' ? 'text-celeste' : 'text-acero'} ${className}`}>
      {children}
    </Reveal>
  )
}

// Título: peso 800, mayúsculas, como mucho dos líneas
export function Title({ children, className = '' }) {
  return (
    <Reveal as="h2" delay={80} className={`mt-4 max-w-4xl text-[2.4rem] leading-[0.98] font-extrabold uppercase text-balance sm:text-6xl ${className}`}>
      {children}
    </Reveal>
  )
}

export function Lead({ children, tone = 'marino', className = '' }) {
  return (
    <Reveal
      as="p"
      delay={160}
      className={`mt-5 max-w-2xl text-[1.2rem] leading-relaxed text-pretty sm:text-[1.35rem] ${tone === 'marino' ? 'text-bruma' : 'text-pizarra'} ${className}`}
    >
      {children}
    </Reveal>
  )
}

// Botón de acción: celeste con texto marino (nunca blanco sobre celeste), esquinas de 6 px
export function Boton({ href, children, className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md bg-celeste px-7 py-3.5 text-[1.05rem] font-medium text-marino transition hover:bg-celeste-claro ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

// Enlace con flecha: celeste sobre marino, celeste profundo sobre claro
export function Link({ href, children, tone = 'marino', className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1 text-[1.05rem] font-medium hover:underline ${tone === 'marino' ? 'text-celeste' : 'text-celeste-profundo'} ${className}`}
      {...rest}
    >
      {children}
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">›</span>
    </a>
  )
}
