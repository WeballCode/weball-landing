// Ilustraciones planas en los colores de la marca (sin degradados ni sombras)

// Cancha vista desde arriba, en líneas finas. Se usa de fondo en la portada.
export function CourtLines({ className = '' }) {
  return (
    <svg viewBox="0 0 400 640" className={className} fill="none" aria-hidden="true">
      <g stroke="#365a70" strokeWidth="2.5">
        <rect x="20" y="20" width="360" height="600" />
        <line x1="20" y1="320" x2="380" y2="320" />
        <circle cx="200" cy="320" r="3" fill="#365a70" />
        {/* Áreas */}
        <path d="M110 20v40a90 90 0 0 0 180 0V20" />
        <path d="M110 620v-40a90 90 0 0 1 180 0v40" />
        {/* Arcos */}
        <rect x="170" y="6" width="60" height="14" />
        <rect x="170" y="620" width="60" height="14" />
        {/* Esquinas */}
        <path d="M20 34a14 14 0 0 0 14-14M366 20a14 14 0 0 0 14 14M20 606a14 14 0 0 1 14 14M366 620a14 14 0 0 1 14-14" />
      </g>
      <circle cx="200" cy="320" r="62" stroke="#3fb6ff" strokeWidth="3" />
    </svg>
  )
}

// Esquema de una asociación con sus ligas y los clubes de cada liga
export function AssociationDiagram({ className = '' }) {
  const ligas = [70, 240, 410]
  return (
    <svg viewBox="0 0 480 300" className={className} role="img" aria-label="Una asociación con tres ligas, y cada liga con sus clubes">
      {/* Conexiones */}
      <g stroke="#365a70" strokeWidth="2.5" fill="none">
        <path d="M240 78v34M70 112h340M70 112v28M240 112v28M410 112v28" />
        {ligas.map((x) => (
          <path key={x} d={`M${x} 196v22M${x - 44} 218h88M${x - 44} 218v18M${x} 218v18M${x + 44} 218v18`} />
        ))}
      </g>
      {/* Asociación */}
      <rect x="150" y="18" width="180" height="60" fill="#3fb6ff" />
      <text x="240" y="54" textAnchor="middle" fill="#032639" fontFamily="Roboto, Arial, sans-serif" fontSize="17" fontWeight="800" letterSpacing="1.5">
        ASOCIACIÓN
      </text>
      {/* Ligas */}
      {ligas.map((x, i) => (
        <g key={x}>
          <rect x={x - 62} y="140" width="124" height="56" fill="#0f3143" />
          <rect x={x - 62} y="140" width="124" height="5" fill="#3fb6ff" />
          <text x={x} y="175" textAnchor="middle" fill="#fbfbf8" fontFamily="Roboto, Arial, sans-serif" fontSize="15" fontWeight="800" letterSpacing="1">
            {`LIGA ${i + 1}`}
          </text>
          {/* Clubes */}
          {[-44, 0, 44].map((dx) => (
            <circle key={dx} cx={x + dx} cy="256" r="16" fill="none" stroke="#b9cbd6" strokeWidth="2.5" />
          ))}
        </g>
      ))}
      <text x="240" y="296" textAnchor="middle" fill="#b9cbd6" fontFamily="Roboto, Arial, sans-serif" fontSize="12" fontWeight="500" letterSpacing="3">
        CLUBES
      </text>
    </svg>
  )
}

// Cuadro de eliminatorias: de 8 equipos a un campeón
export function Bracket({ className = '', dark = true }) {
  const line = dark ? '#365a70' : '#b9cbd6'
  const slots = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => 12 + i * 26)
  const r2 = [0, 1, 2, 3].map((i) => (slots[i * 2] + slots[i * 2 + 1]) / 2)
  const r3 = [0, 1].map((i) => (r2[i * 2] + r2[i * 2 + 1]) / 2)
  const final = (r3[0] + r3[1]) / 2
  const join = (a, b, x1, x2) => `M${x1} ${a}h14V${b}h-14M${x1 + 14} ${(a + b) / 2}H${x2}`

  return (
    <svg viewBox="0 0 300 220" className={className} fill="none" aria-hidden="true">
      <g stroke={line} strokeWidth="2.5">
        {slots.map((y) => <line key={y} x1="0" y1={y} x2="56" y2={y} />)}
        {[0, 1, 2, 3].map((i) => <path key={i} d={join(slots[i * 2], slots[i * 2 + 1], 56, 96)} />)}
        {r2.map((y) => <line key={y} x1="96" y1={y} x2="140" y2={y} />)}
        {[0, 1].map((i) => <path key={i} d={join(r2[i * 2], r2[i * 2 + 1], 140, 180)} />)}
        {r3.map((y) => <line key={y} x1="180" y1={y} x2="214" y2={y} />)}
      </g>
      <path d={join(r3[0], r3[1], 214, 254)} stroke="#3fb6ff" strokeWidth="3" />
      <rect x="254" y={final - 14} width="40" height="28" fill="#3fb6ff" />
      <path d={`M266 ${final - 6}h16v5a8 8 0 0 1-16 0zM274 ${final + 7}v3`} stroke="#032639" strokeWidth="2.2" />
    </svg>
  )
}
