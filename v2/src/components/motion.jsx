import { useEffect, useRef, useState } from 'react'

// ¿La persona pidió reducir el movimiento en su dispositivo?
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

// Avisa cuando un elemento entra en pantalla (una sola vez)
export function useInView({ threshold = 0.1, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}

// Prende la animación un instante después de montarse (para que las transiciones arranquen de cero)
export function usePlay(play) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (!play) return
    // Dos cuadros de espera: el navegador primero pinta el estado inicial y recién después arranca la animación
    let second
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setOn(true))
    })
    return () => {
      cancelAnimationFrame(first)
      cancelAnimationFrame(second)
    }
  }, [play])
  return on
}

// Cuenta vueltas cada tantos milisegundos mientras se ve, para repetir una animación en loop
export function useCycle(play, ms) {
  const [cycle, setCycle] = useState(0)
  useEffect(() => {
    if (!play || prefersReducedMotion()) return
    const timer = setInterval(() => setCycle((c) => c + 1), ms)
    return () => clearInterval(timer)
  }, [play, ms])
  return cycle
}

// Hace aparecer su contenido con un deslizamiento suave cuando entra en pantalla
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Número que cuenta desde cero al aparecer: recibe textos como "+35.000".
// Arranca mostrando el número final (así lo ve Google y quien no hace scroll) y cuenta desde cero
// cuando entra en pantalla, al mismo tiempo que su bloque aparece (Reveal), así el salto no se ve.
export function CountUp({ value, duration = 1600 }) {
  const prefix = value.match(/^\D*/)[0]
  const target = parseInt(value.replace(/\D/g, ''), 10)
  const [ref, inView] = useInView()
  const [n, setN] = useState(target)

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return (
    <span ref={ref} aria-label={value}>
      {prefix}
      {n.toLocaleString('es-AR')}
    </span>
  )
}
