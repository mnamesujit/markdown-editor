import React, { useState } from 'react'
import './app.css'

const App: React.FC = ()  =>{
  const [cout, setCount] = useState(0)

  return (
    <div className = "app">
      <header>
        <h1>
          Hellow Markdown!!!
        </h1>
      </header>
    </div>
  )
}

export default App
