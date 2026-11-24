// Las 4 tareas que la liga le pide a su IA. De acá salen:
//  - el chat del celular y la pantalla del panel en la portada (Showcase.jsx),
//  - las tarjetas de "Cuatro pedidos" (Tareas.jsx).
// Clubes reales que juegan en ligas con Weball (escudos en public/clubes/). Por el manual de marca, NUNCA clubes de primera,
// ni escudos de AFA o CONMEBOL. Los resultados y horarios son de ejemplo.

export const clubes = {
  ferro: { nombre: 'Ferro Carril Oeste', escudo: 'ferro' },
  allboys: { nombre: 'All Boys', escudo: 'all-boys' },
  moron: { nombre: 'Deportivo Morón', escudo: 'deportivo-moron' },
  kimberley: { nombre: 'Kimberley', escudo: 'kimberley' },
  sanmartin: { nombre: 'San Martín Futsal', escudo: 'san-martin-futsal' },
  agosto: { nombre: '17 de Agosto', escudo: '17-de-agosto' },
  villaluro: { nombre: 'Amigos de Villa Luro', escudo: 'amigos-de-villa-luro' },
  pacifico: { nombre: 'Pacífico', escudo: 'pacifico' },
  csdp: { nombre: 'C.S.D.P.', escudo: 'csdp' },
  ca: { nombre: 'C.A.', escudo: 'ca' },
}

// Todos los escudos, para la cinta de "ligas que ya usan Weball"
export const escudos = [
  'ferro', 'all-boys', 'deportivo-moron', 'kimberley', 'san-martin-futsal', '17-de-agosto',
  'amigos-de-villa-luro', 'pacifico', 'csdp', 'ca', 'cp',
]

export const tareas = [
  {
    slug: 'inscripcion',
    corto: 'Equipos',
    titulo: 'Equipos y fichajes.',
    texto: 'Pasale la lista como la tengas: un formulario, una planilla o un mensaje. Los equipos quedan inscriptos y los jugadores, fichados en su club.',
    ejemplo: 'Inscribí a los equipos del formulario y fichá a sus jugadores.',
    chat: {
      pedido: 'Inscribí a los 16 equipos del formulario y fichá a sus jugadores.',
      confirma: 'Voy a inscribir 16 equipos en el Apertura y fichar 214 jugadores. ¿Confirmo?',
      pasos: ['Leyendo las inscripciones', 'Inscribiendo los equipos', 'Fichando 214 jugadores'],
      respuesta: 'Listo: 16 equipos inscriptos y 214 jugadores fichados. 2 ya estaban en otro club, te los marqué para revisar.',
    },
    panel: {
      pestaña: 'Equipos',
      vista: 'equipos',
      filas: [
        ['ferro', 15], ['allboys', 14], ['moron', 15], ['kimberley', 13], ['sanmartin', 14], ['agosto', 12],
      ],
    },
  },
  {
    slug: 'torneo',
    corto: 'Fixture',
    titulo: 'Torneos y fixtures.',
    texto: 'Decile el formato con tus palabras: zonas, ruedas, playoffs. El torneo queda armado y el fixture, completo, fecha por fecha.',
    ejemplo: 'Armá el Apertura: 2 zonas de 8, una rueda y después cuartos.',
    chat: {
      pedido: 'Armá el Apertura: 2 zonas de 8, una rueda y después cuartos de final.',
      confirma: 'Creo zonas A y B, 7 fechas cada una y playoffs desde cuartos. ¿Confirmo?',
      pasos: ['Creando el torneo', 'Sorteando las zonas', 'Generando 56 partidos'],
      respuesta: 'Listo, el fixture está armado. Te muestro la fecha 1 de la zona A.',
    },
    panel: {
      pestaña: 'Partidos',
      vista: 'partidos',
      filas: [
        ['ferro', 'allboys'], ['moron', 'kimberley'], ['sanmartin', 'agosto'], ['villaluro', 'pacifico'], ['csdp', 'ca'],
      ],
    },
  },
  {
    slug: 'programacion',
    corto: 'Partidos',
    titulo: 'Programación.',
    texto: 'Contale qué canchas y horarios tenés. Cada partido queda con día, hora y cancha, sin que un equipo juegue dos veces a la vez.',
    ejemplo: 'Programá la fecha 1 el sábado de 9 a 18, en las canchas 1 a 4.',
    chat: {
      pedido: 'Programá la fecha 1 el sábado de 9 a 18 en las canchas 1 a 4.',
      confirma: 'Asigno día, hora y cancha a los partidos de la fecha 1. ¿Confirmo?',
      pasos: ['Revisando canchas libres', 'Asignando horarios', 'Chequeando choques'],
      respuesta: 'Listo, sábado programado y sin choques de horario.',
    },
    panel: {
      pestaña: 'Partidos',
      vista: 'programacion',
      filas: [
        ['09:00', 'Cancha 1', 'ferro', 'allboys'], ['09:00', 'Cancha 2', 'moron', 'kimberley'], ['10:30', 'Cancha 1', 'sanmartin', 'agosto'],
        ['10:30', 'Cancha 2', 'villaluro', 'pacifico'], ['12:00', 'Cancha 1', 'csdp', 'ca'],
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
      pedido: 'Cargá los resultados de la fecha y publicalos: Ferro 3-1 All Boys, Morón 2-2 Kimberley…',
      confirma: 'Cargo los 8 resultados y publico la fecha. ¿Confirmo?',
      pasos: ['Cargando 8 resultados', 'Actualizando la tabla', 'Publicando en la app y la web'],
      respuesta: 'Publicado. La tabla ya está actualizada.',
    },
    panel: {
      pestaña: 'Clasificación',
      vista: 'tabla',
      // club, Pts, PJ, G, E, P, GF, GC
      filas: [
        ['ferro', 3, 1, 1, 0, 0, 3, 1], ['sanmartin', 3, 1, 1, 0, 0, 2, 0], ['villaluro', 3, 1, 1, 0, 0, 4, 3],
        ['moron', 1, 1, 0, 1, 0, 2, 2], ['kimberley', 1, 1, 0, 1, 0, 2, 2], ['allboys', 0, 1, 0, 0, 1, 1, 3],
      ],
    },
  },
]
