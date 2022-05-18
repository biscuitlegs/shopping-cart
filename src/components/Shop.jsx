import React from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'
import ShopItemCard from './ShopItemCard.jsx'

const Shop = ({ stockItems, addBasketItem }) => (
  <div className="container">
    <div className="row">
      <h1 className="text-center my-4">Welcome to the shop page!</h1>
    </div>
    <div className="row gy-3" data-testid="grid">
      {stockItems.map(({ id, name, imagePath, description, price }) => (
        <div key={uniqid()} className="col-md-3">
          {
            <ShopItemCard
              id={id}
              name={name}
              imagePath={imagePath}
              description={description}
              price={price}
              addBasketItem={addBasketItem}
            />
          }
        </div>
      ))}
    </div>
  </div>
)

Shop.propTypes = {
  stockItems: propTypes.array.isRequired,
  addBasketItem: propTypes.func.isRequired
}

export default Shop
