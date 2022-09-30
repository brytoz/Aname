import React, { useReducer } from "react";

const INITIAL_STATE = {
count:0,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count:state.count + 1}
        case 'decrement':
            return {count:state.count - 1}
        case 'reset':
            return INITIAL_STATE
        default:
            return state
    }
}

function Tes(props) {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>

      <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
    </>
  );
}

export default Tes;