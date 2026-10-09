import { EMAIL } from '../links.js'

const options = [
  { label: 'Tengo una liga', subject: 'Quiero Weball Liga' },
  { label: 'Soy de una asociación', subject: 'Quiero Weball Asociación' },
  { label: 'Quiero ser sponsor', subject: 'Quiero Weball Sponsors' },
  { label: 'Quiero invertir', subject: 'Interés en invertir en Weball' },
]

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-celeste text-marino">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Contacto</p>
          <h2 className="mt-4 text-4xl font-extrabold uppercase leading-none sm:text-6xl">
            Te mostramos tu liga funcionando
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Contanos quién sos y te escribimos para mostrarte Weball en acción.
          </p>
          <p className="mt-6">
            O escribinos a{' '}
            <a href={`mailto:${EMAIL}`} className="font-bold underline underline-offset-4">
              {EMAIL}
            </a>
          </p>
        </div>

        <ul className="flex flex-col">
          {options.map((o, i) => (
            <li key={o.label}>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(o.subject)}`}
                className={`flex items-center justify-between gap-4 border-marino py-5 text-xl font-extrabold uppercase transition hover:pl-3 ${
                  i === 0 ? 'border-t-4' : 'border-t-2'
                }`}
              >
                {o.label}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
