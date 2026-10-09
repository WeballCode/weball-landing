import { useEffect, useState } from 'react'
import ProductSection from './ProductSection.jsx'
import { SponsorsDrawing, sponsorScenes } from './SponsorsVisual.jsx'
import { prefersReducedMotion, useInView } from './motion.jsx'

const items = [
  { name: 'Auspicio de secciones', text: 'Tablas, partidos y perfiles.' },
  { name: 'Activá tu perfil en la comunidad', text: 'Con tu tienda integrada.' },
  { name: 'Mirá tus métricas', text: 'Para medir tu alcance.' },
]
const STEP_MS = 4200

export default function Sponsors() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  // Avanza de punto solo mientras la sección se ve; el dibujo y la lista van juntos
  useEffect(() => {
    if (!inView || reduced) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % sponsorScenes.length)
      setRound((r) => r + 1)
    }, STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, index])

  return (
    <ProductSection
      id="sponsors"
      icon="inversor"
      audience="Para marcas"
      name="Weball Sponsors"
      title="Formá parte de la experiencia popular amateur."
      items={items}
      activeIndex={reduced ? undefined : index}
      closing="Participá y medí los resultados"
      cta={{ label: 'Quiero ser sponsor', href: '#contacto' }}
      visual={
        <div ref={ref} className="w-full max-w-md" role="img" aria-label={`Weball Sponsors: ${items[index].name}`}>
          <div key={round} className="format-enter">
            <SponsorsDrawing index={index} play={inView} />
          </div>
        </div>
      }
    />
  )
}
