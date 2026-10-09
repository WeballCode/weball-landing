import { Icon, Label, Lead, Section, Title } from './ui.jsx'
import FormatShowcase from './FormatShowcase.jsx'
import ComunicacionShowcase from './ComunicacionShowcase.jsx'
import PlanillaShowcase from './PlanillaShowcase.jsx'
import TribunalShowcase from './TribunalShowcase.jsx'
import { FichajesVisual } from './FichajeVisual.jsx'
import CustomFields from './CustomFields.jsx'
import { Reveal } from './motion.jsx'

// Cada solución tiene su propia sección. Alternan marino claro y marino (las animaciones están
// pensadas para fondo oscuro), salvo Tribunal IA, que va en celeste.
const modules = [
  {
    id: 'fichajes',
    icon: 'credencial',
    short: 'Fichajes',
    name: 'Fichajes a medida',
    text: 'El jugador se ficha solo desde el celular. Vos elegís cómo y qué info le vas a pedir.',
    side: <CustomFields />,
    show: <FichajesVisual />,
  },
  {
    id: 'competiciones',
    icon: 'competicion',
    short: 'Competiciones',
    name: 'Competiciones',
    text: 'Organizá por temporada, división y categoría. Armá el fixture que quieras.',
    show: <FormatShowcase />,
  },
  {
    id: 'planilla',
    icon: 'app',
    short: 'Planilla digital',
    name: 'Planilla digital',
    text: 'Árbitros y mesas de control cargan los resultados desde el celular.',
    show: <PlanillaShowcase />,
  },
  {
    // Tribunal IA va en celeste para que se destaque
    id: 'tribunal',
    icon: 'tribunal',
    short: 'Tribunal IA',
    name: 'Tribunal IA',
    text: 'Cargá tus reglamentos y dejá que nuestro agente se ocupe de sancionar.',
    show: <TribunalShowcase />,
    tone: 'celeste',
  },
  {
    id: 'comunicacion',
    icon: 'comunidad',
    short: 'Comunicación',
    name: 'Comunicación',
    text: 'Configurá qué se comunica, cómo, cuándo y a quién.',
    show: <ComunicacionShowcase />,
  },
]

const links = modules.map((m) => ({ href: `#${m.id}`, icon: m.icon, label: m.short }))

// Una solución: texto a la izquierda, animación a la derecha (mismo esquema que Tribunal IA)
export function SolutionLayout({ id, tone, icon, name, text, side, show }) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="flex min-w-0 flex-col">
          <Label tone={tone} icon={icon}>
            Soluciones Weball
          </Label>
          <Title>{name}</Title>
          <Lead tone={tone}>{text}</Lead>
          {side && (
            <Reveal delay={300} className="mt-8">
              {side}
            </Reveal>
          )}
        </div>
        <Reveal delay={200} className="min-w-0">
          {show}
        </Reveal>
      </div>
    </Section>
  )
}

export default function Modules() {
  return (
    <>
      {/* Introducción: título, frase y accesos a cada solución */}
      <Section id="modulos" className="border-b border-linea">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Label>Tecnología Weball</Label>
            <Title>Soluciones</Title>
            <Lead>Como no somos los únicos, decidimos hacer la diferencia.</Lead>
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
      </Section>

      {modules.map((m, i) => (
        <SolutionLayout key={m.id} {...m} tone={m.tone || (i % 2 === 0 ? 'darker' : 'dark')} />
      ))}
    </>
  )
}
