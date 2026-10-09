// Sección reutilizable: texto de un lado, visual del otro
export default function FeatureSection({ id, tag, title, text, bullets, visual, reverse = false }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={reverse ? 'lg:order-2' : ''}>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{tag}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">{text}</p>
          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-slate-300">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/20 text-xs text-brand">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>{visual}</div>
      </div>
    </section>
  )
}
