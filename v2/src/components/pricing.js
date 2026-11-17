// Precio de Weball: lo paga cada jugador al activar su credencial digital de juego. Cambialo acá.
export const PRICE_YEAR = 6 // USD por jugador al año
export const PRICE_MONTH = PRICE_YEAR / 12 // USD por jugador al mes (0,50)

// Formato argentino: 0,50 · 12.000
export const usd = (n, decimals = 0) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
