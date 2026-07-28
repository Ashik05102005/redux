import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {reset , addNum, decrement, increment } from './redux/Slice/counterSlice';


function App() {
  const [num, setNum] = useState(0)
  // const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch();
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(addNum(Number(num)))
  }
  return (
    <>
    <div>
      <div>{count}</div>
      <div>
        <button
        onClick={()=>dispatch(increment())}
        >
          increment
        </button>
        <button
        onClick={()=>dispatch(decrement())}
        >
          decrement
        </button>
        <button
        onClick={()=>dispatch(reset())}
        >
          reset
        </button>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input 
          onChange={(e)=>setNum(e.target.value)}
          type='number'></input>
          <button
          >add</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
