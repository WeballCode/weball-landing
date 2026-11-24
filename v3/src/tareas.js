// Las 4 tareas que la liga le pide a su IA. De acá salen:
//  - el chat del celular y la pantalla del panel en la portada (Showcase.jsx),
//  - las tarjetas de "Armá tu liga en 4 pedidos" (Tareas.jsx).
// Los clubes son reales (juegan en ligas con Weball, escudos en public/clubes/); los resultados y horarios son de ejemplo.

export const clubes = {
  boca: { nombre: 'Boca Juniors', escudo: 'boca-juniors' },
  river: { nombre: 'River Plate', escudo: 'river-plate' },
  racing: { nombre: 'Racing Club', escudo: 'racing' },
  independiente: { nombre: 'Independiente', escudo: 'independiente' },
  sanlorenzo: { nombre: 'San Lorenzo', escudo: 'san-lorenzo' },
  huracan: { nombre: 'Huracán', escudo: 'huracan' },
  velez: { nombre: 'Vélez Sarsfield', escudo: 'velez' },
  estudiantes: { nombre: 'Estudiantes', escudo: 'estudiantes' },
  banfield: { nombre: 'Banfield', escudo: 'banfield' },
  platense: { nombre: 'Platense', escudo: 'platense' },
  ferro: { nombre: 'Ferro Carril Oeste', escudo: 'ferro' },
  allboys: { nombre: 'All Boys', escudo: 'all-boys' },
}

// Todos los escudos, para la cinta de "ligas que ya usan Weball"
export const escudos = [
  'boca-juniors', 'river-plate', 'racing', 'independiente', 'san-lorenzo', 'huracan', 'velez', 'estudiantes',
  'banfield', 'platense', 'ferro', 'all-boys', 'deportivo-moron', 'kimberley', 'san-martin-futsal', '17-de-agosto',
  'amigos-de-villa-luro', 'pacifico',
]

export const tareas = [
  {
    slug: 'inscripcion',
    corto: 'Equipos',
    titulo: 'Equipos y fichajes.',
    texto: 'Pasale la lista como la tengas: un formulario, una planilla o un mensaje. Los equipos quedan inscriptos y los jugadores, fichados en su club.',
    ejemplo: 'Inscribí a todos los equipos del formulario 2027 al Torneo Apertura 2027. Fichá a todos sus jugadores.',
    chat: {
      pedido: 'Inscribí a todos los equipos del formulario 2027 al Torneo Apertura 2027. Fichá a todos sus jugadores.',
      confirma: 'Voy a inscribir 20 equipos en el Apertura 2027 y fichar 268 jugadores. ¿Confirmo?',
      pasos: ['Leyendo las inscripciones', 'Inscribiendo los equipos', 'Fichando 268 jugadores'],
      respuesta: 'Listo: 20 equipos inscriptos y 268 jugadores fichados. 2 ya estaban en otro club, te los marqué para revisar.',
    },
    panel: {
      pestaña: 'Equipos',
      vista: 'equipos',
      filas: [
        ['boca', 15], ['river', 14], ['racing', 15], ['independiente', 13], ['sanlorenzo', 14], ['huracan', 12],
      ],
    },
  },
  {
    slug: 'torneo',
    corto: 'Fixture',
    titulo: 'Torneos y fixtures.',
    texto: 'Decile el formato con tus palabras: grupos, fases, copas. El torneo queda armado y el fixture, completo, fecha por fecha.',
    ejemplo: 'Armá el Apertura 2027 en dos fases. La primera de dos grupos de 10 y luego una copa que empieza desde octavos de final.',
    chat: {
      pedido: 'Armá el Apertura 2027 en dos fases. La primera de dos grupos de 10 y luego una copa que empieza desde octavos de final.',
      confirma: 'Creo los grupos A y B de 10 equipos (9 fechas cada uno) y una copa desde octavos de final. ¿Confirmo?',
      pasos: ['Creando el torneo', 'Sorteando los grupos', 'Generando 105 partidos'],
      respuesta: 'Listo, el fixture está armado. Te muestro la fecha 1 del grupo A.',
    },
    panel: {
      pestaña: 'Partidos',
      vista: 'partidos',
      filas: [
        ['boca', 'river'], ['racing', 'independiente'], ['sanlorenzo', 'huracan'], ['velez', 'estudiantes'], ['banfield', 'platense'], ['ferro', 'allboys'],
      ],
    },
  },
  {
    slug: 'programacion',
    corto: 'Partidos',
    titulo: 'Programaciones.',
    texto: 'Contale qué canchas y horarios tenés. Cada partido queda con día, hora y cancha, sin que un equipo juegue dos veces a la vez.',
    ejemplo: 'Programá la fecha 1 el sábado de 9 a 18, en las canchas 1 a 4.',
    chat: {
      pedido: 'Programá la fecha 1 el sábado de 9 a 18 en las canchas 1 a 4.',
      confirma: 'Asigno día, hora y cancha a los 8 partidos de la fecha 1. ¿Confirmo?',
      pasos: ['Revisando canchas libres', 'Asignando horarios', 'Chequeando choques'],
      respuesta: 'Listo, sábado programado y sin choques de horario.',
    },
    panel: {
      pestaña: 'Partidos',
      vista: 'programacion',
      filas: [
        ['09:00', 'Cancha 1', 'boca', 'river'], ['09:00', 'Cancha 2', 'racing', 'independiente'], ['10:30', 'Cancha 1', 'sanlorenzo', 'huracan'],
        ['10:30', 'Cancha 2', 'velez', 'estudiantes'], ['12:00', 'Cancha 1', 'banfield', 'platense'], ['12:00', 'Cancha 3', 'ferro', 'allboys'],
      ],
    },
  },
  {
    slug: 'resultados',
    corto: 'Resultados',
    titulo: 'Resultados y tablas.',
    texto: 'Pasale los resultados como te llegan. Se cargan, la tabla se actualiza y se publica para jugadores y familias al instante.',
    ejemplo: 'Cargá los resultados de la fecha 1 y publicalos.',
    chat: {
      pedido: 'Cargá los resultados de la fecha y publicalos: Boca 3-1 River, Racing 2-2 Independiente…',
      confirma: 'Cargo los 8 resultados y publico la fecha. ¿Confirmo?',
      pasos: ['Cargando 8 resultados', 'Actualizando la tabla', 'Publicando en la app y la web'],
      respuesta: 'Publicado. La tabla ya está actualizada.',
    },
    panel: {
      pestaña: 'Clasificación',
      vista: 'tabla',
      // club, Pts, PJ, G, E, P, GF, GC
      filas: [
        ['boca', 3, 1, 1, 0, 0, 3, 1], ['velez', 3, 1, 1, 0, 0, 2, 0], ['banfield', 3, 1, 1, 0, 0, 4, 3],
        ['racing', 1, 1, 0, 1, 0, 2, 2], ['independiente', 1, 1, 0, 1, 0, 2, 2], ['river', 0, 1, 0, 0, 1, 1, 3],
      ],
    },
  },
]
