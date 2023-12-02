import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Wishlist from './Components/Wishlist'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>

      </Routes>
    </div>
  )
}

export default App