import { tareas } from '../tareas.js'
import { Escalado } from './Dispositivos.jsx'
import { Reveal } from './motion.jsx'
import { TablaPanel } from './Panel.jsx'
import { Etiqueta, Lead, Section, Title } from './ui.jsx'

// Cuatro bloques: qué pedís, un ejemplo en burbuja y cómo queda en el panel de Weball.
export default function Tareas() {
  return (
    <Section id="tareas" tone="niebla">
      <Etiqueta tone="niebla">Qué le pedís</Etiqueta>
      <Title>Cuatro pedidos. Toda tu liga.</Title>
      <Lead tone="niebla">Lo que más tiempo le lleva a una liga, resuelto con un mensaje.</Lead>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {tareas.map((t, i) => (
          <Reveal key={t.slug} delay={(i % 2) * 120} className="flex flex-col overflow-hidden border-t-4 border-marino bg-blanco">
            <div className="px-7 pt-7 sm:px-9 sm:pt-8">
              <p className="text-sm font-medium tracking-[0.2em] text-acero">0{i + 1}</p>
              <h3 className="mt-2 text-[1.7rem] leading-tight font-extrabold uppercase">{t.titulo.replace(/\.$/, '')}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-pizarra">{t.texto}</p>
              <p className="mt-6 ml-auto w-fit max-w-[90%] rounded-[18px] rounded-br-[4px] bg-celeste-profundo px-4 py-2.5 text-[15px] leading-snug text-blanco">
                {t.ejemplo}
              </p>
            </div>
            {/* El resultado, tal como queda en Weball */}
            <div className="mt-6 flex-1 px-7 sm:px-9">
              <div className="h-full border border-b-0 border-panel-linea bg-panel-claro p-3 pb-0">
                <Escalado ancho={760} className="max-h-[230px]">
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
