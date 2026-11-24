import { tareas } from '../tareas.js'
import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

// Antes y después, tarea por tarea: cómo se hace hoy a mano (pasos y horas aproximadas para una liga
// de unos 20 equipos) y el pedido que lo reemplaza. Los pedidos salen de tareas.js (los mismos de las tarjetas).
const manual = {
  inscripcion: {
    horas: '~10 h por torneo',
    pasos: [
      'Juntar los formularios de cada equipo por WhatsApp o mail.',
      'Pasar a mano los datos de cada equipo y de cada jugador.',
      'Revisar quién ya está fichado en otro club.',
      'Cargarlos uno por uno en el sistema.',
    ],
  },
  torneo: {
    horas: '~6 h por torneo',
    pasos: [
      'Armar los grupos en una planilla.',
      'Calcular fechas y cruces para que nadie se repita.',
      'Dibujar el cuadro de playoffs.',
      'Pasar cada partido al sistema.',
    ],
  },
  programacion: {
    horas: '~3 h por fecha',
    pasos: [
      'Pedir a cada sede las canchas y horarios libres.',
      'Encajar los partidos sin que un equipo juegue dos veces a la vez.',
      'Rehacer todo cuando un club pide un cambio.',
      'Avisarle a cada club su día y horario.',
    ],
  },
  resultados: {
    horas: '~2 h por fecha',
    pasos: [
      'Juntar las planillas de cada cancha.',
      'Cargar resultados, goles y tarjetas.',
      'Actualizar las tablas.',
      'Publicarlo en la web y las redes.',
    ],
  },
}

export default function Ahorro() {
  return (
    <Section id="ahorro">
      <Title>Ahorrás tiempo. Ahorrás plata.</Title>
      <Lead>Así se hace hoy cada tarea de tu liga, y así se hace con Weball.</Lead>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-5">
        {tareas.map((t, i) => {
          const m = manual[t.slug]
          return (
            <Reveal key={t.slug} delay={80} className="grid overflow-hidden rounded-[1.75rem] bg-fondo md:grid-cols-2">
              {/* Hoy, a mano */}
              <div className="p-7 sm:p-10">
                <p className="text-sm font-semibold text-gris-claro">0{i + 1}</p>
                <h3 className="mt-1 text-[1.7rem] leading-tight font-bold tracking-tight">{t.titulo}</h3>
                <div className="mt-6 flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold tracking-wide text-gris uppercase">Hoy, a mano</p>
                  <p className="text-lg font-bold text-tinta tabular-nums">{m.horas}</p>
                </div>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {m.pasos.map((p) => (
                    <li key={p} className="flex gap-3 text-[1.02rem] leading-snug text-gris">
                      <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-marino/30" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Con Weball: un pedido */}
              <div className="flex flex-col justify-center bg-white p-7 sm:p-10 md:m-2 md:rounded-[1.4rem]">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="texto-ia text-sm font-semibold tracking-wide uppercase">Con Weball + IA</p>
                  <p className="texto-ia text-lg font-bold tabular-nums">~5 min</p>
                </div>
                <p className="mt-5 ml-auto w-fit max-w-[95%] rounded-[20px] rounded-br-[6px] bg-celeste-profundo px-4 py-3 text-[1.05rem] leading-snug text-white">
                  {t.ejemplo}
                </p>
                <p className="mt-4 text-[1.02rem] leading-snug text-gris">
                  Confirmás, y queda cargado y publicado.
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
