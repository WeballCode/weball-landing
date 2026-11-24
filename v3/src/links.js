// Links y datos de contacto que se usan en varias secciones. Cambialos acá.

// WhatsApp de contacto: +54 11 7073-6993 (en el link va con el 9 de celular argentino y sin espacios)
export const WHATSAPP_NUMBER = '5491170736993'
export const WHATSAPP_LABEL = '+54 11 7073 6993'

// Arma el link de WhatsApp con un mensaje ya escrito
export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Comunidad We Are Weball (Weball Scores): página con todos los partidos
export const COMMUNITY_URL = 'https://we-are-weball.com/partidos'

// Agenda para "Probar con mi liga": link de Calendly (cuenta de Julián). Para cambiarla, pegá otro link acá
// (Calendly o Google Calendar). Si queda vacío, el botón abre WhatsApp con un mensaje para coordinar la prueba.
export const AGENDA_URL = 'https://calendly.com/julian-weball/30min'
export const agendaLink = AGENDA_URL || whatsappLink('Hola Weball, quiero agendar una prueba de Weball con mi liga.')
// "Contactar": WhatsApp con un saludo ya escrito
export const contactoLink = whatsappLink('Hola Weball, quiero hacer una consulta.')

// Abre la agenda de Calendly en una ventana encima de la web (sin salir de la página).
// El código de Calendly se descarga recién la primera vez que alguien toca el botón.
// Si no carga (sin internet, bloqueador), el link sigue funcionando y abre Calendly en otra pestaña.
let calendly
function cargarCalendly() {
  if (!calendly) {
    calendly = new Promise((ok, error) => {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(css)
      const js = document.createElement('script')
      js.src = 'https://assets.calendly.com/assets/external/widget.js'
      js.async = true
      js.onload = () => ok(window.Calendly)
      js.onerror = error
      document.head.appendChild(js)
    })
  }
  return calendly
}

export function abrirAgenda(e) {
  if (!AGENDA_URL) return
  e.preventDefault()
  cargarCalendly()
    .then((Calendly) => Calendly.initPopupWidget({ url: `${AGENDA_URL}?hide_gdpr_banner=1&primary_color=3fb6ff` }))
    .catch(() => window.open(AGENDA_URL, '_blank', 'noopener'))
}
