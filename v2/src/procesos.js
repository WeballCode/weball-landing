// Los 8 procesos de una liga, en el orden en que pasan durante la temporada.
// Es la lista única del sitio: el menú, la cadena de la principal y las páginas salen de acá.
// El detalle de cada proceso está en src/procesos/<slug>.js y su página es <slug>.html.
export const procesos = [
  {
    slug: 'fichajes',
    icon: 'credencial',
    short: 'Fichajes',
    name: 'Fichajes, clubes y administración',
    line: 'Clubes inscriptos por link y jugadores que se fichan solos, con su identidad validada.',
  },
  {
    slug: 'fixture',
    icon: 'competicion',
    short: 'Fixture',
    name: 'Creación del fixture',
    line: 'Temporadas, divisiones y categorías con el formato que use tu liga.',
  },
  {
    slug: 'programacion',
    icon: 'programar',
    short: 'Programación',
    name: 'Programación del partido',
    line: 'Día, hora y cancha de cientos de partidos por fecha, sin choques.',
  },
  {
    slug: 'planillas',
    icon: 'planilla',
    short: 'Planillas',
    name: 'Planillas',
    line: 'Impresa con la lista de buena fe y los suspendidos tachados, o digital en el celular del árbitro.',
  },
  {
    slug: 'arbitros',
    icon: 'arbitro',
    short: 'Árbitros',
    name: 'Asignación de árbitros',
    line: 'Designaciones sin choques, confirmadas por WhatsApp, y colegios de árbitros externos.',
  },
  {
    slug: 'resultados',
    icon: 'resultados',
    short: 'Resultados',
    name: 'Carga de resultados',
    line: 'Resultados desde la cancha, con tablas, goleadores y avisos que se actualizan solos.',
  },
  {
    slug: 'tribunal',
    icon: 'tribunal',
    short: 'Tribunal',
    name: 'Tribunal de disciplina',
    line: 'Tribunal IA propone cada sanción con su artículo; el tribunal decide y publica el boletín.',
  },
  {
    slug: 'comunicacion',
    icon: 'comunidad',
    short: 'Comunicación',
    name: 'Comunicación y marketing',
    line: 'Avisos a cada persona, la web y la app de tu liga, y sponsors que suman ingresos.',
  },
]

export const procesoHref = (slug) => `./${slug}.html`

// Número con dos cifras: 1 → "01"
export const nn = (i) => String(i + 1).padStart(2, '0')
