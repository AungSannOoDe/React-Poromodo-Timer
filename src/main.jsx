import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense callback="..loading">
    <App />
    </React.Suspense>
    
  </StrictMode>,
)
