// Precios en la página principal: corto, con el precio por jugador y un link a la página completa
import { Label, Lead, Section, Title } from './ui.jsx'
import { Reveal } from './motion.jsx'
import PriceCard from './PriceCard.jsx'

export default function PricingTeaser() {
  return (
    <Section id="precios" light>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Label tone="light" icon="credencial">
            Precios
          </Label>
          <Title>Depende del tamaño de tu liga</Title>
          <Lead tone="light">El precio es por jugador, así que crece con tu liga. Y lo paga cada jugador al activar su credencial.</Lead>
          <Reveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="./precios.html"
              className="bg-marino px-7 py-4 text-center font-bold uppercase tracking-wide text-blanco transition hover:-translate-y-0.5 hover:bg-marino-claro"
            >
              Ver más
            </a>
            <a
              href="#contacto"
              className="border-2 border-marino px-7 py-4 text-center font-bold uppercase tracking-wide text-marino transition hover:-translate-y-0.5 hover:bg-marino hover:text-blanco"
            >
              Consultá por tu liga
            </a>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <PriceCard />
        </Reveal>
      </div>
    </Section>
  )
}
