import ProductSection from './ProductSection.jsx'

export default function Liga() {
  return (
    <ProductSection
      id="liga"
      icon="liga"
      audience="Para ligas"
      name="Weball Liga"
      title="Organizá tu liga en minutos."
      items={[
        { name: 'Inscribí a tus equipos y clubes con un link' },
        { name: 'Fichá a los jugadores y armá los planteles' },
        { name: 'Armá los torneos a medida y en minutos' },
        { name: 'Programá los partidos y designá a los árbitros' },
        { name: 'Cargá y publicá los resultados al instante' },
      ]}
      closing="Todo lo que tu liga necesita para funcionar"
      cta={{ label: 'Quiero Weball en mi liga', href: '#contacto' }}
    />
  )
}
