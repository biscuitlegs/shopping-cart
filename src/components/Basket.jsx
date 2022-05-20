import React from 'react'
import uniqid from 'uniqid'
import propTypes from 'prop-types'
import BasketItemCard from './BasketItemCard.jsx'

const Basket = ({ stockItems, basketItems, updateBasketItem }) => {
  let modalBody = null
  if (basketItems.length === 0) {
    modalBody = 'No items in the basket.'
  } else {
    modalBody = (
      <ul className="list-group" data-testid="basketItems">
        {basketItems.map(({ id: basketItemId, quantity }) => {
          const foundItem = stockItems.find(
            ({ id: listItemId }) => listItemId === basketItemId
          )

          return (
            <li className="list-group-item" key={uniqid()}>
              {
                <BasketItemCard
                  id={basketItemId}
                  name={foundItem.name}
                  imagePath={foundItem.imagePath}
                  description={foundItem.description}
                  quantity={quantity}
                  updateBasketItem={updateBasketItem}
                />
              }
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div
      data-testid="basket"
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Basket
            </h5>
            <button
              data-testid="basketCross"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{modalBody}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {
  stockItems: propTypes.array.isRequired,
  basketItems: propTypes.array.isRequired,
  updateBasketItem: propTypes.func.isRequired
}

export default Basket
