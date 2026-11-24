import { tareas } from '../tareas.js'
import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// Antes y después, tarea por tarea: cómo se hace hoy a mano (3 pasos) y el pedido que lo reemplaza.
// Los pedidos salen de tareas.js (los mismos de las tarjetas de "Armá tu liga en 4 pedidos").
const manual = {
  inscripcion: [
    'Juntar los formularios de cada equipo por WhatsApp o mail.',
    'Pasar a mano los datos de cada equipo y jugador.',
    'Cargarlos uno por uno en el sistema.',
  ],
  torneo: [
    'Armar los grupos y los cruces en una planilla.',
    'Dibujar el cuadro de playoffs.',
    'Pasar cada partido al sistema.',
  ],
  programacion: [
    'Pedir a cada sede las canchas y horarios libres.',
    'Encajar los partidos sin que nadie juegue dos veces a la vez.',
    'Avisarle a cada club su día y horario.',
  ],
  resultados: [
    'Juntar las planillas de cada cancha.',
    'Cargar resultados, goles y tarjetas.',
    'Actualizar las tablas y publicarlas.',
  ],
}

export default function Ahorro() {
  return (
    <Section id="ahorro">
      <Title>Ahorrás tiempo. Ahorrás plata.</Title>
      <Lead>Así se hace hoy cada tarea de tu liga, y así se hace con Weball.</Lead>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-5">
        {tareas.map((t) => (
          <Reveal key={t.slug} delay={80} className="rounded-[1.75rem] bg-fondo p-7 sm:p-10">
            <h3 className="text-[1.7rem] leading-tight font-bold tracking-tight">{t.titulo}</h3>

            {/* Las dos columnas arrancan a la misma altura */}
            <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <p className="text-sm font-semibold tracking-wide text-gris uppercase">Hoy, a mano</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {manual[t.slug].map((p) => (
                    <li key={p} className="flex gap-3 text-[1.02rem] leading-snug text-gris">
                      <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-marino/30" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="texto-ia w-fit text-sm font-semibold tracking-wide uppercase">Con Weball + IA</p>
                <p className="mt-4 w-fit max-w-[95%] rounded-[20px] rounded-bl-[6px] bg-celeste-profundo px-4 py-3 text-[1.02rem] leading-snug text-white">
                  {t.ejemplo}
                </p>
                <p className="mt-3 text-[1.02rem] leading-snug text-gris">Confirmás, y queda cargado y publicado.</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
