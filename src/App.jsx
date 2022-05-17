import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Navbar from './components/Navbar.jsx'
import itemList from './itemList'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [stockedItems, setStockedItems] = useState([...itemList])
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop items={stockedItems} />}></Route>
      </Routes>
    </div>
  )
}

export default App
