import React from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'
import ShopItemCard from './ShopItemCard.jsx'
import Sidebar from './Sidebar.jsx'

const Shop = ({ stockItems, addBasketItem }) => (
  <div className="container my-5">
    <div className="row">
      <div className="col-md-3 d-none d-lg-block">
        <Sidebar />
      </div>
      <div className="col-md">
        <h1 className="text-center display-3">Catalog</h1>
        <div className="row gy-3 my-2" data-testid="grid">
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
    </div>
  </div>
)

Shop.propTypes = {
  stockItems: propTypes.array.isRequired,
  addBasketItem: propTypes.func.isRequired
}

export default Shop
