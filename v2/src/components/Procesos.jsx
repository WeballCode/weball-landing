// Los 8 procesos de una liga: una sección a pantalla completa, en blanco para que resalte entre las
// secciones oscuras, con la flecha que los recorre del fichaje a la comunicación.
// En la principal va como sección; en soluciones.html es la página.
import ProcessFlow from './ProcessFlow.jsx'
import { Label, Lead, Title } from './ui.jsx'

export default function Procesos({ page = false }) {
  return (
    <section
      id="procesos"
      className="flex min-h-[100svh] scroll-mt-16 flex-col justify-center overflow-hidden bg-blanco py-14 text-marino lg:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Label tone="light" icon="gestion">
          Los 8 procesos de una liga
        </Label>
        <Title as={page ? 'h1' : 'h2'}>
          Del fichaje <span className="text-celeste-profundo">a la comunicación</span>
        </Title>
        <Lead tone="light">
          Toda la temporada en una sola flecha: cada proceso toma lo que deja el anterior. Contratalos juntos o sólo los que te faltan.
        </Lead>
      </div>
      <ProcessFlow />
    </section>
  )
}
