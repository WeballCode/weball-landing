import ProductSection from './ProductSection.jsx'
import ScoresFeed from './ScoresFeed.jsx'
import { Reveal } from './motion.jsx'

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

// Una fila de escudos que se desliza de costado en loop (ocupa poco alto)
function ClubRow({ hidden = false }) {
  return (
    <ul className="flex shrink-0 gap-3 pr-3" aria-hidden={hidden || undefined}>
      {clubs.map((c) => (
        <li key={c.file} className="h-20 w-20 shrink-0 bg-white p-2.5" title={c.name}>
          {/* Cada imagen ya viene recortada y centrada en un cuadrado blanco del mismo tamaño */}
          <img
            src={`./clubes/${c.file}.png`}
            alt={hidden ? '' : c.name}
            loading="lazy"
            width="256"
            height="256"
            className="block h-full w-full object-contain"
          />
        </li>
      ))}
    </ul>
  )
}

function ClubWall() {
  return (
    <div>
      <Reveal as="p" className="text-sm font-medium uppercase tracking-[0.2em] text-bruma">
        Juegan en ligas con Weball
      </Reveal>
      <div className="mt-5 overflow-hidden">
        <div className="marquee-slow flex w-max hover:[animation-play-state:paused]">
          <ClubRow />
          <ClubRow hidden />
        </div>
      </div>
    </div>
  )
}

export default function Scores() {
  return (
    <ProductSection
      id="scores"
      icon="comunidad"
      audience="Weball Scores"
      name="Nuestra comunidad"
      title="Unimos a todas nuestras ligas, clubes y deportistas."
      stats={[
        { value: '+35.000', label: 'Jugadores' },
        { value: '+5.000', label: 'Entrenadores' },
        { value: '+400', label: 'Clubes' },
        { value: '+300', label: 'Árbitros' },
      ]}
      aside={<ScoresFeed />}
      footer={<ClubWall />}
    />
  )
}
