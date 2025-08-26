import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }
  const minusValue = () => {
    setCounter(counter - 1);
    if(counter == 0){
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={minusValue}>Minus value</button>
    </>
  )
}

export default App
