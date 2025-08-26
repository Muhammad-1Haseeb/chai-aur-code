import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#D6dee9")

  const toggleBlackWhite = () => {
    setColor(currentColor => currentColor === "black" ? "white" : "black")
  }

  const getToggleButtonText = () => {
    return color === "black" ? "Switch to White" : "Switch to Black"
  }

  const getToggleButtonClass = () => {
    return color === "black" ? "color-button white" : "color-button black"
  }

  return (
    <div style={{backgroundColor: color, minHeight: '100vh', width: '100vw'}}>
      <header className="header-container">
        <nav className="nav-center">
          <button 
            className={getToggleButtonClass()}
            onClick={toggleBlackWhite}
          >
            {getToggleButtonText()}
          </button>
          <button 
            className="color-button default" 
            onClick={() => setColor("#D6dee9")}
          >
            Default
          </button>
        </nav>
      </header>
    </div>
  )
}

export default App
