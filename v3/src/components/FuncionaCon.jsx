import { Reveal } from './motion.jsx'

// Las IAs con las que se usa Weball (escritas como texto, sin logos)
const ias = ['Gemini', 'ChatGPT', 'Claude']

export default function FuncionaCon() {
  return (
    <section className="bg-niebla text-marino">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-center sm:gap-12 sm:px-6">
        <Reveal as="p" className="text-sm font-medium tracking-[0.2em] text-acero uppercase">
          Funciona con la IA que ya usás
        </Reveal>
        <ul className="flex items-center gap-8 sm:gap-12">
          {ias.map((n, i) => (
            <Reveal as="li" key={n} delay={100 + i * 100} className="text-2xl font-bold sm:text-[1.7rem]">
              {n}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
