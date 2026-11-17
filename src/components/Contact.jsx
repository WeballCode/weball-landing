import { WHATSAPP_LABEL, whatsappLink } from '../links.js'
import { Reveal } from './motion.jsx'
import { Label, Lead, Section, Title } from './ui.jsx'

const options = [
  { label: 'Tengo una liga', message: 'Hola Weball, tengo una liga y quiero conocer Weball Liga.' },
  { label: 'Soy de una asociación', message: 'Hola Weball, soy de una asociación y quiero conocer Weball Asociación.' },
  { label: 'Quiero ser sponsor', message: 'Hola Weball, quiero conocer Weball Sponsors.' },
  { label: 'Quiero invertir', message: 'Hola Weball, me interesa invertir en Weball.' },
]

export default function Contact() {
  return (
    <Section id="contacto" tone="celeste">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <Label tone="celeste">Contacto</Label>
          <Title>Te mostramos tu liga funcionando</Title>
          <Lead tone="celeste">Contanos quién sos por WhatsApp y te mostramos Weball en acción.</Lead>
          <Reveal as="p" delay={300} className="mt-5">
            Escribinos al{' '}
            <a
              href={whatsappLink('Hola Weball, quiero más información.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              {WHATSAPP_LABEL}
            </a>
          </Reveal>
        </div>

        <ul className="flex flex-col">
          {options.map((o, i) => (
            <Reveal as="li" key={o.label} delay={150 + i * 100}>
              <a
                href={whatsappLink(o.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-4 border-marino py-5 text-lg font-extrabold uppercase transition hover:pl-3 ${
                  i === 0 ? 'border-t-4' : 'border-t-2'
                }`}
              >
                {o.label}
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
