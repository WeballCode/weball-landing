// Proceso 03 · Programación del partido. Textos de la página programacion.html.
export default {
  kicker: 'Día, hora y sede',
  promise:
    'Los clubes proponen día, hora y sede de cada cruce dentro de las reglas de la liga. El rival acepta, la liga aprueba lo que hace falta y todos reciben el aviso.',
  stats: [
    { value: '+11.000', label: 'Programaciones resueltas' },
    { value: '+900', label: 'Partidos por semana' },
  ],
  statsNote: 'Programaciones de FUTSALA y BAFI. Partidos de todas las ligas, de marzo a noviembre de 2026.',

  painsTitle: 'Cientos de partidos por fin de semana',
  painsLead: 'Acordar cada partido entre el local, el visitante y la liga deja de ser posible a mano.',
  pains: [
    {
      title: 'Cada cruce, varias categorías',
      text: 'Cada categoría necesita día, hora y sede, acordados entre dos clubes y aprobados por la liga.',
    },
    {
      title: 'Todo por WhatsApp',
      text: 'Propuestas, rechazos y cambios de último momento en chats que nadie puede seguir, sin saber qué quedó confirmado.',
    },
    {
      title: 'Plazos que se vencen',
      text: 'Clubes que no proponen a tiempo, partidos sin sede y no presentaciones que aparecen el viernes a la noche.',
    },
  ],

  featuresTitle: 'El club propone, la liga aprueba',
  featuresLead: 'Un circuito con reglas claras: la liga sólo interviene en las excepciones.',
  features: [
    {
      title: 'Ventanas de programación',
      text: 'La liga elige qué fechas, torneos o partidos se programan, qué días pueden proponer los clubes y entre qué fechas tienen que jugarse.',
      who: ['Liga'],
    },
    {
      title: 'Desdobles por jornada',
      text: 'Para cada fase, la liga define cómo se reparten las categorías de un cruce: qué días, en qué orden y entre qué horarios.',
      who: ['Liga'],
    },
    {
      title: 'El club propone',
      text: 'El delegado carga día, sede y horario de cada categoría. Si algo no cumple las reglas de la liga, el sistema se lo dice en el momento.',
      points: ['Día no permitido', 'Categoría fuera de horario', 'Orden distinto al de la liga'],
      who: ['Club'],
    },
    {
      title: 'Rival y liga, en un solo circuito',
      text: 'El rival acepta o rechaza y la liga aprueba. Si la propuesta respeta las reglas, se puede aprobar sola.',
      who: ['Club', 'Liga'],
    },
    {
      title: 'Bandejas con plazos',
      text: 'Esperando propuesta, esperando respuesta, por aprobar, vencidas, en prórroga o confirmadas sin sede: la liga ve dónde está cada partido.',
      who: ['Liga'],
    },
    {
      title: 'Estados con el nombre de tu liga',
      text: 'Cada liga define sus estados, con su color y lo que permiten: reprogramar, sumar a la tabla o designar árbitros.',
      who: ['Liga'],
    },
    {
      title: 'Editor masivo',
      text: 'Cambiá en un solo paso fecha, horario, sede, estado o árbitros de cientos de partidos, respetando la zona horaria de la liga.',
      who: ['Liga'],
    },
    {
      title: 'No presentaciones y reprogramaciones',
      text: 'Una no presentación llega sola al tribunal. Los partidos suspendidos vuelven a una ventana nueva para programarse otra vez.',
      who: ['Club', 'Liga', 'Tribunal'],
    },
    {
      title: 'Avisos a todos',
      text: 'Recordatorio por WhatsApp a los clubes que no propusieron, email y WhatsApp al confirmar, y aviso en la app a los jugadores de cada categoría.',
      who: ['Club', 'Jugador'],
    },
  ],

  caso: {
    kicker: 'FUTSALA',
    title: 'Cientos de partidos cada fin de semana',
    text: 'En FUTSALA, los clubes proponen y la liga aprueba la programación de cientos de partidos por fecha, con todas sus categorías.',
    points: [
      {
        title: '+9.000 programaciones',
        text: 'Cada una es un cruce con todas sus categorías, propuesto por el club local y aprobado por la liga.',
      },
      {
        title: 'Su planilla de Google, al día',
        text: 'La programación se copia sola a la planilla que la liga ya usaba, cada 30 minutos.',
      },
      {
        title: 'Árbitros sobre lo confirmado',
        text: 'Apenas se confirma un partido, el colegio de árbitros lo ve y lo designa.',
      },
    ],
  },

  connections: {
    lead: 'La programación toma cada cruce del fixture y le pone día, hora y sede. De ahí salen las designaciones, las planillas y los avisos.',
    from: [
      { slug: 'fixture', text: 'Cada programación es un cruce del fixture, con sus categorías y sus desdobles.' },
      { slug: 'fichajes', text: 'Los delegados de cada club proponen con su propio usuario.' },
    ],
    to: [
      { slug: 'arbitros', text: 'Los partidos confirmados, para designar coordinador y árbitros.' },
      { slug: 'tribunal', text: 'Las no presentaciones, como un caso más.' },
      { slug: 'comunicacion', text: 'Push, WhatsApp y email con cada confirmación o cambio.' },
    ],
    external: [
      'La programación se copia sola a una planilla de Google cada 30 minutos.',
      'Necesita el fixture en Weball: si hoy lo armás en otro sistema, primero lo traemos.',
    ],
  },
}
