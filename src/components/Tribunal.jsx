import TribunalShowcase from './TribunalShowcase.jsx'
import { SolutionLayout } from './Modules.jsx'

// Tribunal IA: misma estructura que las demás soluciones, en celeste para que se destaque
export default function Tribunal() {
  return (
    <SolutionLayout
      id="tribunal"
      tone="celeste"
      icon="tribunal"
      name="Tribunal IA"
      text="Cargá tus reglamentos y dejá que nuestro agente se ocupe de sancionar."
      show={<TribunalShowcase />}
    />
  )
}
