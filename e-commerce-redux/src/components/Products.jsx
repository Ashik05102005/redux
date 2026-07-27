import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React,{useEffect, useState} from 'react'
import { fetchProducts } from '../api/fetchProducts'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productsSlice'

export default function Products() {
    const dispatch = useDispatch()
    const [page , setPage ] = useState(1)
    const products = useSelector((state)=>state.products.products.products)
    const theme = useSelector((state)=>state.theme.theme);
    // console.log(theme)
    const {data , isLoading , error }= useQuery({
        queryKey : ['products',page],
        queryFn :()=> fetchProducts(page),
        placeholderData : keepPreviousData
    })
    useEffect(()=>{
        if(data){
            dispatch(setProducts(data));
        }
    },[data , dispatch])
    if(isLoading) return <h1>Loading ...</h1>
    if(error) return <h1>{error.message}</h1>
    console.log(products)
    
    // console.log(products)
  return (
    <div className= {`${theme==="light"?"bg-white  " : "bg-slate-900 text-amber-100"}` }>
        <h2 className={`text-5xl font-mono px-7 py-2 text-amber-100  w-fit rounded-tr-full bg-amber-700  `}>Products</h2>
        <div className=' min-h-150 flex gap-5 flex-wrap justify-around mt-3 pt-2'>
            {
            data.data.map((x)=>(
                <div 
                key={x.id}
                className=' rounded-md border border-gray-300 shadow-md h-70 w-57   p-2 font-bold overflow-hidden'>
                    <div className='flex justify-center p-2 relative'> 
                        <img src={x.image}
                        className='h-40'
                        ></img>
                        <span className='absolute bg-amber-700 right-0 top-0 px-2 rounded text-amber-100'>{x.price} $</span>
                    </div>
                    <hr className='text-gray-300'></hr>
                    <div className='flex justify-center'>
                        <h1>{x.title}</h1>
                    </div>
                </div>
            ))}
        </div>
        <div className='mt-5  bg-amber-800 text-amber-100 h-20 flex justify-center pt-3'>
            <div className=' h-10 w-1/3 flex justify-center items-center gap-5'>
                {page>1?<button
                className='border px-2 py-1 rounded'
                onClick={()=>setPage(prev=>prev-1)}
                >prev</button>:null}
                <span>{page}/{data.last}</span>
                {data.last>page?<button
                className='border px-2 py-1 rounded'
                onClick={()=>setPage(prev=>prev+1)}
                >next</button>:null}
                
            </div>
        </div>
    </div>
  )
}
