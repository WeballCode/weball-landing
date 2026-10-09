import { WHATSAPP_LABEL, whatsappLink } from '../links.js'

const options = [
  { label: 'Tengo una liga', message: 'Hola Weball, tengo una liga y quiero conocer Weball Liga.' },
  { label: 'Soy de una asociación', message: 'Hola Weball, soy de una asociación y quiero conocer Weball Asociación.' },
  { label: 'Quiero ser sponsor', message: 'Hola Weball, quiero conocer Weball Sponsors.' },
  { label: 'Quiero invertir', message: 'Hola Weball, me interesa invertir en Weball.' },
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
            Contanos quién sos por WhatsApp y te mostramos Weball en acción.
          </p>
          <p className="mt-6">
            O escribinos directo al{' '}
            <a
              href={whatsappLink('Hola Weball, quiero más información.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              {WHATSAPP_LABEL}
            </a>
          </p>
        </div>

        <ul className="flex flex-col">
          {options.map((o, i) => (
            <li key={o.label}>
              <a
                href={whatsappLink(o.message)}
                target="_blank"
                rel="noopener noreferrer"
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
