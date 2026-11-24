import { Reveal } from './motion.jsx'
import { Lead, Section, Title } from './ui.jsx'

const pasos = [
  { titulo: 'Conectá.', texto: 'Sumás Weball a tu IA una sola vez, en un par de minutos. Te acompañamos.' },
  { titulo: 'Pedí.', texto: 'Escribile lo que necesitás, en español y con tus palabras.' },
  { titulo: 'Confirmá.', texto: 'Tu IA te cuenta qué va a hacer. Decís que sí, y queda cargado y publicado.' },
]

const control = [
  {
    titulo: 'Tus permisos.',
    texto: 'Tu IA entra con tu usuario y sólo puede hacer lo que tu cuenta tiene permitido.',
    icono: 'M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z M12 15v2',
  },
  {
    titulo: 'Tu confirmación.',
    texto: 'Antes de crear, cambiar o borrar algo, te pregunta. Sin tu sí, no hace nada.',
    icono: 'M20 6L9 17l-5-5',
  },
  {
    titulo: 'Todo a la vista.',
    texto: 'Lo que hace queda en Weball. Lo revisás y lo corregís desde el panel cuando quieras.',
    icono: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  },
]

export default function ComoFunciona() {
  return (
    <>
      <Section id="como-funciona">
        <Title>Así de simple.</Title>
        <Lead>Tres pasos. El primero, lo hacés una sola vez.</Lead>

        <ol className="mt-16 grid gap-5 md:grid-cols-3">
          {pasos.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={i * 120} className="rounded-[1.75rem] bg-fondo p-8 sm:p-10">
              <span className="texto-ia text-6xl font-bold tracking-tight">{i + 1}</span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{p.titulo}</h3>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-gris">{p.texto}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="fondo">
        <Title>
          La IA propone.
          <br />
          Vos decidís.
        </Title>
        <Lead>Weball no reemplaza a la gente de tu liga. Le saca de encima el trabajo repetitivo.</Lead>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {control.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 120} className="rounded-[1.75rem] bg-white p-8 sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-celeste-claro/60 text-celeste-profundo">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={c.icono} />
                </svg>
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{c.titulo}</h3>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-gris">{c.texto}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
