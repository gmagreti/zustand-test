import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { CounterProvider } from './context/CounterProvider'
import { CounterUseSelectorProvider } from './context/CounterUseSelectorProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterUseSelectorProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </CounterUseSelectorProvider>
  </React.StrictMode>,
)
