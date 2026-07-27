import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchUser } from './redux/userThunk';
import { fetchUser1 } from './api/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createUser } from './api/createUser';
import { deleteUser } from './api/deleteUser';
import { MdDeleteOutline } from "react-icons/md";

function Page() {
    const [input , setInput ] = useState('')
    
    const queryClient = useQueryClient();

    const {data , error , isLoading } = useQuery({
        queryKey : ['users'] ,
        queryFn : fetchUser1
    });
    
    const addUser = useMutation({
        mutationFn : createUser,
        onSuccess : ()=>{
            queryClient.invalidateQueries({
                queryKey:["users"]
            })
        }
    })
    const removeUser = useMutation({
        mutationFn : deleteUser,
        onSuccess : ()=>{
            queryClient.invalidateQueries({
                queryKey:["users"]
            })
        }
    })

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(input);
        addUser.mutate({name : input})
    }
    const deleteHandler = (id)=>{
        console.log(id)
        removeUser.mutate(id);
    }
    if(isLoading) return<h1>Loading</h1>
    if(error) return<h1>{error.message}</h1>
    
    return (
        <>
        <div>
            <form 
            onSubmit={submitHandler}
            className='border m-2 min-h-50 flex flex-col'>
                <div className='flex flex-col p-5 gap-3'>
                    <label className='text-2xl text-amber-800'>INPUT</label>
                    <input
                    type='text'
                    placeholder='Enter text...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='border px-3 py-2 text-xl w-1/2 border-amber-800 rounded focus:outline-2  outline-amber-800 text-amber-900'
                    ></input>
                </div>
                <button className='border w-1/3 mx-5 py-1 rounded-md bg-amber-800 text-amber-50' >SUBMIT</button>
            </form>
        </div>
        <div className='border min-h-50 max-w-full m-2 p-2 flex flex-col gap-2'>
            {data?.map((x)=>(
                <div
                key={x.id}
                className=' py-2 px-5 rounded bg-olive-100 text-olive-800 flex items-center justify-between text-xl '
                >
                    <h1>{x.name}</h1>

                    <span 
                    onClick={()=>deleteHandler(x.id)}
                    className='border w-7 h-7 flex justify-center items-center bg-red-200 rounded-full text-red-600'>
                        <MdDeleteOutline />
                    </span>
                </div>
            ))}

        </div>
    </>
  )
}
export default Page



// const {error , loading , users} = useSelector((state)=>state.users);
// const dispatch = useDispatch();

// useEffect(()=>{
//     dispatch(fetchUser())
// },[dispatch]);