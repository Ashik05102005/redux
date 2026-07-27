import { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const theme = useSelector(state=>state.theme.theme)


  return (
    <div className={`${theme ==="light" ? 'bg-white':'bg-slate-900'}`}>
      <Navbar /> 
      <Products />
    </div>
  )
}

export default App
