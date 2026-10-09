import ProductSection from './ProductSection.jsx'
import { COMMUNITY_URL } from '../links.js'

// Escudos de clubes que hoy están en Weball: guardá cada imagen en public/clubes/ y sumala acá,
// por ejemplo { name: 'Club Atlético Ejemplo', src: './clubes/ejemplo.png' }. Si la lista está vacía, no se muestra.
const clubs = []

export default function Scores() {
  return (
    <ProductSection
      id="scores"
      light
      icon="comunidad"
      audience="Para jugadores, clubes y público"
      name="Weball Scores"
      title="Nuestra comunidad de ligas, clubes y deportistas."
      stats={[
        { value: '+35.000', label: 'Jugadores' },
        { value: '+5.000', label: 'Entrenadores' },
        { value: '+400', label: 'Clubes' },
        { value: '+300', label: 'Árbitros' },
      ]}
      visual={
        clubs.length > 0 && (
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-acero">Están en Weball</p>
            <ul className="mt-4 flex flex-wrap items-center gap-6">
              {clubs.map((c) => (
                <li key={c.name}>
                  <img src={c.src} alt={c.name} title={c.name} className="h-14 w-14 object-contain" />
                </li>
              ))}
            </ul>
          </div>
        )
      }
      items={[
        { name: 'Estadísticas de todos los torneos', text: 'Partidos, resultados y tablas.' },
        { name: 'Perfiles de jugadores, cuerpo técnico y árbitros' },
      ]}
      closing="Dale a tu torneo la visibilidad que merece"
      cta={COMMUNITY_URL ? { label: 'Entrá a We Are Weball', href: COMMUNITY_URL, external: true } : null}
    />
  )
}
