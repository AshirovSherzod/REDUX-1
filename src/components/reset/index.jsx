import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../../context/slice/counterSlice'

const Reset = () => {
    let dispatch = useDispatch()
  return (
    <div>
        <button className='counter__reset' onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Reset