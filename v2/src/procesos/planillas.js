// Proceso 04 · Planillas. Textos de la página planillas.html.
export default {
  kicker: 'Planilla del partido',
  promise:
    'La planilla impresa sale con la lista de buena fe y los suspendidos tachados. La digital la carga el árbitro desde el celular, con las fotos de la planilla y su informe.',
  stats: [
    { value: '+930.000', label: 'Goles y tarjetas cargados' },
    { value: '+20.000', label: 'Planillas digitales en FUTSALA' },
  ],
  statsNote: 'Ligas que usan Weball, noviembre de 2026.',

  painsTitle: 'Cientos de planillas por fin de semana',
  painsLead: 'Cada partido necesita su planilla, con la lista correcta de esa categoría y esa fecha.',
  pains: [
    {
      title: 'Listas desactualizadas',
      text: 'Imprimir cada planilla con los jugadores habilitados de ese equipo, en esa categoría y esa fecha.',
    },
    {
      title: 'Suspendidos que juegan',
      text: 'Si la planilla no sabe quién está suspendido o tiene amarillas acumuladas, el error aparece cuando el partido ya se jugó.',
    },
    {
      title: 'El papel que hay que retipear',
      text: 'Lo que el árbitro escribió en la cancha hay que pasarlo a mano, y a veces la planilla no llega.',
    },
  ],

  featuresTitle: 'De la cancha al sistema, sin retipear',
  featuresLead: 'Impresa, digital o las dos: cada liga elige cómo trabaja en la cancha.',
  features: [
    {
      title: 'Planillas impresas en lote',
      text: 'La liga descarga la planilla de un partido o de toda la fecha en un solo PDF, con el código y el QR de cada partido.',
      who: ['Liga'],
    },
    {
      title: 'La lista de buena fe, sola',
      text: 'Cada planilla trae los jugadores habilitados de ese equipo con su DNI y su número, y el cuerpo técnico.',
      who: ['Liga', 'Club'],
    },
    {
      title: 'Suspendidos tachados',
      text: 'Quien tiene fechas de sanción pendientes sale tachado, y las amarillas acumuladas se cuentan con la misma regla del tribunal.',
      who: ['Tribunal', 'Árbitro'],
    },
    {
      title: 'El club descarga la suya',
      text: 'Cada club baja la planilla de su partido cuando el estado del partido lo permite.',
      who: ['Club'],
    },
    {
      title: 'Planilla digital del árbitro',
      text: 'El árbitro ve sus partidos o toma uno con el código impreso, carga goles y tarjetas por jugador con su motivo y define los penales si hace falta.',
      who: ['Árbitro'],
    },
    {
      title: 'Con la foto de la planilla',
      text: 'Al enviar, el árbitro adjunta fotos de la planilla en papel: la liga tiene el respaldo de cada partido.',
      who: ['Árbitro', 'Liga'],
    },
    {
      title: 'Informe arbitral completo',
      text: 'Hora de inicio, suspensiones y su motivo, estado del campo y un informe por cada sanción, que también se puede dictar por audio.',
      who: ['Árbitro', 'Tribunal'],
    },
    {
      title: 'Sin señal en la cancha',
      text: 'Lo que el árbitro va cargando se guarda en el celular y no se pierde si se corta la conexión. Lo envía cuando vuelve la señal.',
      who: ['Árbitro'],
    },
    {
      title: 'Futsal y handball',
      text: 'Planilla con el formato de cada deporte. En handball, con recuadros para los dos árbitros y la mesa de control.',
      who: ['Liga'],
    },
    {
      title: 'Cada envío, auditado',
      text: 'Se guarda una copia exacta de lo que envió el árbitro y queda registrada en el historial del partido.',
      who: ['Liga'],
    },
  ],

  caso: {
    kicker: 'FUTSALA',
    title: 'Árbitros que cargan desde la cancha',
    text: 'En FUTSALA, los árbitros envían la planilla y el informe desde el celular al terminar cada partido.',
    points: [
      { title: '+20.000 planillas digitales', text: 'Enviadas por los árbitros de FUTSALA, cada una con las fotos de la planilla en papel.' },
      { title: 'Directo al tribunal', text: 'Cada informe arbitral llega al tribunal apenas el árbitro envía la planilla.' },
      { title: 'Su planilla de Google', text: 'Cada informe se copia también a la planilla de Google de la liga.' },
    ],
  },

  connections: {
    lead: 'La planilla junta lo que viene de fichajes, árbitros y tribunal, y lo que se carga en ella mueve resultados, tablas y sanciones.',
    from: [
      { slug: 'fichajes', text: 'Los jugadores habilitados de cada equipo.' },
      { slug: 'arbitros', text: 'El árbitro designado, que recibe el partido en su celular.' },
      { slug: 'tribunal', text: 'Las sanciones pendientes, para tachar a los suspendidos.' },
    ],
    to: [
      { slug: 'resultados', text: 'Goles y tarjetas de cada jugador, que actualizan tablas y estadísticas.' },
      { slug: 'tribunal', text: 'El informe arbitral y las tarjetas, para abrir cada caso.' },
    ],
    external: [
      'Puede funcionar sólo impresa: la liga carga los resultados después.',
      'Cada informe arbitral se copia a una planilla de Google.',
    ],
  },
}
