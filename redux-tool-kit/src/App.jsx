import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { increment , decrement , incrementByScore , reset } from './redux/ScoreReducer'
import { datainput } from './redux/inputReducer'
import Page from './Page'

function App() {
  const [inputData , setInputData] = useState('')
  const store = useSelector((state)=>state.scorecount.score);
  const data = useSelector((state)=>state.inputslice.data);
  const dispatch = useDispatch();
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(inputData)
    dispatch(datainput(inputData));
    setInputData('')

  }
  return (
    <>

    <Page/>

    <div className='flex flex-col border items-center my-10 mx-2 gap-9'>
      <div className='text-9xl'>
          {store}
      </div>
      <div className='flex  gap-10 text-xl font-bold font-mono'>
        <button 
        onClick={()=>{dispatch(increment())}}
        className='border px-2 py-1 rounded-md text-green-600 m-5'
        >INCREASE</button>
        <button
        onClick={()=>{dispatch(decrement())}}
        className='border px-2 py-1 rounded-md text-red-600 m-5'
        >DECRAESE</button>
        <button
        onClick={()=>{dispatch(incrementByScore(5))}}
        className='border px-2 py-1 rounded-md text-purple-600 m-5'
        >INCREMENT BY 5</button>
        <button
        onClick={()=>{dispatch(reset())}}
        className='border px-2 py-1 rounded-md text-gray-600 m-5'
        >RESET</button>
      </div>
    </div>
    <div className='m-2 min-h-100 border p-5 text-xl'>
      <form 
      onSubmit={submitHandler}
      className='flex flex-col items-start gap-5'>
        <h1>Enter Data</h1>
        <input
        value={inputData}
        className='border w-2/3 px-2 py-1 mt-2 border-gray-300 rounded-md'
        onChange={(e)=>{setInputData(e.target.value)}}
        ></input>
        <button
        className='border py-1 px-3 rounded-md bg-blue-950 text-blue-50'
        >submit</button>
      </form>
      <div>
        {data.map((x)=><h1>{x}</h1>)}
      </div>
    </div>



    
      
    </>
  )
}

export default App
