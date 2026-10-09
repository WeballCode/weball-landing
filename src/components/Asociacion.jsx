import ProductSection from './ProductSection.jsx'

export default function Asociacion() {
  return (
    <ProductSection
      id="asociacion"
      icon="gestion"
      audience="Para asociaciones y federaciones"
      name="Weball Asociación"
      title="Tené tu propio sistema y tu app, con todas tus ligas adentro."
      items={[
        { name: 'Su gestión', text: 'Para que cada liga organice su actividad.' },
        { name: 'Su comunidad', text: 'De equipos, torneos y jugadores.' },
        { name: 'Su espacio propio para las marcas' },
      ]}
      closing="Todos bajo el sistema oficial de la asociación"
      cta={{ label: 'Quiero Weball en mi asociación', href: '#contacto' }}
    />
  )
}
