import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarjeta from './components/cards/cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Tarjeta /> 
      
    </>
  ) 
}


export default App
