// Tarjeta clara que pasa en loop por varias escenas dibujadas (300 x 200), con su título arriba.
// Cada escena es { label, Scene }; Scene recibe `on` cuando ya puede animarse.
import { useEffect, useState } from 'react'
import { Icon } from './ui.jsx'
import { prefersReducedMotion, useInView, usePlay } from './motion.jsx'

function Drawing({ Scene, play }) {
  const on = usePlay(play)
  return (
    <svg viewBox="0 0 300 200" className={`h-auto w-full ${on ? 'is-visible' : ''}`} fill="none" aria-hidden="true">
      <Scene on={on} />
    </svg>
  )
}

export default function SceneLoop({ scenes, icon, ms = 5200 }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(0)

  useEffect(() => {
    if (!inView || reduced || scenes.length < 2) return
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % scenes.length)
      setRound((r) => r + 1)
    }, ms)
    return () => clearTimeout(t)
  }, [inView, reduced, index, round, ms, scenes.length])

  const { label, Scene } = scenes[index]
  return (
    <div ref={ref} className="flex flex-col border-t-[6px] border-celeste bg-blanco p-5 text-marino sm:p-7" role="img" aria-label={label}>
      <div className="mb-3 flex items-center gap-3 text-celeste-profundo">
        {icon && <Icon name={icon} className="h-5 w-5" />}
        <span className="text-xs font-bold uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div key={round} className="format-enter">
        <Drawing Scene={Scene} play={inView} />
      </div>
      {scenes.length > 1 && (
        <div className="mt-4 flex gap-2">
          {scenes.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => {
                setIndex(i)
                setRound((r) => r + 1)
              }}
              aria-label={s.label}
              className={`h-1.5 flex-1 transition ${i === index ? 'bg-celeste-profundo' : 'bg-niebla hover:bg-bruma'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
