import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../context/slice/counterSlice';


const Minus = () => {
    let dispatch = useDispatch()
    const [counter, setCounter] = useState(0)
    let count = useSelector(state => state.counter.value)


    return (
        <div className='counter__minus'>
            <input 
                type="number" 
                value={counter === 0 ? "" : counter}
                onChange={(e)=> setCounter(e.target.value)}
                disabled={count === 0}
            />
            <button disabled={count === 0} onClick={()=> dispatch(decrement(counter))}><FaMinus /></button>
        </div>
    )
}

export default Minus