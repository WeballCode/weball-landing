import ProductSection from './ProductSection.jsx'
import { AssociationDiagram } from './Illustrations.jsx'

export default function Asociacion() {
  return (
    <ProductSection
      id="asociacion"
      light
      icon="gestion"
      audience="Weball Asociación"
      name="Federaciones"
      title="Sistema y app con marca propia, con todas sus ligas adentro."
      itemsTitle="Cada liga organiza"
      items={[{ name: 'Su gestión' }, { name: 'Su comunidad' }, { name: 'Sus sponsors' }]}
      closing="Todos bajo el sistema oficial de la asociación"
      cta={{ label: 'Quiero Weball en mi asociación', href: '#contacto' }}
      visual={<AssociationDiagram light className="w-full max-w-md" />}
    />
  )
}
