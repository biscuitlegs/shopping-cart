import React from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'

const Shop = ({ items }) => (
  <div className="container">
    <div className="row">
      <h1 className="text-center my-4">Welcome to the shop page!</h1>
    </div>
    <div className="row gy-3" data-testid="grid">
      {items.map((item) => (
        <div key={uniqid()} className="col-md-3">
          {item}
        </div>
      ))}
    </div>
  </div>
)

Shop.propTypes = {
  items: propTypes.array.isRequired
}

export default Shop
