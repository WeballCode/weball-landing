// Los 8 procesos de una liga, en el orden en que pasan durante la temporada.
// Es la lista única del sitio: el menú, la cadena de la principal y las páginas salen de acá.
// El detalle de cada proceso está en src/procesos/<slug>.js y su página es <slug>.html.
// `tag`: frase corta para la flecha de procesos. `pasa`: lo que este proceso le pasa al siguiente.
export const procesos = [
  {
    slug: 'fichajes',
    icon: 'credencial',
    short: 'Fichajes',
    name: 'Fichajes, clubes y administración',
    line: 'Clubes inscriptos por link y jugadores que se fichan solos, con su identidad validada.',
    tag: 'Clubes y jugadores con su identidad validada',
    pasa: 'Clubes y equipos',
  },
  {
    slug: 'fixture',
    icon: 'competicion',
    short: 'Fixture',
    name: 'Creación del fixture',
    line: 'Temporadas, divisiones y categorías con el formato que use tu liga.',
    tag: 'Un fixture para todas las categorías',
    pasa: 'Los cruces de cada fecha',
  },
  {
    slug: 'programacion',
    icon: 'programar',
    short: 'Programación',
    name: 'Programación del partido',
    line: 'Día, hora y cancha de cientos de partidos por fecha, sin choques.',
    tag: 'Los clubes proponen, la liga aprueba',
    pasa: 'Día, hora y sede',
  },
  {
    slug: 'planillas',
    icon: 'planilla',
    short: 'Planillas',
    name: 'Planillas',
    line: 'Impresa con la lista de buena fe y los suspendidos tachados, o digital en el celular del árbitro.',
    tag: 'Con la lista de buena fe y los suspendidos tachados',
    pasa: 'La planilla del partido',
  },
  {
    slug: 'arbitros',
    icon: 'arbitro',
    short: 'Árbitros',
    name: 'Asignación de árbitros',
    line: 'Designaciones sin choques, confirmadas por WhatsApp, y colegios de árbitros externos.',
    tag: 'Designaciones sin choques, confirmadas por WhatsApp',
    pasa: 'El árbitro designado',
  },
  {
    slug: 'resultados',
    icon: 'resultados',
    short: 'Resultados',
    name: 'Carga de resultados',
    line: 'Resultados desde la cancha, con tablas, goleadores y avisos que se actualizan solos.',
    tag: 'Tablas y goleadores al instante',
    pasa: 'Goles, tarjetas e informes',
  },
  {
    slug: 'tribunal',
    icon: 'tribunal',
    short: 'Tribunal',
    name: 'Tribunal de disciplina',
    line: 'Tribunal IA propone cada sanción con su artículo; el tribunal decide y publica el boletín.',
    tag: 'La IA propone, el tribunal decide',
    pasa: 'Sanciones y boletín',
  },
  {
    slug: 'comunicacion',
    icon: 'comunidad',
    short: 'Comunicación',
    name: 'Comunicación y marketing',
    line: 'Avisos a cada persona, la web y la app de tu liga, y sponsors que suman ingresos.',
    tag: 'App, web, avisos y sponsors',
  },
]

export const procesoHref = (slug) => `./${slug}.html`

// Número con dos cifras: 1 → "01"
export const nn = (i) => String(i + 1).padStart(2, '0')
