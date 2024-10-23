import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  const [count, setCount] = useState(0)

  
  
    return (
      <>
      
        <Routes>
        <Route path = '/' element = {<Login />}></Route>
        <Route element= {<PrivateRoutes/>}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path = '/add' element = {<Add />}></Route>
        </Route>
        </Routes>
        
      </>
    )
  }
  
  export default App
  
