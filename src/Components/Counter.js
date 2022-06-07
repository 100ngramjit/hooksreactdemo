import React,{useEffect,useReducer,useRef} from 'react'

const initialState=0
const reducer=(state,action)=>{
    if(action==="click"){
        return state+1;
    }
}
const Counter=()=> {
    const buttonRef=useRef()
   const[count,dispatch]= useReducer(reducer,initialState)
//    const increment=useCallback(()=>{
//        setCount(count+1)
//    },[count])
  useEffect(()=>{
       buttonRef.current.focus()
  },[])
  return (
    <div>{count}
        <button ref={buttonRef} onClick={()=>dispatch('click')}>click</button>
    </div>
  )
}

export default Counter