// Cambiá este mail por el de contacto real
const EMAIL = 'hola@weball.me'

const options = [
  { label: 'Soy de una liga', subject: 'Quiero Weball en mi liga' },
  { label: 'Soy de un club', subject: 'Quiero Weball en mi club' },
  { label: 'Soy jugador/a', subject: 'Soy jugador/a y quiero Weball' },
  { label: 'Quiero invertir', subject: 'Interés en invertir en Weball' },
]

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-dark to-[#2a1a8a] px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -bottom-24 left-1/2 h-60 w-[600px] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">Sumate a Weball.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Contanos quién sos y te respondemos a la brevedad. Sin compromiso.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {options.map((o) => (
              <a
                key={o.label}
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(o.subject)}`}
                className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 text-left font-semibold ring-1 ring-white/20 transition hover:bg-white hover:text-ink"
              >
                {o.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/70">
            O escribinos a{' '}
            <a href={`mailto:${EMAIL}`} className="font-semibold text-white underline underline-offset-4">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
