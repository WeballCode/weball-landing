import { useEffect, useState } from 'react'
import ProductSection from './ProductSection.jsx'
import { LigaDrawing, ligaScenes } from './LigaVisual.jsx'
import { prefersReducedMotion, useInView } from './motion.jsx'

const items = [
  { name: 'Inscribí a tus equipos y clubes con un link' },
  { name: 'Fichá a los jugadores y armá los planteles' },
  { name: 'Armá los torneos a medida y en minutos' },
  { name: 'Programá los partidos y designá a los árbitros' },
  { name: 'Cargá y publicá los resultados al instante' },
]
const STEP_MS = 3600

export default function Liga() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  // Avanza de paso solo mientras la sección se ve; el dibujo y la lista van juntos
  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % ligaScenes.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  return (
    <ProductSection
      id="liga"
      light
      icon="liga"
      audience="Weball Liga"
      name="Ligas"
      title="Organizá tu liga en minutos."
      items={items}
      activeIndex={reduced ? undefined : index}
      closing="Todo lo que tu liga necesita para funcionar"
      cta={{ label: 'Quiero Weball en mi liga', href: '#contacto' }}
      visual={
        <div ref={ref} className="w-full max-w-md" role="img" aria-label={`Weball Liga, paso ${index + 1}: ${items[index].name}`}>
          <div key={round} className="format-enter">
            <LigaDrawing index={index} play={inView} />
          </div>
        </div>
      }
    />
  )
}
