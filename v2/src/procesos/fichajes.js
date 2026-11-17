// Proceso 01 · Fichajes, clubes y administración. Textos de la página fichajes.html.
export default {
  kicker: 'Credencial digital',
  promise:
    'Los clubes se inscriben con un link y cada jugador se ficha desde el celular con DNI y selfie. La liga revisa sólo lo dudoso y cada uno queda con su credencial digital.',
  stats: [
    { value: '+67.000', label: 'Jugadores fichados' },
    { value: '+49.000', label: 'Fichajes desde el celular' },
  ],
  statsNote: 'Ligas que usan Weball, noviembre de 2026.',

  painsTitle: 'Miles de fichajes en pocas semanas',
  painsLead: 'Al arrancar la temporada, cientos de clubes fichan a miles de jugadores al mismo tiempo.',
  pains: [
    {
      title: 'Un documento por jugador',
      text: 'Fotocopias, carpetas y fila en la sede: alguien tiene que revisar cada DNI y cada foto a mano.',
    },
    {
      title: '¿Quién está habilitado?',
      text: 'Saber en la puerta de la cancha si un jugador está fichado, si pagó, si está suspendido y si juega en la categoría que le corresponde.',
    },
    {
      title: 'Clubes y caja en planillas',
      text: 'Inscripciones, montos, bonificaciones y pagos de cada club repartidos en planillas que no coinciden.',
    },
  ],

  featuresTitle: 'Cada jugador se ficha solo',
  featuresLead: 'La liga fija las reglas; los clubes y los jugadores hacen el resto.',
  features: [
    {
      title: 'Inscripción de clubes por link',
      text: 'La liga publica un formulario en su web: el club carga sus datos, su logo, las categorías que pide y si tiene cancha. La liga aprueba y el club queda inscripto.',
      points: ['Aperturas con fecha y cupo de equipos', 'Monto, contratos y categorías por temporada'],
      who: ['Club', 'Liga'],
    },
    {
      title: 'Fichaje desde el celular',
      text: 'El club comparte un link o un QR. El jugador carga el DNI de frente y dorso, se saca una selfie y verifica su email o su teléfono. Si es menor, suma a su tutor.',
      who: ['Club', 'Jugador'],
    },
    {
      title: 'Identidad validada',
      text: 'El sistema lee el documento y compara la cara del DNI con la selfie. La liga puede aprobar solos los casos claros y revisar sólo los dudosos.',
      points: ['Lectura automática del DNI', 'Prueba de vida en una parte de los casos', 'Un DNI no se puede fichar en dos clubes'],
      who: ['Liga'],
    },
    {
      title: 'El club, primer filtro',
      text: 'Si la liga lo activa, el delegado aprueba a sus jugadores antes de que lleguen a la liga.',
      who: ['Club'],
    },
    {
      title: 'Las reglas de tu liga',
      text: 'Contratos por año de nacimiento y temporada, límites de edad y género, liberaciones y recategorizaciones, según tu reglamento.',
      who: ['Liga'],
    },
    {
      title: 'Fichaje asistido',
      text: 'Para quien no puede hacerlo solo: el delegado carga los datos en la compu y usa su celular para escanear el DNI y la selfie.',
      who: ['Club'],
    },
    {
      title: 'Credencial digital',
      text: 'Con el diseño de tu liga, para mostrar en la puerta. Se desactiva sola si el jugador tiene una roja pendiente, no pagó o su inscripción está pausada.',
      who: ['Jugador', 'Liga'],
    },
    {
      title: 'Estados y contadores',
      text: 'Estados de fichaje con el nombre y el color de tu liga, contadores por club y cambios masivos con vista previa.',
      who: ['Liga'],
    },
    {
      title: 'Permisos por rol',
      text: 'Más de 60 permisos para los admins de la liga, y delegados que manejan sólo su club: fichar, recategorizar y programar.',
      who: ['Liga', 'Club'],
    },
    {
      title: 'Caja de la liga',
      text: 'Ingresos y egresos con comprobante, cuentas por club y por jugador, precio por contrato, bonificaciones y reporte en PDF.',
      who: ['Liga'],
    },
    {
      title: 'Auditoría de sedes',
      text: 'Auditores que revisan cada sede con su lista de control y sus fotos, y la liga que aprueba o rechaza.',
      who: ['Liga'],
    },
    {
      title: 'Reportes en Excel',
      text: 'Fichajes por club y por categoría, planteles, cuerpo técnico y comparativos entre fechas.',
      who: ['Liga'],
    },
  ],

  caso: {
    kicker: 'FUTSALA',
    title: '+35.000 fichajes desde el celular',
    text: 'En FUTSALA, los jugadores de más de 450 clubes se fichan desde el celular, con su identidad validada antes de llegar a la liga.',
    points: [
      { title: '+46.000 jugadores', text: 'Fichados en FUTSALA, cada uno con su credencial digital.' },
      { title: '+450 clubes', text: 'Cada uno con sus delegados, que fichan y gestionan sólo su club.' },
      { title: 'Su sistema, conectado', text: 'Weball le envía las inscripciones de clubes y los usuarios al sistema propio de FUTSALA.' },
    ],
  },

  connections: {
    lead: 'El fichaje es la puerta de entrada: de acá salen los equipos del fixture, los habilitados de cada planilla y los usuarios de la app.',
    from: [
      { slug: 'tribunal', text: 'Las sanciones, que desactivan la credencial hasta cumplirlas.' },
      { slug: 'comunicacion', text: 'La pre-inscripción de clubes desde la web de la liga.' },
    ],
    to: [
      { slug: 'fixture', text: 'Los clubes inscriptos y sus equipos en cada categoría.' },
      { slug: 'planillas', text: 'La lista de buena fe de cada equipo.' },
      { slug: 'comunicacion', text: 'Cada jugador fichado tiene su cuenta en la app y recibe los avisos de su partido.' },
    ],
    external: [
      'Fichajes, planteles y cuerpo técnico se exportan en Excel.',
      'Si tu liga tiene su propio sistema, le enviamos las inscripciones: lo hacemos con FUTSALA.',
      'Si tus jugadores ya están cargados en otro lado, nuestro equipo los trae a Weball.',
    ],
  },
}
