// Proceso 06 · Carga de resultados. Textos de la página resultados.html.
export default {
  kicker: 'Resultados y tablas',
  promise:
    'El resultado de cada partido llega desde la cancha y actualiza tablas, goleadores, sanciones, la app y la web, sin que nadie lo vuelva a tipear.',
  stats: [
    { value: '+90.000', label: 'Partidos jugados' },
    { value: '+900', label: 'Partidos por semana' },
  ],
  statsNote: 'Ligas que usan Weball. Por semana: de marzo a noviembre de 2026.',

  painsTitle: 'Cientos de resultados el mismo domingo',
  painsLead: 'Y cada uno tiene que llegar a la tabla, a los goleadores y al tribunal antes del lunes.',
  pains: [
    {
      title: 'Retipear planillas',
      text: 'Si el resultado se pasa a mano, cada error termina en una tabla mal calculada o en un reclamo.',
    },
    {
      title: 'Sanciones que se escapan',
      text: 'Dobles amarillas y amarillas acumuladas que alguien tiene que contar a mano, partido por partido.',
    },
    {
      title: '¿Quién cambió este resultado?',
      text: 'Sin historial, nadie sabe cuándo ni por qué cambió un marcador.',
    },
  ],

  featuresTitle: 'Un resultado, todo actualizado',
  featuresLead: 'Se carga una sola vez y llega a todos lados.',
  features: [
    {
      title: 'Tres formas de cargar',
      text: 'El árbitro desde su celular, la liga desde la planilla del partido o desde la consola en vivo. Todas pasan por el mismo circuito.',
      who: ['Árbitro', 'Liga'],
    },
    {
      title: 'Cada gol y cada tarjeta',
      text: 'Se guardan por jugador, con su motivo, y alimentan goleadores, tarjetas y suspendidos.',
      who: ['Árbitro', 'Liga'],
    },
    {
      title: 'Sanciones automáticas',
      text: 'La doble amarilla y las amarillas acumuladas generan su sanción. En handball, tres exclusiones de 2 minutos dan roja.',
      who: ['Tribunal'],
    },
    {
      title: 'Estados de partido de tu liga',
      text: 'Cada estado decide si suma a la tabla, si descuenta fechas de sanción, si el árbitro puede elegirlo o si queda pendiente de revisión.',
      who: ['Liga'],
    },
    {
      title: 'Tablas y goleadores al instante',
      text: 'Por competición, torneo, equipo y categoría, publicados en la web y en la app.',
      who: ['Público'],
    },
    {
      title: 'Consola en vivo',
      text: 'Para los partidos que querés seguir en vivo: reloj, marcador, formaciones y cada evento, transmitidos al instante.',
      who: ['Liga', 'Público'],
    },
    {
      title: 'Historial de cada cambio',
      text: 'Quién cambió qué y cuándo: marcador, estado, árbitros, sede, fecha y eventos, con el antes y el después.',
      who: ['Liga'],
    },
    {
      title: 'Avisos a los jugadores',
      text: 'El resultado final llega a los jugadores de los dos equipos, y la tabla actualizada cuando se completa la fecha.',
      who: ['Jugador'],
    },
    {
      title: 'No presentaciones y suspendidos',
      text: 'La no presentación queda marcada por equipo y puede ir directo al tribunal. Los partidos suspendidos esperan su reprogramación.',
      who: ['Liga', 'Tribunal'],
    },
  ],

  caso: {
    kicker: 'FUTSALA',
    title: 'Casi 800.000 goles y tarjetas',
    text: 'Cada gol y cada tarjeta de FUTSALA se carga una sola vez y llega a la tabla, a los goleadores, al tribunal y a la app.',
    points: [
      { title: '+76.000 partidos jugados', text: 'Cada uno con su resultado, sus eventos y su historial de cambios.' },
      { title: '+28.000 partidos en 2026', text: 'Cargados entre marzo y noviembre: cientos por fin de semana.' },
      { title: 'SuperClásicos en vivo', text: 'Los partidos especiales se siguen en vivo en la web de la liga, con reloj y marcador.' },
    ],
  },

  connections: {
    lead: 'Los resultados salen de la planilla y terminan en las tablas, el tribunal, la app y la web.',
    from: [
      { slug: 'planillas', text: 'Goles, tarjetas e informe del árbitro.' },
      { slug: 'programacion', text: 'Las no presentaciones y los partidos suspendidos.' },
      { slug: 'tribunal', text: 'Los resultados que define el tribunal.' },
    ],
    to: [
      { slug: 'fixture', text: 'Las tablas de cada fase y categoría.' },
      { slug: 'tribunal', text: 'Las tarjetas que abren un caso.' },
      { slug: 'comunicacion', text: 'Resultado final y tabla actualizada en la app y la web.' },
    ],
    external: [
      'Nuestra API pública de lectura publica resultados, tablas y partidos en vivo para tu web o tu sistema.',
      'Si los resultados se cargan en otra plataforma, el conector los puede traer a Weball.',
    ],
  },
}
