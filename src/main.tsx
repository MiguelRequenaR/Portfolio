import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import './index.css'
import App from './App.tsx'

AOS.init({
  duration: 700,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
