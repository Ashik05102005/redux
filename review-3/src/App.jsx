import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchItems } from './api/fetchItems'
import { addItems } from './api/addItems'


function App() {
  const inputInitialState = {name:'', brand : '' , price : '' , stock : ''}
  const [input , setInput] = useState(inputInitialState)
  const [itemData , setItemData] = useState([])
  const [count, setCount] = useState(0)

  const {data , isLoading , error} = useQuery({
    queryKey : ["items"] ,
    queryFn : fetchItems
  })

  const queryClient = useQueryClient()

  const addProduct = useMutation({
    mutationFn : addItems,
    onSuccess : ()=>{
      console.log("succeedd")
      queryClient.invalidateQueries({
        queryKey : ["items"]
      })
    }
  })
  const submithandler = (e)=>{
    e.preventDefault();
    console.log(input)
    addProduct.mutate(input);

  }
  if(isLoading)return<h1>Loading ...</h1>
  if(error)return <h1>{error.message}</h1>
  
  return (
    <>
    <div className='p-5'>
      <h1>Products</h1>
    </div>
    <div className='flex p-3 flex-wrap justify-around gap-5'>
      {data.map((x)=>(
        <div
        className='border w-50 p-3' 
        key={x.id}>
          <h1>{x.name}</h1>
          <h2>{x.brand}</h2>
          <h2>{x.price}</h2>
          <h2>{x.stock}</h2>
        </div>
      ))}
      </div>
      <div>
        <form 
        onSubmit={submithandler}
        className='flex flex-col p-6 border gap-3'>
          <input
          type='text'
          className='border px-2 py-1 w-2/3 border-gray-300'
          placeholder='Enter Product name '
          name = 'name'
          onChange={(e)=>setInput(prev=>({...prev  ,[e.target.name]:e.target.value}))}
          ></input>
          <input
          type='text'
          className='border px-2 py-1 w-2/3 border-gray-300'
          placeholder='Enter Product brand '
          name = 'brand'
          onChange={(e)=>setInput(prev=>({...prev  ,[e.target.name]:e.target.value}))}
          ></input>
          <input
          type='number'
          className='border px-2 py-1 w-2/3 border-gray-300'
          placeholder='Enter Product price '
          name = 'price'
          onChange={(e)=>setInput(prev=>({...prev  ,[e.target.name]:e.target.value}))}
          ></input>
          <input
          type='number'
          className='border px-2 py-1 w-2/3 border-gray-300'
          placeholder='Enter Product stock '
          name = 'stock'
          onChange={(e)=>setInput(prev=>({...prev  ,[e.target.name]:e.target.value}))}
          ></input>
          <button 
          className='w-2/3 border py-1 text -xl bg-blue-100 text-blue-700'
          >submit</button>
        </form>
      </div>
    </>
  )
}

export default App
