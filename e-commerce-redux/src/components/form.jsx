import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { pushProducts } from '../api/pushProducducts';

export default function Form() {
    const initialState = {title : '' , 
        category : '',
        price : "" ,
        image : ''
    };
    const [input , setInput ] = useState(initialState);
    const changehandler = (e)=>{
        setInput(prev=>({...prev ,[e.target.name] : e.target.value }))
        // console.log(input)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(input)
        setInput(initialState);
        mutation.mutate(input);

    }
    const queryClient = useQueryClient() ;
    const mutation = useMutation({
        mutationFn : pushProducts,
        onSuccess : (msg)=>{
            console.log("success" ,msg);
            queryClient.invalidateQueries({
                queryKey : ["products"]
            })
        }

    })
    

  return (
    <div className='min-h-screen'>
        <Navbar />
        <Link
        className='border px-2 py-1 mx-3 rounded bg-blue-500 text-blue-50 '
        to={'/'}> back</Link>
        <div className='flex flex-col  p-5   items-center'>
            <form 
            onSubmit={(e)=>submitHandler(e)}
            className='flex flex-col rounded-xl shadow-xl px-4 m-2 md:w-1/2 sm:w-2/3 w-full h-fit gap-3 py-6'>
                <h1 className='text-4xl font-mono font-black'>Create Product</h1>
                <div className='flex flex-col gap-1'>
                    <label>Title</label>
                    <input 
                    className='outline-1 outline-gray-300 py-2 px-3 rounded'
                    placeholder='Enter title'
                    name='title'
                    value={input.title}
                    onChange={changehandler}
                    type="text" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Category</label>
                    <input
                    className='outline-1 outline-gray-300 py-2 px-3 rounded'
                    placeholder='Enter category'
                    name='category'
                    value={input.category}
                    onChange={changehandler}
                    type="text" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Price</label>
                    <input 
                    className='outline-1 outline-gray-300 py-2 px-3 rounded'
                    placeholder='Enter price'
                    name='price'
                    value={input.price}
                    onChange={changehandler}
                    type="number" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Image</label>
                    <input 
                    className='outline-1 outline-gray-300 py-2 px-3 rounded'
                    placeholder='Enter image url'
                    name='image'
                    value={input.image}
                    onChange={changehandler}
                    type="text" />
                </div>
                <button className='bg-blue-500 py-2 text-xl rounded-md text-blue-50 my-3'>SUBMIT</button>
            </form>
        </div>
        <p className='text-5xl'>{input.title}</p>
    </div>
  )
}
