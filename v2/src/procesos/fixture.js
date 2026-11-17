// Proceso 02 · Creación del fixture. Textos de la página fixture.html.
export default {
  kicker: 'Fixtures y torneos',
  promise:
    'Armá el fixture una vez y el sistema crea el partido de cada categoría. Liga, grupos, copa o fases encadenadas, con tablas que se calculan solas.',
  stats: [
    { value: '+480', label: 'Torneos armados en Weball' },
    { value: '+28.000', label: 'Equipos por categoría' },
  ],
  statsNote: 'Ligas que usan Weball, noviembre de 2026.',

  painsTitle: 'Un cruce, todas las categorías',
  painsLead: 'En una liga grande, cada cruce entre dos clubes se juega en muchas categorías y hay decenas de torneos por temporada.',
  pains: [
    {
      title: 'Un fixture por categoría',
      text: 'Si cada categoría se arma por separado, el mismo cruce se carga diez veces y cada error se repite diez veces.',
    },
    {
      title: 'Decenas de torneos',
      text: 'Divisiones, zonas, copas y categorías que cambian de una temporada a otra, cada una con su tabla.',
    },
    {
      title: 'Cambios que se arrastran',
      text: 'Invertir una localía o mover un partido de fecha obliga a corregir cada categoría y cada tabla a mano.',
    },
  ],

  featuresTitle: 'Un fixture para todas las categorías',
  featuresLead: 'La liga arma la estructura una vez y Weball se encarga de multiplicarla.',
  features: [
    {
      title: 'Divisiones en un solo árbol',
      text: 'Competición, temporada, divisiones y torneos ordenados en un árbol. La misma competición se reutiliza de una temporada a la otra.',
      who: ['Liga'],
    },
    {
      title: 'Un cruce, todas sus categorías',
      text: 'El fixture se arma una vez sobre los equipos y el sistema crea el partido de cada categoría. Un cambio en el cruce se aplica a todas.',
      who: ['Liga'],
    },
    {
      title: 'El formato de tu liga',
      text: 'Liga a una rueda o ida y vuelta, grupos, copa con eliminación directa y varias fases en el mismo torneo.',
      points: ['La vuelta se arma sola, con la localía invertida', 'Puntos por ganar, empatar y perder a medida', 'Copiar una fase de otro torneo'],
      who: ['Liga'],
    },
    {
      title: 'Sorteo o asignación a mano',
      text: 'Cada equipo se ubica en su lugar del fixture a mano o por sorteo, antes o después de generar los partidos.',
      who: ['Liga'],
    },
    {
      title: 'Cambios sin rehacer nada',
      text: 'Invertí la localía de un cruce en todas sus categorías o en una sola, y mové partidos de fecha sin tocar el resto.',
      who: ['Liga'],
    },
    {
      title: 'Tablas que se calculan solas',
      text: 'Una tabla por categoría, una general, o las dos sobre los mismos partidos. Sólo suman los partidos que tu liga decide que suman.',
      points: ['Penales para definir empates', 'Bonificaciones y quitas de puntos con su motivo', 'Zonas de ascenso y descenso marcadas'],
      who: ['Liga', 'Público'],
    },
    {
      title: 'Conectado con el tribunal',
      text: 'Si el tribunal da un partido por perdido a uno o a los dos equipos, la tabla lo refleja sola.',
      who: ['Tribunal'],
    },
    {
      title: 'Futsal y handball',
      text: 'Cada torneo tiene su deporte, con su planilla, sus eventos y sus reglas de tarjetas.',
      who: ['Liga'],
    },
  ],

  caso: {
    kicker: 'FUTSALA',
    title: 'Casi 20.000 equipos en un mismo sistema',
    text: 'FUTSALA arma en Weball todas sus competiciones de la temporada: divisiones, zonas, copas y categorías.',
    points: [
      { title: '167 torneos', text: 'Divisiones, zonas y copas, cada una con sus fases y su tabla.' },
      { title: '+19.000 equipos', text: 'Cada club con un equipo por categoría, todos dentro del mismo fixture.' },
      { title: '+76.000 partidos jugados', text: 'Con tablas por categoría y generales que se actualizan con cada resultado.' },
    ],
  },

  connections: {
    lead: 'El fixture es la base de la temporada: de cada cruce salen la programación, las planillas y las tablas.',
    from: [
      { slug: 'fichajes', text: 'Los clubes inscriptos y sus equipos en cada categoría.' },
      { slug: 'tribunal', text: 'Los fallos que cambian un resultado o dan un partido por perdido.' },
    ],
    to: [
      { slug: 'programacion', text: 'Cada cruce se programa con todas sus categorías.' },
      { slug: 'resultados', text: 'Los partidos de cada fecha, listos para cargar.' },
      { slug: 'comunicacion', text: 'Fixture, tablas y cuadros en la web y la app de la liga, y el fixture en PDF.' },
    ],
    external: [
      'El fixture de cada fase se exporta en Excel.',
      'Si tu fixture vive en otra plataforma, lo podemos traer: ya tenemos un conector que copia competiciones, zonas, resultados y horarios.',
    ],
  },
}
