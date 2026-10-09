import FeatureSection from './FeatureSection.jsx'

export default function Clubs() {
  return (
    <FeatureSection
      id="clubes"
      light
      icon="club"
      tag="Gestión para clubes"
      title="El club se organiza, la liga controla"
      text="Los clubes cargan su información directo en Weball: fichan a sus jugadores, arman sus planteles y acuerdan fecha, hora y sede de cada partido. La liga ve todo y aprueba."
      phrase="Fichá a tus jugadores desde el celular."
      points={[
        'Fichajes e inscripciones sin papeles ni idas y vueltas.',
        'Planteles por categoría, siempre actualizados.',
        '9 de cada 10 cargas ya las hacen clubes y árbitros.',
      ]}
    />
  )
}
