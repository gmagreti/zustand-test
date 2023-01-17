import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CounterProvider } from './context/CounterProvider'
import { CounterUseSelectorProvider } from './context/CounterUseSelectorProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterUseSelectorProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </CounterUseSelectorProvider>
  </React.StrictMode>,
)
