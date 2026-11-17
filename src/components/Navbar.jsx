import { useEffect, useRef, useState } from 'react'
import { procesos, procesoHref, nn } from '../procesos.js'
import { Icon } from './ui.jsx'

// Menú: "Procesos" despliega los 8 procesos; el resto son páginas aparte.
// Inversores queda en el pie de página: el menú es para las ligas.
const links = [
  { href: './tribunal.html', label: 'Tribunal IA', page: 'tribunal' },
  { href: './ligas.html', label: 'Ligas', page: 'ligas' },
  { href: './precios.html', label: 'Precios', page: 'precios' },
]
const processPages = ['soluciones', ...procesos.map((p) => p.slug).filter((s) => s !== 'tribunal')]

function ProcessMenu({ page }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = processPages.includes(page)

  // Se cierra al hacer clic afuera o con Escape
  useEffect(() => {
    if (!open) return
    const onClick = (e) => !ref.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm font-medium transition hover:text-blanco ${current ? 'text-celeste' : 'text-bruma'}`}
      >
        Procesos
        <span aria-hidden="true" className={`text-xs transition ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 w-[36rem] -translate-x-1/2 pt-4">
          <div className="border-t-4 border-celeste bg-marino-claro p-3 shadow-2xl">
            <ul className="grid grid-cols-2 gap-px">
              {procesos.map((p, i) => (
                <li key={p.slug}>
                  <a
                    href={procesoHref(p.slug)}
                    aria-current={p.slug === page ? 'page' : undefined}
                    className={`flex items-center gap-3 px-3 py-2.5 transition hover:bg-marino ${p.slug === page ? 'text-celeste' : 'text-blanco'}`}
                  >
                    <span className="text-sm font-extrabold tabular-nums text-celeste">{nn(i)}</span>
                    <Icon name={p.icon} className="h-5 w-5 shrink-0 text-bruma" />
                    <span className="text-sm font-bold leading-tight">{p.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="./soluciones.html"
              className="mt-2 block border-t border-linea px-3 pt-3 pb-1 text-sm font-bold uppercase tracking-wide text-celeste transition hover:text-blanco"
            >
              Ver los 8 procesos y cómo se conectan →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar({ page = 'inicio' }) {
  const home = page === 'inicio'
  const current = (l) => l.page === page
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  // Al bajar el menú se esconde para liberar pantalla; al subir vuelve a aparecer
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - lastY) < 6) return
      setHidden(y > lastY && y > 80)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-linea bg-marino transition-transform duration-300 ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={home ? '#inicio' : './'} aria-label="Weball, inicio">
          <img src="./logo-blanco.png" alt="Weball" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <ProcessMenu page={page} />
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={current(l) ? 'page' : undefined}
              className={`text-sm font-medium transition hover:text-blanco ${current(l) ? 'text-celeste' : 'text-bruma'}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-celeste px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-marino transition hover:bg-celeste-claro"
          >
            Contactanos
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-linea lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {/* Tres líneas; al abrir se convierten en una X */}
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-blanco transition ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-linea bg-marino px-4 pb-6 lg:hidden">
          <p className="pt-5 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-celeste">Procesos</p>
          <ul>
            {procesos.map((p, i) => (
              <li key={p.slug}>
                <a
                  href={procesoHref(p.slug)}
                  aria-current={p.slug === page ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 border-b border-linea py-3 font-bold ${p.slug === page ? 'text-celeste' : 'text-blanco'}`}
                >
                  <span className="w-6 text-sm font-extrabold tabular-nums text-celeste">{nn(i)}</span>
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={current(l) ? 'page' : undefined}
              onClick={() => setOpen(false)}
              className="block border-b border-linea py-4 text-lg font-bold uppercase text-blanco"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-celeste py-3.5 text-center font-bold uppercase tracking-wide text-marino"
          >
            Contactanos
          </a>
        </div>
      )}
    </header>
  )
}
