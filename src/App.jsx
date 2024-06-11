import { useState } from 'react'
import Result from './components/result'
import Plus from './components/plus'
import Minus from './components/minus'
import Reset from './components/reset'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="counter">
        <Result />
        <div className="counter__btns">
          <Plus />
          <Reset />
          <Minus />
        </div>
      </div>
    </>
  )
}

export default App
