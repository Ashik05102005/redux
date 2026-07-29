import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/loginSlice'

function App() {
  const [count, setCount] = useState(0)
  const loginStatus = useSelector(state=>state.loginStatus.login)
  const dispatch = useDispatch()
  return (
    <>
    <div
    className={`flex flex-col gap-3 p-5 border ${loginStatus==="login"?"bg-green-400" :"bg-red-400"}` }
    >
      <div>
        login
      </div>
      <div>
        currrent Status
        <p>
          {loginStatus==="login"?"welcome User":"please Login"}
        </p>
      </div>
      <div>
        
        {
          loginStatus==="logout"?
          <button
        onClick={()=>dispatch(login())}
        >Login</button>:
        <button 
        onClick={()=>dispatch(logout())}
        >Logout</button>
        }
      </div>
      </div>
    </>
  )
}

export default App
