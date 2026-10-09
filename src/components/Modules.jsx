import { useState } from 'react'
import { Icon, Label, Section, Title } from './ui.jsx'
import FormatShowcase from './FormatShowcase.jsx'
import ComunicacionShowcase from './ComunicacionShowcase.jsx'
import TribunalShowcase from './TribunalShowcase.jsx'
import PlanillaShowcase from './PlanillaShowcase.jsx'
import { FichajesVisual } from './FichajeVisual.jsx'
import CustomFields from './CustomFields.jsx'
import { Reveal } from './motion.jsx'

const modules = [
  {
    icon: 'credencial',
    name: 'Fichajes a medida',
    text: 'El jugador se ficha solo desde el celular. Vos elegís cómo y qué info le vas a pedir.',
    visual: <FichajesVisual />,
    extra: <CustomFields />,
  },
  {
    icon: 'competicion',
    name: 'Competiciones',
    text: 'Organizá por temporada, división y categoría. Armá el fixture que quieras.',
    extra: <FormatShowcase />,
  },
  {
    icon: 'app',
    name: 'Planilla digital',
    text: 'Carga de resultados por celular para árbitros y mesas de control.',
    extra: <PlanillaShowcase />,
  },
  {
    icon: 'tribunal',
    name: 'Tribunal IA',
    text: 'Cargá tus reglamentos y dejá que nuestro agente se ocupe de sancionar.',
    extra: <TribunalShowcase />,
    featured: true,
  },
  {
    icon: 'comunidad',
    name: 'Comunicación',
    text: 'Configurá qué se comunica, cómo, cuándo y a quién: notificaciones, información visible y acceso de los usuarios.',
    extra: <ComunicacionShowcase />,
  },
]

// Los 5 módulos en pestañas: se ve uno a la vez para que la sección entre en una pantalla.
export default function Modules() {
  const [active, setActive] = useState(0)
  const m = modules[active]

  return (
    <Section id="modulos" tight>
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        {/* Izquierda: título y lista de módulos */}
        <div className="min-w-0">
          <Label>Tecnología Weball</Label>
          <Title>Soluciones</Title>
          <Reveal as="p" delay={200} className="mt-5 max-w-md text-lg leading-relaxed text-bruma">
            Como no somos los únicos, decidimos hacer la diferencia.
          </Reveal>

          {/* En el celular las pestañas se deslizan de costado; en la compu van una abajo de la otra */}
          <Reveal delay={300} className="-mx-4 mt-8 overflow-x-auto px-4 lg:mx-0 lg:overflow-visible lg:px-0">
            <ul className="flex gap-2 lg:flex-col" role="tablist" aria-label="Módulos de Weball">
              {modules.map((mod, i) => {
                const selected = i === active
                return (
                  <li key={mod.name} className="shrink-0">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(i)}
                      className={`flex w-full items-center gap-3 border-l-4 px-4 py-3 text-left font-extrabold uppercase tracking-wide transition ${
                        selected
                          ? 'border-celeste bg-celeste text-marino'
                          : 'border-linea bg-marino-claro text-blanco hover:border-celeste'
                      }`}
                    >
                      <Icon name={mod.icon} className="h-6 w-6 shrink-0" />
                      <span className="whitespace-nowrap">{mod.name}</span>
                      <span aria-hidden="true" className="ml-auto hidden lg:inline">
                        {selected ? '→' : ''}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        {/* Derecha: el módulo elegido */}
        <div
          key={active}
          role="tabpanel"
          aria-label={m.name}
          className={`format-enter flex min-w-0 flex-col gap-5 border-t-[6px] p-6 sm:p-8 ${
            m.featured ? 'border-marino bg-celeste text-marino' : 'border-celeste bg-marino-claro'
          }`}
        >
          <div className="flex items-start gap-3">
            <Icon name={m.icon} className={`mt-0.5 h-7 w-7 shrink-0 ${m.featured ? 'text-marino' : 'text-celeste'}`} />
            <div>
              <h3 className="text-2xl font-extrabold uppercase leading-none">{m.name}</h3>
              <p className={`mt-2 leading-relaxed ${m.featured ? 'text-marino' : 'text-bruma'}`}>{m.text}</p>
            </div>
          </div>
          {m.visual && <div>{m.visual}</div>}
          {m.extra && <div>{m.extra}</div>}
        </div>
      </div>
    </Section>
  )
}
