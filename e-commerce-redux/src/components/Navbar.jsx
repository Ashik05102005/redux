import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/themeSlice';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";



function Navbar() {
    const theme = useSelector((state)=>state.theme.theme);
    const dispatch = useDispatch();
    // console.log(theme)
  return (
    <div className={theme==="light"?null:'border'}>
        <div className={`border border-gray-100 p-3 text-4xl font-mono font-extrabold m-2 rounded-xl shadow-xl flex justify-between
                        
                        ${theme==="light" ? 'bg-white':'bg-slate-900 text-amber-100'}`}>
            <h1>Products</h1>   
            <button 
            onClick={()=>dispatch(toggleTheme())}
            className='text-md  mx-5 p-2 rounded-full bg-gray-100 shadow-md '>
                {theme==="light"?<CiDark />
    :<CiLight className='text-slate-900'/>}
            </button>
        </div>
    </div>
  )
}

export default Navbar