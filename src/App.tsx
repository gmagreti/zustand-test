import './App.css'
import reactLogo from './assets/react.svg'
import { Button1 } from './components/Button1'
import { Button2 } from './components/Button2'
import { Button3 } from './components/Button3'

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
      
      <Button1 />
    
      <Button2 />

      <Button3 />
     
    </div>
  )
}

export default App
