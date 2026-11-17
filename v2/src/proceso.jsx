// Entrada común de las 8 páginas de proceso. Cada .html dice cuál es con data-proceso="<slug>"
// en el <div id="root">; acá se elige su contenido (src/procesos/<slug>.js) y su animación.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './components/Page.jsx'
import ProcessPage from './components/ProcessPage.jsx'
import SceneLoop from './components/SceneLoop.jsx'
import { FichajesVisual } from './components/FichajeVisual.jsx'
import FormatShowcase from './components/FormatShowcase.jsx'
import PlanillaShowcase from './components/PlanillaShowcase.jsx'
import TribunalShowcase from './components/TribunalShowcase.jsx'
import ComunicacionShowcase from './components/ComunicacionShowcase.jsx'
import { ligaScenes } from './components/LigaVisual.jsx'
import { arbitroScenes } from './components/ArbitrosVisual.jsx'

import fichajes from './procesos/fichajes.js'
import fixture from './procesos/fixture.js'
import programacion from './procesos/programacion.js'
import planillas from './procesos/planillas.js'
import arbitros from './procesos/arbitros.js'
import resultados from './procesos/resultados.js'
import tribunal from './procesos/tribunal.js'
import comunicacion from './procesos/comunicacion.js'

const [, , , programar, enVivo, publicado] = ligaScenes

const pages = {
  fichajes: { content: fichajes, visual: <FichajesVisual /> },
  fixture: { content: fixture, visual: <FormatShowcase /> },
  programacion: {
    content: programacion,
    visual: <SceneLoop icon="programar" scenes={[{ label: 'Día, hora, cancha y árbitro', Scene: programar }]} />,
  },
  planillas: { content: planillas, visual: <PlanillaShowcase /> },
  arbitros: { content: arbitros, visual: <SceneLoop icon="arbitro" scenes={arbitroScenes} ms={6000} /> },
  resultados: {
    content: resultados,
    visual: (
      <SceneLoop
        icon="resultados"
        scenes={[
          { label: 'Marcador en vivo', Scene: enVivo },
          { label: 'La tabla se actualiza sola', Scene: publicado },
        ]}
      />
    ),
  },
  // La animación del tribunal está pensada para fondo celeste
  tribunal: {
    content: tribunal,
    visual: (
      <div className="bg-celeste p-5 text-marino sm:p-7">
        <TribunalShowcase />
      </div>
    ),
  },
  comunicacion: { content: comunicacion, visual: <ComunicacionShowcase /> },
}

const root = document.getElementById('root')
const slug = root.dataset.proceso
const { content, visual } = pages[slug]

createRoot(root).render(
  <StrictMode>
    <Page page={slug}>
      <ProcessPage slug={slug} content={content} visual={visual} />
    </Page>
  </StrictMode>,
)
