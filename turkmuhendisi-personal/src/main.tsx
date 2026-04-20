import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import * as helmetAsync from 'react-helmet-async'
import './styles/index.css'
import App from './App.tsx'

const { HelmetProvider } = (Reflect.get(helmetAsync as object, 'default') ?? helmetAsync) as typeof import('react-helmet-async')
const rootElement = document.getElementById('root')!

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement,
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  )
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  )
}
