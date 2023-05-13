import React, { useState } from 'react'
import './app.css'

const App: React.FC = ()  =>{
  const [cout, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>
          Hellow Vite + React + TypeScript!
        </h1>
      </header>
    </div>
  )
}

export default App
