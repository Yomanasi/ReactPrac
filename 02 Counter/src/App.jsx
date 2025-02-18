import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 5
  const addVelue = () => {
    console.log("Button Clicked", counter);
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const decVelue = () => {
    console.log("Button Clicked", counter);
    //counter = counter + 1
    setCounter(counter - 1)
  }

  return (
    <>
      <div> </div>
      <h1>Manasi</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addVelue}>Add Value</button>
      <br/>
      <button onClick={decVelue}>Decerese Value</button>
      
    </>
  )
}

export default App
