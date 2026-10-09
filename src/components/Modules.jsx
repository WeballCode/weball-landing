import { Icon, Label, Section, Title } from './ui.jsx'
import FormatShowcase from './FormatShowcase.jsx'
import { ComunicacionVisual } from './ModuleVisuals.jsx'
import TribunalShowcase from './TribunalShowcase.jsx'
import PlanillaShowcase from './PlanillaShowcase.jsx'
import { FichajesVisual } from './FichajeVisual.jsx'
import CustomFields from './CustomFields.jsx'
import { Reveal } from './motion.jsx'

const modules = [
  {
    icon: 'credencial',
    name: 'Fichajes a tu medida',
    text: 'El jugador se ficha solo desde el celular, con la info que vos le pidas.',
    visual: <FichajesVisual />,
    extra: <CustomFields />,
  },
  {
    icon: 'competicion',
    name: 'Tu torneo a medida',
    text: 'Organizá por temporada, división y categoría. Armá el fixture que quieras.',
    extra: <FormatShowcase />,
  },
  {
    icon: 'app',
    name: 'Planilla digital',
    text: 'Carga de resultados vía celular para los árbitros y la mesa de control.',
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
    visual: <ComunicacionVisual />,
  },
]

export default function Modules() {
  return (
    <Section id="modulos">
      <Label>Tecnología Weball</Label>
      <Title>
        Soluciones
      </Title>
      <Reveal as="p" delay={200} className="mt-6 max-w-2xl text-lg leading-relaxed text-bruma">
        Como no somos los únicos, decidimos hacer la diferencia.
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {modules.map((m, i) => (
          <Reveal key={m.name} delay={(i % 3) * 120} className={`flex ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
          <div
            className={`flex min-h-72 w-full flex-col gap-4 border-t-[6px] p-7 transition duration-300 hover:-translate-y-2 sm:p-8 ${
              m.featured ? 'border-marino bg-celeste text-marino' : 'border-celeste bg-marino-claro'
            }`}
          >
            <Icon name={m.icon} className={`h-9 w-9 shrink-0 ${m.featured ? 'text-marino' : 'text-celeste'}`} />
            <h3 className="text-3xl font-extrabold uppercase leading-none">{m.name}</h3>
            <p className={`leading-relaxed ${m.featured ? 'text-marino' : 'text-bruma'}`}>{m.text}</p>
            {m.visual && <div className="mt-auto pt-4">{m.visual}</div>}
            {m.caption && (
              <p className={`border-t-2 pt-4 font-bold leading-relaxed ${m.featured ? 'border-marino' : 'border-linea'}`}>
                {m.caption}
              </p>
            )}
            {m.extra && <div className={m.visual ? 'pt-4' : 'mt-auto pt-4'}>{m.extra}</div>}
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
