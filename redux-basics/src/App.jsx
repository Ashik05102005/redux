import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Page from './Page';

function App() {
  const count = useSelector((state)=>state.count);
  const data = useSelector((state)=>state.input);
  const dispatch = useDispatch();
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(data);
    dispatch({type:"inputReset"}) 
  }


  return (
    <>
      <div className='border m-4 h-150 flex flex-col justify-around items-center py-10 '>
        <div>
          <h1 className='text-7xl font-serif'>Counter</h1>
        </div>
        <div>
          <span className='text-9xl font-serif'>{count}</span>
        </div>
        <div className='flex gap-10'>
          <button 
          className='border px-2 py-1 rounded bg-green-500 text-white text-2xl'
          onClick={()=>dispatch({type:"incr"})}
          >Increment</button>
          <button 
          className='border px-2 py-1 rounded bg-red-500 text-white text-2xl'
          onClick={()=>dispatch({type:"decr"})}
          >Decrement</button>
          <button 
          className='border px-2 py-1 rounded bg-blue-500 text-white text-2xl'
          onClick={()=>dispatch({type:"reset"})}
          >Reset</button>
        </div>
      </div>
      <div>
        <div className='border m-4 min-h-50 flex '>
          <form 
          onSubmit={submitHandler}
          className=' flex flex-col  w-full gap-5 m-2 p-3 ' >
            <label
            className='text-xl text-gray-700'
            >text</label>
            <input 
            type='text' 
            value={data}
            onChange={(e)=>dispatch({
              type:"input",
              payload :e.target.value 
            })}
            className='border border-gray-300 py-1 rounded-md px-1'/>
            <span>{data}</span>
            <button className='mt-5 border py-1 bg-amber-950 rounded-md text-amber-50'>submit</button> 
          </form>
        </div>
      </div>


      <Page />
    </>
  )
}

export default App
