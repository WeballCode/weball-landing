import FeatureSection from './FeatureSection.jsx'

export default function Credential() {
  return (
    <FeatureSection
      id="credencial"
      light
      icon="credencial"
      tag="Credencial digital"
      title="Sabés quién juega"
      text="Cada jugador lleva su credencial en el celular, con su foto, su club y su estado al día. Con la marca de tu liga, lleva su nombre: la credencial de Futsala se llama Futsala ID."
      phrase="Validación de identidad en cada fichaje."
      points={[
        'Se acabaron las credenciales de papel y las fotocopias.',
        'Antes del partido se ve si el jugador está habilitado.',
        'Las sanciones y los fichajes se reflejan en la credencial.',
      ]}
    />
  )
}
