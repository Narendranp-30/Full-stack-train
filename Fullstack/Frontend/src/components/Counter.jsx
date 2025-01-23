import {useDispatch, useSelector} from "react-redux"
import { increment ,decrement,incrementByValue} from "../reducers/counterSlice"
import { useState } from "react"
const Counter = () =>{
  const [val,setVal] = useState()
  const count=useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  const handleValChange = (e) =>{
  setVal(e.target.value)
  }
  const handleIncrement = ()=>{
    if(val){
      dispatch(incrementByValue(parseInt(val)))
    }
    else{
      dispatch(increment())
    }
  }
  return(
    <>
    <div>Counter: {count}</div>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <input type="number" value={val} onChange={handleValChange} />
    <button onClick={handleIncrement}>ADD</button>
    </>
  )
}
export default Counter