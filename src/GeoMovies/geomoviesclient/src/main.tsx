import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import RectPro from './rectpro.tsx'
import Theproblem from './problem.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RectPro />
    <Theproblem />
  </StrictMode>,
)
