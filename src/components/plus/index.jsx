import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { increment } from '../../context/slice/counterSlice';


const Plus = () => {
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(0)
    return (
        <div className='counter__plus'>
            <input
                type="number"
                value={counter === 0 ? "" : counter}
                onChange={(e) => setCounter(+e.target.value)}
            />
            <button onClick={() => dispatch(increment(counter))}><FaPlus /></button>
        </div>
    )
}

export default Plus