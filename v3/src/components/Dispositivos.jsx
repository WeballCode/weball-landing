import { useLayoutEffect, useRef, useState } from 'react'

// Dibuja su contenido a un ancho fijo (como una pantalla real) y lo achica para que entre en el espacio disponible.
// Así el panel y el chat se ven idénticos en la compu y en el celular, sólo más chicos.
export function Escalado({ ancho, className = '', children }) {
  const caja = useRef(null)
  const interior = useRef(null)
  const [escala, setEscala] = useState(1)
  const [alto, setAlto] = useState(0)

  useLayoutEffect(() => {
    const medir = () => {
      if (!caja.current || !interior.current) return
      setEscala(caja.current.offsetWidth / ancho)
      setAlto(interior.current.offsetHeight)
    }
    medir()
    const ro = new ResizeObserver(medir)
    ro.observe(caja.current)
    ro.observe(interior.current)
    return () => ro.disconnect()
  }, [ancho])

  return (
    <div ref={caja} className={`relative overflow-hidden ${className}`} style={{ height: alto * escala || undefined }}>
      <div ref={interior} style={{ width: ancho, transform: `scale(${escala})`, transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  )
}

// Notebook: marco oscuro, pantalla 16:10 y base
export function Notebook({ children, className = '' }) {
  return (
    <div className={className}>
      <div className="rounded-t-[1.4rem] bg-[#1d1d1f] p-[1.6%] pb-[1.2%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
        <div className="overflow-hidden rounded-[0.35rem] bg-white">
          <Escalado ancho={1280}>{children}</Escalado>
        </div>
      </div>
      <div className="relative mx-[-6%] h-[0.9rem] rounded-b-[1.2rem] bg-gradient-to-b from-[#d9d9de] to-[#a9a9b0] sm:h-[1.1rem]">
        <span className="absolute top-0 left-1/2 h-[45%] w-[14%] -translate-x-1/2 rounded-b-lg bg-[#b9b9bf]" />
      </div>
    </div>
  )
}

// Celular: marco redondeado con isla arriba
export function Celular({ children, className = '' }) {
  return (
    <div className={`rounded-[3.2rem] bg-[#1d1d1f] p-[3.2%] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-white/10 ${className}`}>
      <div className="relative overflow-hidden rounded-[2.75rem] bg-white">
        <Escalado ancho={360}>{children}</Escalado>
      </div>
    </div>
  )
}
