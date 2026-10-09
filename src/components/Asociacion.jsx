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
      items={[
        { name: 'Su gestión', text: 'Para que cada liga organice su actividad.' },
        { name: 'Su comunidad', text: 'De equipos, torneos y jugadores.' },
        { name: 'Su espacio propio para las marcas' },
      ]}
      closing="Todos bajo el sistema oficial de la asociación"
      cta={{ label: 'Quiero Weball en mi asociación', href: '#contacto' }}
      visual={<AssociationDiagram light className="w-full max-w-md" />}
    />
  )
}
