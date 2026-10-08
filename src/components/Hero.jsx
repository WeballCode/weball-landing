export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Weball</h1>
      <p className="mt-6 max-w-xl text-lg text-slate-300">
        Próximamente. Esta es la landing inicial: pedile a Claude los cambios que quieras.
      </p>
      <a
        href="#contacto"
        className="mt-10 rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark transition"
      >
        Quiero saber más
      </a>
    </section>
  )
}
