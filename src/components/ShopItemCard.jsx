import React, { useState } from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'

const inputId = uniqid()

const ShopItemCard = ({
  id,
  imagePath,
  name,
  description,
  price,
  addBasketItem
}) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="card text-bg-light h-100">
      <img src={imagePath} className="card-img-top" alt={`A ${name}.`} />
      <div className="card-body border-top d-flex flex-wrap">
        <h5 className="card-title w-100">{name}</h5>
        <p className="card-text w-100">{description}</p>
        <div className="align-self-end">
          <label className="form-label" htmlFor={inputId}>
            Quantity
            <input
              className="form-control"
              id={inputId}
              type="number"
              defaultValue={1}
              min={1}
              onInput={(e) => {
                setQuantity(Number(e.currentTarget.value))
              }}
            />
          </label>
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => {
              addBasketItem(id, quantity)
            }}
            onMouseOver={(e) => {
              e.currentTarget.childNodes[0].textContent = 'Add to Basket '
              e.currentTarget.childNodes[1].classList.remove('d-none')
            }}
            onMouseLeave={(e) => {
              e.currentTarget.childNodes[0].textContent = `$${price} `
              e.currentTarget.childNodes[1].classList.add('d-none')
            }}
          >
            <span>{`$${price} `}</span>
            <i className="bi bi-bag-plus d-none"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

ShopItemCard.propTypes = {
  id: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  addBasketItem: propTypes.func.isRequired
}

export default ShopItemCard
