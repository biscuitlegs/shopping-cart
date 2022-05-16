import React from 'react'
import { Routes, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  )
}

export default App
