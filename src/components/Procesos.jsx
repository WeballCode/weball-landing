// Los 8 procesos de una liga, encadenados. En la principal va como sección; en soluciones.html es la página.
import { ProcessGrid } from './ProcessChain.jsx'
import { Label, Lead, Section, Title } from './ui.jsx'

export default function Procesos({ page = false }) {
  return (
    <Section id="procesos" className={page ? 'border-b border-linea' : ''}>
      <Label icon="gestion">Los 8 procesos de una liga</Label>
      <Title as={page ? 'h1' : 'h2'}>
        Toda la temporada, <span className="text-celeste">proceso por proceso</span>
      </Title>
      <Lead>
        Del fichaje al boletín del tribunal. Cada proceso toma lo que deja el anterior, y cada uno se puede contratar por separado.
      </Lead>
      <ProcessGrid />
    </Section>
  )
}
