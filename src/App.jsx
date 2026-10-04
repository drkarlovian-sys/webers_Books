import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Card from "./Components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    
          <>
              <Navbar/>
              <Card/>
          </>
  )
}

export default App
