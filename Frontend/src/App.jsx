import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import First from './Components/First'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />}/>
    </Routes>
    
    </>

  )
}

export default App
