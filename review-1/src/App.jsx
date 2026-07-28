import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [num, setNum] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state=>state.count)

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(num);
    dispatch({type : "addNum" , payload : Number(num)})
    setNum(0)
  }
  return (
    <>
    <div className='border w-fit m-5 border-gray-200 rounded-xl shadow-md'>
      <div className='text-7xl font-bold font-mono p-5'>
        <p >{count }</p>
      </div>
      <div className='flex gap-5 p-5'>
        <button 
        className='border bg-gray-50 px-2 rounded text-gray-700'
        onClick={()=>dispatch({type : "increment" })}
        >increment</button>
        <button 
        className='border bg-gray-50 px-2 rounded text-gray-700'
        onClick={()=>dispatch({type : "decrement" })}
        >decrement</button>
        <button 
        className='border bg-gray-50 px-2 rounded text-gray-700'
        onClick={()=>dispatch({type : "reset" })}
        >reset</button>
      </div>
      <form
      className=' flex flex-col p-5 '
      onSubmit={submitHandler}>
        <input
        value={num}
        className='border px-2 py-1 border-gray-300  '
        onChange={(e)=>setNum(e.target.value)}
        type='number'>
        </input>
        <button 
        className=' mt-5 border bg-gray-700 py-1 text-gray-50 rounded-md'
        >add</button>
      </form>
    </div>
    </>
  )
}

export default App
