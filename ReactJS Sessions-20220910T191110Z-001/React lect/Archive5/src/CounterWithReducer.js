import React,{useReducer} from 'react'

const initialState = {count:0,abc:[]};

const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: (state.count > 0)?state.count -1:state.count}
        default:
            return {count:state.count}
    }
}


const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>

    </div>
  )
}

export default CounterWithReducer