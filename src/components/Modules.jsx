import { useState } from 'react'
import { Icon, Label, Section, Title } from './ui.jsx'
import FormatShowcase from './FormatShowcase.jsx'
import ComunicacionShowcase from './ComunicacionShowcase.jsx'
import PlanillaShowcase from './PlanillaShowcase.jsx'
import { FichajesVisual } from './FichajeVisual.jsx'
import CustomFields from './CustomFields.jsx'
import { Reveal } from './motion.jsx'

const modules = [
  {
    icon: 'credencial',
    tab: 'Fichajes',
    name: 'Fichajes a medida',
    text: 'El jugador se ficha solo desde el celular. Vos elegís cómo y qué info le vas a pedir.',
    side: <CustomFields />,
    show: <FichajesVisual />,
  },
  {
    icon: 'competicion',
    tab: 'Competiciones',
    name: 'Competiciones',
    text: 'Organizá por temporada, división y categoría. Armá el fixture que quieras.',
    show: <FormatShowcase />,
  },
  {
    icon: 'app',
    tab: 'Planilla digital',
    name: 'Planilla digital',
    text: 'Carga de resultados por celular para árbitros y mesas de control.',
    show: <PlanillaShowcase />,
  },
  {
    icon: 'comunidad',
    tab: 'Comunicación',
    name: 'Comunicación',
    text: 'Configurá qué se comunica, cómo, cuándo y a quién: notificaciones, información visible y acceso de los usuarios.',
    show: <ComunicacionShowcase />,
  },
]

// Soluciones: un módulo a la vez, acomodado de costado, con un carrusel de nombres abajo.
// Todo entra en una pantalla.
export default function Modules() {
  const [active, setActive] = useState(0)
  const m = modules[active]
  const go = (step) => setActive((a) => (a + step + modules.length) % modules.length)

  return (
    <Section id="modulos" tight>
      {/* Encabezado en una línea */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div>
          <Label>Tecnología Weball</Label>
          <Title>Soluciones</Title>
        </div>
        <Reveal as="p" delay={200} className="max-w-md text-lg leading-relaxed text-bruma lg:pb-1 lg:text-right">
          Como no somos los únicos, decidimos hacer la diferencia.
        </Reveal>
      </div>

      {/* El módulo elegido: texto a la izquierda, animación a la derecha */}
      <div
        key={active}
        role="tabpanel"
        aria-label={m.name}
        className="format-enter mt-8 grid gap-8 border-t-[6px] border-celeste bg-marino-claro p-6 sm:p-8 lg:min-h-[470px] lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12"
      >
        <div className="flex min-w-0 flex-col gap-6">
          <div>
            <Icon name={m.icon} className="h-9 w-9 text-celeste" />
            <h3 className="mt-4 text-3xl font-extrabold uppercase leading-none sm:text-4xl">{m.name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-bruma">{m.text}</p>
          </div>
          {m.side}
        </div>
        <div className="min-w-0">{m.show}</div>
      </div>

      {/* Carrusel de módulos */}
      <div className="mt-6 flex items-stretch gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Módulo anterior"
          className="grid w-12 shrink-0 place-items-center border-2 border-linea text-xl font-bold text-celeste transition hover:border-celeste"
        >
          ‹
        </button>
        <ul className="flex min-w-0 flex-1 gap-2 overflow-x-auto" role="tablist" aria-label="Módulos de Weball">
          {modules.map((mod, i) => {
            const selected = i === active
            return (
              <li key={mod.tab} className="min-w-[10rem] flex-1">
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`flex h-full w-full items-center justify-center gap-2 border-b-4 px-3 py-3 font-extrabold uppercase tracking-wide transition ${
                    selected
                      ? 'border-celeste bg-celeste text-marino'
                      : 'border-linea bg-marino-claro text-blanco hover:border-celeste'
                  }`}
                >
                  <Icon name={mod.icon} className="h-5 w-5 shrink-0" />
                  <span className="whitespace-nowrap">{mod.tab}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Módulo siguiente"
          className="grid w-12 shrink-0 place-items-center border-2 border-linea text-xl font-bold text-celeste transition hover:border-celeste"
        >
          ›
        </button>
      </div>
    </Section>
  )
}
