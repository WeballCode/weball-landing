// Las ligas que usan Weball y sus cifras. Fuente: datos de Weball al 11 de noviembre de 2026,
// redondeados hacia abajo. Al actualizar, mantené el "+" y el punto de miles (ej: '+46.000').

// Totales de las ligas clientes (sin demos ni pruebas)
export const totales = [
  { value: '+67.000', label: 'Jugadores fichados' },
  { value: '+1.200', label: 'Clubes' },
  { value: '+90.000', label: 'Partidos jugados' },
  { value: '+900', label: 'Partidos por semana' },
]
export const totalesNota = 'Ligas que usan Weball. Partidos por semana: promedio de marzo a noviembre de 2026.'

export const futsala = {
  name: 'FUTSALA',
  sport: 'Futsal',
  text: 'Futsal en Buenos Aires y filiales en Argentina, Colombia, Uruguay y Chile. Cada filial trabaja con su propio sistema, su web y su zona horaria, bajo la misma organización.',
  stats: [
    { value: '+46.000', label: 'Jugadores' },
    { value: '+450', label: 'Clubes' },
    { value: '+76.000', label: 'Partidos jugados' },
    { value: '+35.000', label: 'Fichajes desde el celular' },
  ],
  // Filiales, de mayor a menor. `country` es el código del país; `web`, sólo si el dominio está activo.
  filiales: [
    { name: 'Buenos Aires', country: 'AR', players: '+46.000', matches: '+76.000', web: 'futsala.ar' },
    { name: 'Colombia', country: 'CO', players: '+4.100', matches: '+2.500', web: 'futsala.co' },
    { name: 'Tucumán', country: 'AR', players: '+2.500', matches: '+450' },
    { name: 'Bahía Blanca', country: 'AR', players: '+1.400', matches: '+800', web: 'bahia.futsala.ar' },
    { name: 'Uruguay', country: 'UY', players: '+950', matches: '+500' },
    { name: 'Córdoba (ACFA)', country: 'AR', players: '+900', matches: '+600' },
    { name: 'Chile', country: 'CL', players: '+370', matches: '+130' },
    { name: 'Salta', country: 'AR', players: '+160', matches: '+150', web: 'salta.futsala.ar' },
  ],
  // Cómo se adaptó Weball a FUTSALA y a sus datos (todo esto existe hoy)
  adaptaciones: [
    {
      title: 'Un sistema por filial',
      text: 'Cada filial tiene su propio sistema, con su zona horaria, su idioma y su país, y todas responden a la misma organización.',
    },
    {
      title: 'Una web por país',
      text: 'futsala.ar, futsala.co y los dominios de sus filiales, con el menú agrupado por país.',
    },
    {
      title: 'Sus estados de partido',
      text: 'Doce estados propios, como "No presentación", "Resuelve Tribunal", "Fallo Tribunal" o "Postergado", cada uno con sus reglas.',
    },
    {
      title: 'Su sistema, conectado',
      text: 'Weball le envía al sistema propio de FUTSALA las inscripciones de clubes y los usuarios.',
    },
    {
      title: 'Su colegio de árbitros',
      text: 'Un colegio de más de 400 árbitros, compartido con BAFI, que trabaja en Weball con su propio panel.',
    },
    {
      title: 'Sus planillas de Google',
      text: 'La programación, las designaciones y los informes arbitrales se copian a las planillas que la liga ya usaba.',
    },
    {
      title: 'Su aseguradora',
      text: 'El listado de jugadores para el seguro sale en el formato que pide su aseguradora.',
    },
    {
      title: 'Padrón cerrado en Córdoba',
      text: 'ACFA ficha sólo a los jugadores de su padrón, que nuestro equipo cargó desde sus datos.',
    },
    {
      title: 'Beneficios para los fichados',
      text: 'Los jugadores validados de Buenos Aires, Colombia y Córdoba acceden a la tienda de beneficios desde la app.',
    },
  ],
}

export const otras = [
  {
    id: 'bafi',
    name: 'BAFI',
    sport: 'Futsal',
    text: 'Liga de futsal con su propio tribunal y su propio reglamento disciplinario. Es la primera liga con Tribunal IA en su tribunal real.',
    stats: [
      { value: '+9.200', label: 'Jugadores' },
      { value: '+170', label: 'Clubes' },
      { value: '+9.100', label: 'Partidos jugados' },
    ],
    points: [
      { title: 'Tribunal IA', text: 'Desde noviembre de 2026, en modo supervisado y con su Reglamento Disciplinario 2026.' },
      { title: 'Programación por propuestas', text: 'Más de 1.700 programaciones resueltas entre los clubes y la liga.' },
      { title: 'Colegio de árbitros compartido', text: 'El mismo que FUTSALA, con más de 8.000 designaciones en BAFI.' },
      { title: 'Boletines y caja', text: 'Más de 60 boletines publicados y la caja de la liga en Weball.' },
    ],
  },
  {
    id: 'handball',
    name: 'Superliga Handball',
    sport: 'Handball',
    text: 'Liga Handball Baires: el torneo KEMPA, con Mayores y Másters de damas y caballeros. Weball funciona con las reglas del handball.',
    stats: [
      { value: '+680', label: 'Jugadores' },
      { value: '+40', label: 'Clubes' },
      { value: '+350', label: 'Partidos jugados' },
    ],
    points: [
      { title: 'Las reglas del handball', text: 'Gol, exclusión de 2 minutos, amarilla, roja y azul; tres exclusiones dan roja.' },
      { title: 'Su planilla', text: 'Con recuadros para los dos árbitros y la mesa de control.' },
      { title: 'Su app', text: 'Con su marca: Superliga Handball.' },
      { title: 'Fichaje desde el celular', text: 'Más de 850 fichajes con identidad validada.' },
    ],
  },
  {
    id: 'edmonton',
    name: 'Edmonton Futsal League',
    sport: 'Futsal · Canadá',
    text: 'La temporada 2025-26 de la liga de futsal de Edmonton se jugó en Weball, en inglés y con la hora de Canadá.',
    stats: [
      { value: '+580', label: 'Jugadores' },
      { value: '28', label: 'Clubes', count: false },
      { value: '+220', label: 'Partidos jugados' },
    ],
    points: [
      { title: 'En inglés', text: 'Con su web de posiciones en su propio dominio.' },
      { title: 'Con su hora', text: 'Cada partido con la zona horaria de Edmonton.' },
      { title: 'Torneos, árbitros y tribunal', text: 'Fixture, designaciones, sanciones y caja en un mismo sistema.' },
    ],
  },
]

// Para la cinta de la principal
export const nombres = [
  'FUTSALA',
  'Futsala Colombia',
  'Futsala Uruguay',
  'Futsala Chile',
  'Córdoba',
  'Tucumán',
  'Bahía Blanca',
  'Salta',
  'BAFI',
  'Superliga Handball',
]
