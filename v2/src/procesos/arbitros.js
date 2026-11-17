// Proceso 05 · Asignación de árbitros. Textos de la página arbitros.html.
export default {
  kicker: 'Designaciones',
  promise:
    'Designá a los árbitros de cada fecha sin choques de horario ni licencias pisadas. Cada árbitro recibe su partido y confirma desde el celular.',
  stats: [
    { value: '+50.000', label: 'Designaciones en FUTSALA y BAFI' },
    { value: '+400', label: 'Árbitros en un mismo colegio' },
  ],
  statsNote: 'FUTSALA y BAFI, noviembre de 2026.',

  painsTitle: 'Decenas de árbitros por fin de semana',
  painsLead: 'Cada partido necesita su árbitro, su asistente o su mesa, en la sede y el horario correctos.',
  pains: [
    {
      title: 'Choques de horario',
      text: 'Un árbitro designado en dos canchas a la misma hora, o en un partido el día que pidió licencia.',
    },
    {
      title: '¿Quién confirmó?',
      text: 'Llamar uno por uno para saber quién va, y enterarse el sábado de que alguien no puede.',
    },
    {
      title: 'Designaciones viejas',
      text: 'Partidos que se reprograman y quedan con árbitros que ya no van a estar.',
    },
  ],

  featuresTitle: 'Designaciones sin choques',
  featuresLead: 'El sistema conoce la agenda de cada árbitro y no deja designar mal.',
  features: [
    {
      title: 'Padrón de árbitros',
      text: 'Cada árbitro se suma con un link de invitación y el coordinador valida su fichaje. Grupos, subgrupos y temporadas.',
      who: ['Liga', 'Árbitro'],
    },
    {
      title: 'Tipos a medida',
      text: 'Principal, asistente o mesa de control: la liga define los tipos de árbitro que necesita cada partido.',
      who: ['Liga'],
    },
    {
      title: 'Licencias',
      text: 'El árbitro pide su licencia desde el celular y el coordinador la aprueba. Hay un calendario de quién no está disponible cada día.',
      who: ['Árbitro', 'Liga'],
    },
    {
      title: 'Designación masiva, sin choques',
      text: 'Asigná uno o varios árbitros a muchos partidos a la vez. El sistema no deja designar a quien está de licencia o tiene otro partido a la misma hora.',
      who: ['Liga'],
    },
    {
      title: 'Confirmación por WhatsApp',
      text: 'Cada árbitro recibe su designación por email y WhatsApp, y confirma o avisa que no puede. Al confirmar le llegan la sede y el mapa.',
      who: ['Árbitro'],
    },
    {
      title: 'Coordinadores por grupo',
      text: 'Cada coordinador ve sus partidos agrupados por sede y día, con contadores de partidos sin árbitro o sin confirmar.',
      who: ['Liga'],
    },
    {
      title: 'Reprogramaciones limpias',
      text: 'Si un partido se reprograma, sus árbitros se quitan solos, con aviso, para no dejar designaciones viejas.',
      who: ['Liga'],
    },
    {
      title: 'Planilla semanal de designaciones',
      text: 'Una planilla de Google por semana con cada partido, sus árbitros, el coordinador, la sede y el estado, actualizada cada hora.',
      who: ['Liga'],
    },
    {
      title: 'La app del árbitro',
      text: 'Sus partidos, sus licencias, los pedidos de ampliación del tribunal y sus estadísticas, en el celular.',
      who: ['Árbitro'],
    },
  ],

  caso: {
    kicker: 'Colegio de árbitros',
    title: 'Un colegio para FUTSALA y BAFI',
    text: 'FUTSALA y BAFI contratan al mismo colegio de árbitros, que trabaja en Weball con su propio panel y ve sólo los partidos de las ligas que lo contrataron.',
    points: [
      { title: '+400 árbitros', text: 'En un solo padrón, con sus grupos, sus coordinadores y sus licencias.' },
      { title: '+50.000 designaciones', text: 'Árbitro por árbitro y partido por partido, en las dos ligas.' },
      { title: 'Cada liga, lo suyo', text: 'El colegio elige con qué liga trabaja en cada momento, y cada liga sigue viendo a sus árbitros propios.' },
    ],
  },

  connections: {
    lead: 'Las designaciones salen de los partidos ya programados, y el árbitro designado es quien carga la planilla.',
    from: [
      { slug: 'programacion', text: 'Los partidos confirmados, con su día, su hora y su sede.' },
      { slug: 'tribunal', text: 'Los pedidos de ampliación del informe, que le llegan al árbitro.' },
    ],
    to: [
      { slug: 'planillas', text: 'El árbitro designado carga la planilla y el informe del partido.' },
      { slug: 'tribunal', text: 'Los informes arbitrales y las respuestas a cada ampliación.' },
    ],
    external: [
      'Tu colegio de árbitros puede trabajar en Weball con su propio panel, aunque sea otra organización.',
      'Las designaciones se copian solas a una planilla de Google cada hora.',
    ],
  },
}
