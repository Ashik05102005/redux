import { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Form from './components/form'

function App() {
  const [count, setCount] = useState(0)
  const theme = useSelector(state=>state.theme.theme)


  return (
    <div className={`${theme ==="light" ? 'bg-white':'bg-slate-900'}`}>
       
      
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/form' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
