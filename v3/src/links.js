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
