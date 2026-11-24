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
  moron: { nombre: 'Deportivo Morón', escudo: 'deportivo-moron' },
  kimberley: { nombre: 'Kimberley', escudo: 'kimberley' },
  sanmartin: { nombre: 'San Martín', escudo: 'san-martin-futsal' },
  agosto: { nombre: '17 de Agosto', escudo: '17-de-agosto' },
  villaluro: { nombre: 'Amigos de Villa Luro', escudo: 'amigos-de-villa-luro' },
  pacifico: { nombre: 'Pacífico', escudo: 'pacifico' },
}

// Todos los escudos, para la cinta de "ligas que ya usan Weball"
export const escudos = [
  'boca-juniors', 'river-plate', 'racing', 'independiente', 'san-lorenzo', 'huracan', 'velez', 'estudiantes',
  'banfield', 'platense', 'ferro', 'all-boys', 'deportivo-moron', 'kimberley', 'san-martin-futsal', '17-de-agosto',
  'amigos-de-villa-luro', 'pacifico',
]

// Los equipos del torneo (los dos grupos) y la fecha 1 del grupo A: los usa la animación de la portada (PanelVivo.jsx).
export const grupoA = ['boca', 'river', 'racing', 'independiente', 'sanlorenzo', 'huracan', 'velez', 'estudiantes', 'banfield', 'platense']
export const grupoB = ['ferro', 'allboys', 'moron', 'kimberley', 'sanmartin', 'agosto', 'villaluro', 'pacifico']
export const fecha1 = [
  { a: 'boca', b: 'river', hora: '09:00', cancha: 'Cancha 1', ga: 3, gb: 1 },
  { a: 'racing', b: 'independiente', hora: '09:00', cancha: 'Cancha 2', ga: 2, gb: 2 },
  { a: 'sanlorenzo', b: 'huracan', hora: '10:30', cancha: 'Cancha 1', ga: 1, gb: 0 },
  { a: 'velez', b: 'estudiantes', hora: '10:30', cancha: 'Cancha 2', ga: 0, gb: 2 },
  { a: 'banfield', b: 'platense', hora: '12:00', cancha: 'Cancha 1', ga: 4, gb: 3 },
]

export const tareas = [
  {
    slug: 'inscripcion',
    corto: 'Equipos',
    titulo: 'Equipos y fichajes.',
    texto: 'Pasale la lista como la tengas: un formulario, una planilla o un mensaje. Los equipos quedan inscriptos y los jugadores, fichados en su club.',
    ejemplo: 'Inscribí a todos estos equipos del formulario y fichá a todos sus jugadores.',
    chat: {
      pedido: 'Inscribí a todos estos equipos del formulario y fichá a todos sus jugadores.',
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
    ejemplo: 'Armá el torneo en dos fases. Una con dos grupos de 10 y luego playoffs desde 4tos.',
    chat: {
      pedido: 'Armá el torneo en dos fases. Una con dos grupos de 10 y luego playoffs desde 4tos.',
      confirma: 'Creo los grupos A y B de 10 equipos (9 fechas cada uno) y playoffs desde cuartos con los 4 primeros de cada grupo. ¿Confirmo?',
      pasos: ['Creando el torneo', 'Sorteando los grupos', 'Generando 97 partidos'],
      respuesta: 'Listo, el torneo está armado. Te muestro el cuadro con las dos fases.',
    },
    panel: {
      pestaña: 'Partidos',
      vista: 'fases',
      grupos: [
        { nombre: 'Grupo A', clubes: ['boca', 'river', 'racing', 'independiente', 'sanlorenzo'] },
        { nombre: 'Grupo B', clubes: ['ferro', 'allboys', 'moron', 'kimberley', 'sanmartin'] },
      ],
      cuartos: [['1º Grupo A', '4º Grupo B'], ['2º Grupo B', '3º Grupo A'], ['1º Grupo B', '4º Grupo A'], ['2º Grupo A', '3º Grupo B']],
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
      confirma: 'Asigno día, hora y cancha a los 10 partidos de la fecha 1. ¿Confirmo?',
      pasos: ['Revisando canchas libres', 'Asignando horarios', 'Chequeando choques'],
      respuesta: 'Listo, sábado programado y sin choques de horario.',
    },
    panel: {
      pestaña: 'Partidos',
      vista: 'programacion',
      filas: [
        ['09:00', 'Cancha 1', 'boca', 'river'], ['09:00', 'Cancha 2', 'racing', 'independiente'], ['10:30', 'Cancha 1', 'sanlorenzo', 'huracan'],
        ['10:30', 'Cancha 2', 'velez', 'estudiantes'], ['12:00', 'Cancha 1', 'banfield', 'platense'],
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
      confirma: 'Cargo los 10 resultados y publico la fecha. ¿Confirmo?',
      pasos: ['Cargando 10 resultados', 'Actualizando la tabla', 'Publicando en la app y la web'],
      respuesta: 'Publicado. La tabla ya está actualizada.',
    },
    panel: {
      pestaña: 'Clasificación',
      vista: 'tabla',
      // club, Pts, PJ, G, E, P, GF, GC
      filas: [
        ['boca', 3, 1, 1, 0, 0, 3, 1], ['estudiantes', 3, 1, 1, 0, 0, 2, 0], ['banfield', 3, 1, 1, 0, 0, 4, 3],
        ['sanlorenzo', 3, 1, 1, 0, 0, 1, 0], ['racing', 1, 1, 0, 1, 0, 2, 2], ['independiente', 1, 1, 0, 1, 0, 2, 2],
      ],
    },
  },
]
