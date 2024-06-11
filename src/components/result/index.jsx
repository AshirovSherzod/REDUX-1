import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    let count = useSelector(state => state.counter.value)
  return (
    <div>
        <h1 className='counter__title'>{count}</h1>
    </div>
  )
}

export default Result