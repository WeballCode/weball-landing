import { Reveal } from './motion.jsx'
import { Check, Label, Lead, Section, Title } from './ui.jsx'

const pasos = [
  {
    titulo: 'Conectá Weball a tu IA',
    texto: 'Lo hacés una sola vez, en un par de minutos. Te acompañamos en la configuración.',
  },
  {
    titulo: 'Pedile lo que necesitás',
    texto: 'En español, con tus palabras, como se lo pedirías a alguien de la liga. Sin menús ni formularios.',
  },
  {
    titulo: 'Confirmás y queda hecho',
    texto: 'Tu IA te cuenta qué va a hacer, vos decís que sí, y Weball lo carga y lo publica.',
  },
]

const seguridad = [
  'Tu IA entra con tu usuario y sólo puede hacer lo que tus permisos le dejan.',
  'Antes de crear, cambiar o borrar algo, te pregunta y espera tu confirmación.',
  'Todo queda en Weball: lo ves y lo podés corregir desde el panel cuando quieras.',
]

export default function ComoFunciona() {
  return (
    <Section id="como-funciona" tone="hondo">
      <Label>Cómo funciona</Label>
      <Title>Tres pasos. El primero lo hacés una sola vez.</Title>

      <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
        {/* Línea que une los pasos */}
        <span className="absolute top-6 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-celeste/0 via-celeste/50 to-celeste/0 md:block" aria-hidden="true" />
        {pasos.map((p, i) => (
          <Reveal as="li" key={p.titulo} delay={i * 150} className="relative flex flex-col md:items-center md:text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-celeste bg-marino-hondo font-mono text-lg text-celeste">
              {i + 1}
            </span>
            <h3 className="mt-5 text-xl font-extrabold">{p.titulo}</h3>
            <p className="mt-2 max-w-xs leading-relaxed text-bruma">{p.texto}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={200} className="mt-20 grid gap-8 rounded-2xl border border-linea bg-marino p-6 sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-celeste">Vos tenés el control</p>
          <h3 className="mt-3 text-3xl font-extrabold leading-tight">La IA propone. Vos decidís.</h3>
          <Lead>Weball no reemplaza a la gente de tu liga: le saca de encima el trabajo repetitivo.</Lead>
        </div>
        <ul className="flex flex-col gap-4">
          {seguridad.map((s) => (
            <li key={s} className="flex items-start gap-3 rounded-xl border border-linea bg-marino-claro px-5 py-4">
              <Check className="mt-1 h-4 w-4 text-verde" />
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
