import { tareas } from '../tareas.js'
import { Escalado } from './Dispositivos.jsx'
import { Reveal } from './motion.jsx'
import { TablaPanel } from './Panel.jsx'
import { Lead, Section, Title } from './ui.jsx'

// Cuatro tarjetas grandes: qué pedís, un ejemplo en burbuja y cómo queda en el panel real de Weball.
// La burbuja va siempre abajo del texto y la pantalla del panel tiene la misma altura en las 4 tarjetas.
export default function Tareas() {
  return (
    <Section id="tareas" tone="fondo">
      <Title>Armá tu liga en 4 pedidos.</Title>
      <Lead>Lo que más tiempo le lleva a tu liga, resolvelo con un mensaje.</Lead>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {tareas.map((t, i) => (
          <Reveal key={t.slug} delay={(i % 2) * 120} className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white">
            <div className="flex flex-1 flex-col px-7 pt-8 sm:px-10 sm:pt-10">
              <p className="text-sm font-semibold text-gris-claro">0{i + 1}</p>
              <h3 className="mt-1 text-[1.9rem] leading-tight font-bold tracking-tight">{t.titulo}</h3>
              <p className="mt-3 mb-6 text-[1.05rem] leading-relaxed text-gris">{t.texto}</p>
              <p className="mt-auto ml-auto w-fit max-w-[90%] rounded-[20px] rounded-br-[6px] bg-celeste-profundo px-4 py-2.5 text-[15px] leading-snug text-white">
                {t.ejemplo}
              </p>
            </div>
            {/* El resultado, tal como queda en Weball */}
            <div className="relative mt-6 px-7 sm:px-10">
              <div className="h-[190px] overflow-hidden rounded-t-2xl border border-b-0 border-marino/10 bg-fondo p-3 pb-0 sm:h-[230px]">
                <Escalado ancho={760} className="rounded-t-xl">
                  <TablaPanel panel={t.panel} />
                </Escalado>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
