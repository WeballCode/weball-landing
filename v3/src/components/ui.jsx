import { Reveal } from './motion.jsx'

// Piezas que se repiten en todas las secciones

const tonos = {
  marino: 'bg-marino text-blanco',
  hondo: 'bg-marino-hondo text-blanco',
  blanco: 'bg-blanco text-marino',
  celeste: 'bg-celeste text-marino',
}

export function Section({ id, tone = 'marino', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 ${tonos[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">{children}</div>
    </section>
  )
}

export function Label({ children, tone }) {
  const color = tone === 'blanco' ? 'text-celeste-profundo' : tone === 'celeste' ? 'text-marino' : 'text-celeste'
  return (
    <Reveal as="p" className={`text-xs font-bold uppercase tracking-[0.2em] ${color}`}>
      {children}
    </Reveal>
  )
}

export function Title({ children, className = '' }) {
  return (
    <Reveal as="h2" delay={100} className={`mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.02] sm:text-5xl ${className}`}>
      {children}
    </Reveal>
  )
}

export function Lead({ children, tone }) {
  const color = tone === 'blanco' ? 'text-pizarra' : tone === 'celeste' ? 'text-marino/80' : 'text-bruma'
  return (
    <Reveal as="p" delay={200} className={`mt-5 max-w-2xl text-pretty text-lg leading-relaxed ${color}`}>
      {children}
    </Reveal>
  )
}

export function Check({ className = 'h-4 w-4 text-celeste' }) {
  return (
    <svg viewBox="0 0 16 16" className={`shrink-0 ${className}`} aria-hidden="true">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
