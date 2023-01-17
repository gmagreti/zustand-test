import './App.css'
import reactLogo from './assets/react.svg'
import { ButtonContextAPI } from './components/ButtonContextAPI'
import { ButtonUseContextSelector } from './components/ButtonUseContextSelector'
import { ButtonZustand } from './components/ButtonZustand'
import { ButtonZustand2 } from './components/ButtonZustand2'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <ButtonZustand />

      <ButtonZustand2 />
    
      <ButtonContextAPI />

      <ButtonUseContextSelector />
     
    </div>
  )
}

export default App
