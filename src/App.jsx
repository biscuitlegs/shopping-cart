import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import _ from 'lodash'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Navbar from './components/Navbar.jsx'
import itemList from './itemList'
import Basket from './components/Basket.jsx'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [stockItems, setStockItems] = useState(itemList)
  const [basketItems, setBasketItems] = useState([])

  const alreadyInBasket = (id) =>
    basketItems.some(({ id: basketItemId }) => basketItemId === id)

  const addBasketItem = (id, quantity) => {
    const newBasketItem = { id, quantity }
    if (alreadyInBasket(id)) {
      const existingItem = basketItems.find(
        ({ id: basketItemId }) => basketItemId === id
      )
      const remainingItems = basketItems.filter(
        (basketItem) => basketItem !== existingItem
      )
      const newItem = existingItem
      newItem.quantity += quantity
      setBasketItems([newItem, ...remainingItems])
      return
    }
    const newBasketItems = [...basketItems, newBasketItem]
    const sortedItems = _.sortBy(newBasketItems, (item) => item.id)
    setBasketItems(sortedItems)
  }

  const updateBasketItem = (id, quantity) => {
    if (alreadyInBasket(id)) {
      const existingItem = basketItems.find(
        ({ id: basketItemId }) => basketItemId === id
      )
      const remainingItems = basketItems.filter(
        (basketItem) => basketItem !== existingItem
      )
      const newItem = existingItem
      newItem.quantity = quantity
      const newBasketItems = [newItem, ...remainingItems]
      const sortedItems = _.sortBy(newBasketItems, (item) => item.id)
      setBasketItems(sortedItems)
    }
  }

  return (
    <div>
      <Navbar />
      <Basket basketItems={basketItems} updateBasketItem={updateBasketItem} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/shop"
          element={
            <Shop stockItems={stockItems} addBasketItem={addBasketItem} />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
