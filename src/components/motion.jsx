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

// Hace aparecer su contenido con un deslizamiento suave cuando entra en pantalla
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Número que cuenta desde cero al aparecer: recibe textos como "+35.000"
export function CountUp({ value, duration = 1600 }) {
  const prefix = value.match(/^\D*/)[0]
  const target = parseInt(value.replace(/\D/g, ''), 10)
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion()) {
      setN(target)
      return
    }
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
