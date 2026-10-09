import ProductSection from './ProductSection.jsx'
import { COMMUNITY_URL } from '../links.js'

export default function Scores() {
  return (
    <ProductSection
      id="scores"
      light
      icon="comunidad"
      audience="Para jugadores, clubes y público"
      name="Weball Scores"
      title="Nuestra comunidad de ligas, clubes y deportistas."
      items={[
        { name: 'Estadísticas de todos los torneos', text: 'Partidos, resultados y tablas.' },
        { name: 'Fotos y videos de los partidos' },
        { name: 'Perfiles de jugadores, cuerpo técnico y árbitros' },
      ]}
      closing="Dale a tu torneo la visibilidad que merece"
      cta={COMMUNITY_URL ? { label: 'Entrá a We Are Weball', href: COMMUNITY_URL, external: true } : null}
    />
  )
}
