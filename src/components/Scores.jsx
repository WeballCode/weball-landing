import ProductSection from './ProductSection.jsx'
import { COMMUNITY_URL } from '../links.js'

// Escudos de clubes que hoy juegan en ligas con Weball. Las imágenes están en public/clubes/.
// Para sumar uno: guardá la imagen ahí y agregá una línea con su nombre.
const clubs = [
  { name: 'Boca Juniors', file: 'boca-juniors' },
  { name: 'River Plate', file: 'river-plate' },
  { name: 'Racing Club', file: 'racing' },
  { name: 'Independiente', file: 'independiente' },
  { name: 'San Lorenzo', file: 'san-lorenzo' },
  { name: 'Huracán', file: 'huracan' },
  { name: 'Vélez Sarsfield', file: 'velez' },
  { name: 'Estudiantes de La Plata', file: 'estudiantes' },
  { name: 'Banfield', file: 'banfield' },
  { name: 'Platense', file: 'platense' },
  { name: 'Ferro Carril Oeste', file: 'ferro' },
  { name: 'All Boys', file: 'all-boys' },
  { name: 'Deportivo Morón', file: 'deportivo-moron' },
  { name: 'Kimberley', file: 'kimberley' },
  { name: 'San Martín Futsal', file: 'san-martin-futsal' },
  { name: '17 de Agosto Futsal', file: '17-de-agosto' },
  { name: 'Amigos de Villa Luro', file: 'amigos-de-villa-luro' },
  { name: 'Club S. y D. Pacífico', file: 'pacifico' },
  { name: 'C.S.D.P.', file: 'csdp' },
  { name: 'C.A.', file: 'ca' },
  { name: 'C.P.', file: 'cp' },
]

function ClubWall() {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-acero">Juegan en ligas con Weball</p>
      <ul className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-7">
        {clubs.map((c) => (
          <li key={c.file} className="bg-white" title={c.name}>
            {/* Cada imagen ya viene recortada y centrada en un cuadrado blanco del mismo tamaño */}
            <img
              src={`./clubes/${c.file}.png`}
              alt={c.name}
              loading="lazy"
              width="256"
              height="256"
              className="block aspect-square w-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

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
      items={[
        { name: 'Estadísticas de todos los torneos', text: 'Partidos, resultados y tablas.' },
        { name: 'Perfiles de jugadores, cuerpo técnico y árbitros' },
      ]}
      closing="Dale a tu torneo la visibilidad que merece"
      cta={COMMUNITY_URL ? { label: 'Entrá a We Are Weball', href: COMMUNITY_URL, external: true } : null}
      footer={<ClubWall />}
    />
  )
}
