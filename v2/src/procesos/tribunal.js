// Proceso 07 · Tribunal de disciplina. Textos de la página tribunal.html.
export default {
  kicker: 'Tribunal IA',
  promise:
    'Tribunal IA lee cada informe arbitral, propone la sanción con el artículo de tu reglamento y redacta el boletín. El tribunal revisa, decide y publica.',
  stats: [
    { value: '+14.000', label: 'Sanciones gestionadas en Weball' },
    { value: '+150', label: 'Boletines publicados' },
  ],
  statsNote: 'Sanciones de las ligas en Weball, noviembre de 2026.',

  painsTitle: 'Un tribunal que no da abasto',
  painsLead: 'En una liga grande, el tribunal trabaja todas las semanas contra la próxima fecha.',
  pains: [
    {
      title: 'Decenas de informes por fecha',
      text: 'Cada fin de semana llegan rojas, informes arbitrales y no presentaciones. Alguien los lee uno por uno y busca el artículo que corresponde.',
    },
    {
      title: 'Penas que dependen de quién escribe',
      text: 'Dos casos parecidos terminan con penas distintas, y cada motivo se redacta a mano con otras palabras.',
    },
    {
      title: 'El boletín, a contrarreloj',
      text: 'Juntar cada sanción, numerarla, darle formato y publicarla antes de que los clubes armen la planilla del próximo partido.',
    },
  ],

  featuresTitle: 'El agente propone, el tribunal decide',
  featuresLead: 'Un agente de IA entrenado con tu reglamento y con los fallos de tu propio tribunal.',
  features: [
    {
      title: 'Tu reglamento, artículo por artículo',
      text: 'Cargamos el reglamento disciplinario de tu liga. Cada propuesta cita el artículo exacto y respeta su rango de pena.',
      points: ['FUTSALA y BAFI ya tienen el suyo', 'Cada liga con su numeración'],
      who: ['Liga', 'Tribunal'],
    },
    {
      title: 'Lee el informe y arma el caso',
      text: 'Cuando el árbitro envía la planilla, el agente junta el informe, las tarjetas, los antecedentes del jugador y fallos anteriores parecidos, y propone la sanción con su motivo.',
      who: ['Árbitro', 'Tribunal'],
    },
    {
      title: 'Si falta información, la pide',
      text: 'Si el informe no alcanza para decidir, le pide una ampliación al árbitro, que la contesta desde el celular. El tribunal también puede decidir con lo que hay.',
      who: ['Árbitro', 'Tribunal'],
    },
    {
      title: 'Vos elegís cuánto se automatiza',
      text: 'El agente puede sólo sugerir, proponer para que el tribunal apruebe, o aplicar solo las sanciones simples, con los topes que fije la liga.',
      points: ['Aprobar, corregir o rechazar cada propuesta', 'Activo en toda la liga o en algunas competencias'],
      who: ['Tribunal'],
    },
    {
      title: 'Escribe como tu tribunal',
      text: 'Cuando el tribunal corrige un motivo o un fallo, el agente lo aprende para los próximos. Los fallos salen con las fórmulas que la liga ya usa.',
      who: ['Tribunal'],
    },
    {
      title: 'Todas las penas de un tribunal real',
      text: 'Fechas, multas al club, suspensión de localía o de parcialidad, penas en suspenso, partido perdido para uno o ambos equipos y cambio de resultado.',
      who: ['Tribunal'],
    },
    {
      title: 'El boletín, listo para publicar',
      text: 'Con el diseño de tu liga: encabezado, logos, grupos y sanciones numeradas. Sale en PDF, Word y Excel, y la IA lo revisa antes de publicarlo.',
      who: ['Tribunal', 'Liga'],
    },
    {
      title: 'Reabrir y revisar',
      text: 'Un fallo se puede reabrir antes de publicar. Los descargos y apelaciones se resuelven en el boletín siguiente, sin tocar el ya publicado.',
      who: ['Tribunal', 'Club'],
    },
  ],

  caso: {
    kicker: 'BAFI',
    title: 'El tribunal decide, la IA prepara',
    text: 'BAFI usa Tribunal IA en su tribunal real desde noviembre de 2026, en modo supervisado: el agente propone y el tribunal aprueba o corrige cada fallo.',
    points: [
      {
        title: 'Su propio reglamento',
        text: 'Las propuestas citan el Reglamento Disciplinario BAFI 2026, con su numeración. FUTSALA tiene el suyo listo.',
      },
      {
        title: 'Aprende de cada corrección',
        text: 'Cada vez que el tribunal cambia un motivo o un fallo, el agente lo toma para los próximos casos.',
      },
      {
        title: 'Las fórmulas de siempre',
        text: 'Los fallos salen como el tribunal ya los escribía: "Se suspende a…, jugador del club…, con 4 (cuatro) fechas. Motivo (Art. N)".',
      },
    ],
  },

  connections: {
    lead: 'El tribunal recibe los partidos ya jugados y devuelve sanciones que el resto del sistema respeta solo.',
    from: [
      { slug: 'planillas', text: 'El informe arbitral y las tarjetas de cada partido, apenas el árbitro envía la planilla.' },
      { slug: 'programacion', text: 'Las no presentaciones llegan solas al tribunal como un caso más.' },
      { slug: 'resultados', text: 'El resultado y los eventos del partido, para fallar con el contexto completo.' },
    ],
    to: [
      { slug: 'planillas', text: 'Los suspendidos salen tachados en la planilla hasta cumplir la sanción.' },
      { slug: 'resultados', text: 'Si el tribunal da el partido por perdido, el resultado y la tabla se actualizan.' },
      { slug: 'comunicacion', text: 'El boletín publicado y las sanciones llegan a clubes y jugadores.' },
    ],
    external: [
      'El boletín sale en PDF, Word y Excel para publicarlo donde ya lo publicás.',
      'Las sanciones se exportan en Excel para cargarlas en el sistema que siga.',
    ],
  },
}
