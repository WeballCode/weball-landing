import CredentialCard from './CredentialCard.jsx'

const pills = ['Credencial digital', 'Tribunal con IA', 'Gestión de clubes', 'Competiciones a medida']

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]" />
      <div className="absolute top-60 -right-40 h-[300px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            El sistema operativo del fútbol amateur
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Todo tu fútbol, <span className="text-gradient">en un solo lugar.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Weball conecta a ligas, clubes y jugadores en una sola plataforma. Fichajes, credenciales,
            fixtures, tablas y sanciones dejan de vivir en planillas, papeles y grupos de WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-accent px-7 py-3.5 text-center font-semibold text-ink transition hover:brightness-110"
            >
              Quiero Weball en mi liga
            </a>
            <a
              href="#producto"
              className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/5"
            >
              Ver cómo funciona
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {pills.map((p) => (
              <li key={p} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-400 ring-1 ring-white/10">
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/40 to-accent/20 blur-3xl" />
          <div className="animate-float">
            <CredentialCard />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-ink/90 px-4 py-3 shadow-2xl backdrop-blur sm:-left-10">
            <p className="text-xs text-slate-400">Control de acceso</p>
            <p className="mt-0.5 flex items-center gap-2 text-sm font-semibold">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] text-ink">✓</span>
              Jugador habilitado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
