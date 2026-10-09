import ProductSection from './ProductSection.jsx'

export default function Sponsors() {
  return (
    <ProductSection
      id="sponsors"
      icon="inversor"
      audience="Para marcas"
      name="Weball Sponsors"
      title="Formá parte de la experiencia popular amateur."
      items={[
        { name: 'Auspicio de secciones', text: 'Tablas, partidos y perfiles.' },
        { name: 'Activá tu perfil en la comunidad', text: 'Con tu tienda integrada.' },
        { name: 'Mirá tus métricas', text: 'Para medir tu alcance.' },
      ]}
      closing="Participá y medí los resultados"
      cta={{ label: 'Quiero ser sponsor', href: '#contacto' }}
    />
  )
}
