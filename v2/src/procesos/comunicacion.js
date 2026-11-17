// Proceso 08 · Comunicación y marketing. Textos de la página comunicacion.html.
export default {
  kicker: 'App, web y sponsors',
  promise:
    'Cada jugador recibe en la app lo de su partido, tu liga tiene su web con dominio propio y los sponsors auspician las competencias que eligen.',
  stats: [
    { value: '+31.000', label: 'Cuentas en la app de FUTSALA' },
    { value: '3', label: 'Idiomas de la web: español, inglés y portugués', count: false },
  ],
  statsNote: 'Noviembre de 2026.',

  painsTitle: 'Miles de personas, un grupo de WhatsApp',
  painsLead: 'Cada jugador necesita saber lo de su partido, no los mensajes de toda la liga.',
  pains: [
    {
      title: 'Avisos que no llegan',
      text: 'Horarios, resultados y sanciones repartidos en grupos de WhatsApp donde nadie encuentra lo suyo.',
    },
    {
      title: 'Avisos que saturan',
      text: 'Con cientos de partidos por fecha, avisar todo a todos termina en notificaciones que nadie lee.',
    },
    {
      title: 'Sponsors sin dónde aparecer',
      text: 'Las marcas quieren llegar a jugadores y familias, pero la liga no tiene un lugar propio para mostrarlas.',
    },
  ],

  featuresTitle: 'Cada uno recibe lo suyo',
  featuresLead: 'La app, la web y los avisos salen de los mismos datos de la liga.',
  features: [
    {
      title: 'Avisos automáticos en la app',
      text: 'Fecha confirmada, reprogramación, falta una hora, resultado final, tabla actualizada, sanción nueva y sanción cumplida: cada aviso le llega sólo a quien le toca.',
      who: ['Jugador'],
    },
    {
      title: 'Sin saturar',
      text: 'Los avisos se agrupan, hay un máximo por día y silencio de noche. Lo urgente, como un cambio de horario cercano, sale igual.',
      who: ['Jugador'],
    },
    {
      title: 'Cada uno elige',
      text: 'Cada tipo de aviso se prende o se apaga para la liga, y cada persona elige qué quiere recibir.',
      who: ['Liga', 'Jugador'],
    },
    {
      title: 'Avisos desde el panel',
      text: 'La liga escribe a personas, admins o delegados, con el partido o el club adjunto, y también por email o WhatsApp.',
      who: ['Liga', 'Club'],
    },
    {
      title: 'WhatsApp a árbitros y clubes',
      text: 'Designaciones y cambios de partido a los árbitros; propuestas y cambios de programación a los clubes.',
      who: ['Árbitro', 'Club'],
    },
    {
      title: 'Noticias de la liga',
      text: 'Noticias en la app, programadas y con aviso opcional, y en la web, vinculadas a un partido.',
      who: ['Liga', 'Público'],
    },
    {
      title: 'Fotos, videos y momentos',
      text: 'Los jugadores, el cuerpo técnico y los árbitros de cada partido suben fotos y videos, moderados por la comunidad. Hay momentos de 24 horas con el partido, el resultado y el goleador.',
      who: ['Jugador', 'Público'],
    },
    {
      title: 'La web de tu liga',
      text: 'Con dominio propio y la marca de la liga: competiciones, partidos en vivo, equipos, tribunal, noticias y la inscripción de clubes.',
      who: ['Público'],
    },
    {
      title: 'La app con tu marca',
      text: 'La app de la liga con su nombre y sus colores, como las de Futsala y Superliga Handball.',
      who: ['Jugador', 'Público'],
    },
    {
      title: 'Sponsors por competición',
      text: 'Cada sponsor aparece en las competiciones y pantallas que elige, puede ser "Presentado por" en una pestaña del torneo y ofrecer beneficios con su botón de contacto.',
      who: ['Sponsor'],
    },
  ],

  caso: {
    kicker: 'FUTSALA',
    title: 'La app y la web oficiales de FUTSALA',
    text: 'Futsala tiene su app con su marca y una web por país, todas con los datos de Weball.',
    points: [
      { title: '+31.000 cuentas', text: 'Cada jugador fichado entra con su identidad validada y sigue sus partidos.' },
      { title: 'Una web por país', text: 'futsala.ar, futsala.co y los dominios de sus filiales, con el menú agrupado por país.' },
      { title: 'Beneficios para los fichados', text: 'La tienda de beneficios de la liga, dentro de la app, para los jugadores validados.' },
    ],
  },

  connections: {
    lead: 'Los avisos salen de lo que pasa en los otros procesos, y llegan a quien le corresponde según su fichaje.',
    from: [
      { slug: 'programacion', text: 'Confirmaciones y reprogramaciones, para avisar a cada jugador.' },
      { slug: 'resultados', text: 'El resultado final y la tabla de cada fecha.' },
      { slug: 'tribunal', text: 'Las sanciones nuevas y las cumplidas.' },
    ],
    to: [{ slug: 'fichajes', text: 'La pre-inscripción de clubes, desde la web de la liga.' }],
    external: [
      'Tu web o tu sistema pueden leer fixture, tablas, clubes y planteles desde nuestra API pública de lectura.',
      'Si tu liga ya tiene web, la app y los avisos funcionan igual.',
    ],
  },
}
