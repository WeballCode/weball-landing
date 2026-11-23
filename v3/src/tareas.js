// Las 4 tareas que la liga le pide a su IA. De acá salen el chat de la portada y la sección "Qué le podés pedir".
// Los equipos y números son de ejemplo.

export const tareas = [
  {
    slug: 'inscripcion',
    corto: 'Equipos',
    titulo: 'Inscribí equipos y fichá jugadores',
    texto:
      'Pasale la lista de inscriptos como la tengas: un formulario, una planilla o un mensaje. Tu IA crea los equipos en el torneo y ficha a cada jugador en su club.',
    ejemplos: [
      'Inscribí a los 16 equipos que se anotaron en el formulario.',
      'Fichá a los jugadores de esta planilla en Club Norte.',
      '¿Qué equipos todavía no tienen 10 jugadores fichados?',
    ],
    chat: {
      pedido: 'Inscribí a los 16 equipos que se anotaron en el formulario y fichá a sus jugadores.',
      confirma: 'Voy a crear 16 equipos en el Apertura y fichar 214 jugadores. ¿Confirmo?',
      pasos: ['Leyendo las 16 inscripciones', 'Creando los equipos en el Apertura', 'Fichando 214 jugadores'],
      respuesta: '¡Listo! 16 equipos inscriptos y 214 jugadores fichados.',
      resultado: {
        tipo: 'lista',
        filas: [
          ['Club Norte', '15 jugadores'],
          ['Halcones FC', '14 jugadores'],
          ['Unión del Sur', '13 jugadores'],
          ['+ 13 equipos más', ''],
        ],
        nota: '2 jugadores ya estaban fichados en otro club: te los dejé marcados para revisar.',
      },
    },
  },
  {
    slug: 'torneo',
    corto: 'Fixture',
    titulo: 'Armá torneos y fixtures',
    texto:
      'Decile el formato con tus palabras: zonas, ruedas, playoffs, interzonales. Tu IA arma el torneo y genera el fixture completo, fecha por fecha.',
    ejemplos: [
      'Armá el Apertura: 2 zonas de 8, una rueda y después cuartos.',
      'Generá el fixture de la Sub 15 con los mismos equipos que el año pasado.',
      'Pasá la fecha 4 de la zona A al fin de semana siguiente.',
    ],
    chat: {
      pedido: 'Armá el Apertura: 2 zonas de 8, todos contra todos a una rueda, y después cuartos de final.',
      confirma: 'Creo el torneo con zonas A y B, 7 fechas por zona y playoffs desde cuartos. ¿Confirmo?',
      pasos: ['Creando el torneo Apertura', 'Sorteando las zonas A y B', 'Generando 7 fechas · 56 partidos'],
      respuesta: 'Listo. Así queda la fecha 1 de la zona A:',
      resultado: {
        tipo: 'partidos',
        filas: [
          ['Club Norte', 'Halcones FC'],
          ['Unión del Sur', 'Atlético Plaza'],
          ['Los Tigres', 'Deportivo Oeste'],
          ['San Martín', 'Juventud Unida'],
        ],
      },
    },
  },
  {
    slug: 'programacion',
    corto: 'Partidos',
    titulo: 'Programá los partidos',
    texto:
      'Contale qué canchas y horarios tenés. Tu IA asigna día, hora y cancha a cada partido, sin que un equipo juegue dos veces a la misma hora.',
    ejemplos: [
      'Programá la fecha 1 el sábado de 9 a 18, en las canchas 1 a 4.',
      'La cancha 2 no está disponible el domingo: reprogramá esos partidos.',
      'Pasá a Club Norte al último horario, que viajan de lejos.',
    ],
    chat: {
      pedido: 'Programá la fecha 1 el sábado de 9 a 18 en las canchas 1 a 4, sin superponer equipos.',
      confirma: 'Asigno horario y cancha a los 8 partidos de la fecha 1. ¿Confirmo?',
      pasos: ['Revisando canchas y horarios libres', 'Asignando los 8 partidos', 'Chequeando que no haya choques'],
      respuesta: 'Listo, sábado programado y sin choques:',
      resultado: {
        tipo: 'horarios',
        filas: [
          ['09:00', 'Cancha 1', 'Club Norte vs Halcones FC'],
          ['09:00', 'Cancha 2', 'Unión del Sur vs Atl. Plaza'],
          ['10:30', 'Cancha 1', 'Los Tigres vs Dep. Oeste'],
          ['10:30', 'Cancha 2', 'San Martín vs Juv. Unida'],
        ],
      },
    },
  },
  {
    slug: 'resultados',
    corto: 'Resultados',
    titulo: 'Cargá y publicá los resultados',
    texto:
      'Pasale los resultados como te llegan. Tu IA los carga, actualiza las tablas y los publica para que jugadores y familias los vean al instante.',
    ejemplos: [
      'Cargá los resultados de la fecha 1 y publicalos.',
      'Halcones ganó 3 a 1: cargalo y actualizá la tabla.',
      '¿Qué partidos del sábado todavía no tienen resultado?',
    ],
    chat: {
      pedido: 'Cargá los resultados de la fecha 1 y publicalos: Norte 3-1 Halcones, Unión 2-2 Plaza…',
      confirma: 'Cargo los 8 resultados y publico la fecha. ¿Confirmo?',
      pasos: ['Cargando 8 resultados', 'Actualizando la tabla de posiciones', 'Publicando la fecha'],
      respuesta: 'Publicado. Así quedó la tabla de la zona A:',
      resultado: {
        tipo: 'tabla',
        filas: [
          ['1', 'Club Norte', '3'],
          ['2', 'Los Tigres', '3'],
          ['3', 'Unión del Sur', '1'],
          ['4', 'Atlético Plaza', '1'],
        ],
      },
    },
  },
]
