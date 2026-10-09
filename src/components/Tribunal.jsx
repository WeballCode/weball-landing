import FeatureSection from './FeatureSection.jsx'

export default function Tribunal() {
  return (
    <FeatureSection
      id="tribunal"
      icon="tribunal"
      tag="Tribunal de disciplina con IA"
      title="Sanciones claras y bajo control"
      text="La inteligencia artificial lee el informe del árbitro, lo cruza con el reglamento de tu liga y con los antecedentes del jugador, y le propone al tribunal una resolución. El tribunal revisa y decide."
      phrase="Mismo hecho, misma sanción."
      points={[
        'Resoluciones más rápidas, antes de la próxima fecha.',
        'El mismo criterio para todos los clubes.',
        'Cada sanción queda registrada y se aplica a la credencial del jugador.',
      ]}
    />
  )
}
