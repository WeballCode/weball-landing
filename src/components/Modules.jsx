import { Icon, Label, Title } from './ui.jsx'
import FormatShowcase from './FormatShowcase.jsx'
import ComunicacionShowcase from './ComunicacionShowcase.jsx'
import PlanillaShowcase from './PlanillaShowcase.jsx'
import { FichajesVisual } from './FichajeVisual.jsx'
import CustomFields from './CustomFields.jsx'
import { Reveal } from './motion.jsx'

// Cada solución tiene su propia sección, como Tribunal IA. Alternan marino y marino claro
// (las animaciones están pensadas para fondo oscuro).
const modules = [
  {
    id: 'fichajes',
    icon: 'credencial',
    name: 'Fichajes a medida',
    text: 'El jugador se ficha solo desde el celular. Vos elegís cómo y qué info le vas a pedir.',
    side: <CustomFields />,
    show: <FichajesVisual />,
  },
  {
    id: 'competiciones',
    icon: 'competicion',
    name: 'Competiciones',
    text: 'Organizá por temporada, división y categoría. Armá el fixture que quieras.',
    show: <FormatShowcase />,
  },
  {
    id: 'planilla',
    icon: 'app',
    name: 'Planilla digital',
    text: 'Carga de resultados por celular para árbitros y mesas de control.',
    show: <PlanillaShowcase />,
  },
  {
    id: 'comunicacion',
    icon: 'comunidad',
    name: 'Comunicación',
    text: 'Configurá qué se comunica, cómo, cuándo y a quién: notificaciones, información visible y acceso de los usuarios.',
    show: <ComunicacionShowcase />,
  },
]

const links = [
  ...modules.map((m) => ({ href: `#${m.id}`, icon: m.icon, label: m.name === 'Fichajes a medida' ? 'Fichajes' : m.name })),
  { href: '#tribunal', icon: 'tribunal', label: 'Tribunal IA' },
]

// Una solución: texto a la izquierda, animación a la derecha
function SolutionSection({ m, dark }) {
  return (
    <section id={m.id} className={`scroll-mt-16 text-blanco ${dark ? 'bg-marino' : 'bg-marino-claro'}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:py-16">
        <div className="flex min-w-0 flex-col gap-6">
          <div>
            <Reveal className="flex items-center gap-3 text-celeste">
              <Icon name={m.icon} className="h-8 w-8" />
              <p className="text-sm font-medium uppercase tracking-[0.2em]">Soluciones Weball</p>
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-5 text-4xl font-extrabold uppercase leading-none sm:text-5xl">
              {m.name}
            </Reveal>
            <Reveal as="p" delay={200} className="mt-5 max-w-md text-xl leading-snug text-bruma">
              {m.text}
            </Reveal>
          </div>
          {m.side && <Reveal delay={300}>{m.side}</Reveal>}
        </div>
        <Reveal delay={200} className="min-w-0">
          {m.show}
        </Reveal>
      </div>
    </section>
  )
}

export default function Modules() {
  return (
    <>
      {/* Introducción: título, frase y accesos a cada solución */}
      <section id="modulos" className="scroll-mt-16 border-b border-linea bg-marino text-blanco">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Label>Tecnología Weball</Label>
              <Title>Soluciones</Title>
              <Reveal as="p" delay={200} className="mt-3 text-lg leading-relaxed text-bruma">
                Como no somos los únicos, decidimos hacer la diferencia.
              </Reveal>
            </div>
            {/* Ícono: el rayo de "hacer la diferencia" */}
            <Reveal delay={300} className="hidden shrink-0 place-items-center rounded-full border-2 border-celeste p-4 text-celeste sm:grid">
              <Icon name="rayo" className="h-10 w-10" />
            </Reveal>
          </div>

          <Reveal delay={300} className="-mx-4 mt-8 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <ul className="flex gap-2 sm:flex-wrap">
              {links.map((l) => (
                <li key={l.href} className="shrink-0">
                  <a
                    href={l.href}
                    className="flex items-center gap-2 border-2 border-linea px-4 py-2.5 font-bold uppercase tracking-wide transition hover:border-celeste hover:bg-celeste hover:text-marino"
                  >
                    <Icon name={l.icon} className="h-5 w-5" />
                    <span className="whitespace-nowrap">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {modules.map((m, i) => (
        <SolutionSection key={m.id} m={m} dark={i % 2 === 1} />
      ))}
    </>
  )
}
