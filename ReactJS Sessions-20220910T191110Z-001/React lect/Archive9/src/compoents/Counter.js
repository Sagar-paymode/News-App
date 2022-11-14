import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incFunction,decFunction } from '../action/index'
const Counter = () => {
    const mystate = useSelector((state)=>state.changeNumberKey)
    const dispatch = useDispatch();

  return (
    <div style={{display:'flex',alignItems:'center'}}>
        <button onClick={()=>dispatch(decFunction())}>-</button>
        <h1 style={{margin:'1em'}}>{mystate}</h1>
        <button onClick={()=>dispatch(incFunction(5))}>+</button>
    </div>
  )
}

export default Counter