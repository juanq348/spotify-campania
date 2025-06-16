import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './components/Inicio'
import Beneficios from './components/Beneficios'
import Comparacion from './components/Comparación'
import Planes from './components/Planes'
import Preguntas from './components/Preguntas'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
    <Beneficios />
    <Comparacion />
    <Planes />
    <Preguntas />
    <Footer />
  </StrictMode>,
)
