// Links y datos de contacto que se usan en varias secciones. Cambialos acá.

// WhatsApp de contacto: +54 11 7073-6993 (en el link va con el 9 de celular argentino y sin espacios)
export const WHATSAPP_NUMBER = '5491170736993'
export const WHATSAPP_LABEL = '+54 11 7073 6993'

// Arma el link de WhatsApp con un mensaje ya escrito
export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Comunidad: We Are Weball (Weball Scores), con los partidos, resultados y tablas de todas las ligas
export const COMUNIDAD_URL = 'https://we-are-weball.com'

// Agenda para "Probar con mi liga": link de Calendly (cuenta de Julián). Para cambiarla, pegá otro link acá
// (Calendly o Google Calendar). Si queda vacío, el botón abre WhatsApp con un mensaje para coordinar la prueba.
export const AGENDA_URL = 'https://calendly.com/julian-weball/30min'
export const agendaLink = AGENDA_URL || whatsappLink('Hola Weball, quiero agendar una prueba de Weball con mi liga.')
// "Contactar": WhatsApp con un saludo ya escrito
export const contactoLink = whatsappLink('Hola Weball, quiero hacer una consulta.')

// Agenda: todo pasa en nuestra ventana (AgendaModal.jsx), con pasos como lazo.us:
// 1) tus datos, 2) Calendly adentro de la ventana con esos datos ya cargados, 3) confirmación.
// El código de Calendly se descarga recién cuando alguien abre la ventana.
let calendly
export function cargarCalendly() {
  if (!calendly) {
    calendly = new Promise((ok, error) => {
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

// Los botones "Probar con mi liga" abren la ventana (si no hay agenda configurada, siguen al WhatsApp)
export function abrirAgenda(e) {
  if (!AGENDA_URL) return
  e.preventDefault()
  window.dispatchEvent(new Event('abrir-agenda'))
}

// Link de Calendly con los datos precargados.
// a1 = primera pregunta extra del evento en Calendly (si la creás, ej. "¿Cómo se llama tu liga?", llega completa)
export function urlCalendly({ nombre, apellido, email, liga }) {
  const datos = new URLSearchParams({
    hide_gdpr_banner: '1',
    hide_landing_page_details: '1',
    hide_event_type_details: '1',
    primary_color: '3fb6ff',
    name: `${nombre} ${apellido}`.trim(),
    first_name: nombre,
    last_name: apellido,
    email,
  })
  if (liga) datos.set('a1', liga)
  return `${AGENDA_URL}?${datos}`
}
