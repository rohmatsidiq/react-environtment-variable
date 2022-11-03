import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Blog from './page/Blog'
import Dashboard from './page/Dashboard'
import Home from './page/Home'

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    
  )
}

export default App
