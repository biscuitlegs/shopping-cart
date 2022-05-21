import React from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'

const inputId = uniqid()

const BasketItemCard = ({
  id,
  imagePath,
  name,
  description,
  quantity,
  updateBasketItem,
  removeBasketItem
}) => (
  <div className="card mb-3 border-0">
    <div className="row g-0">
      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img
          src={imagePath}
          className="img-fluid rounded-start"
          alt={`A ${name}.`}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <label className="form-label" htmlFor={inputId}>
              Quantity
              <input
                className="form-control"
                id={inputId}
                type="number"
                defaultValue={quantity}
                min={1}
                onBlur={(e) => {
                  updateBasketItem(id, Number(e.currentTarget.value))
                }}
                onClick={(e) => {
                  e.currentTarget.focus()
                }}
              />
            </label>
            <button
              className="btn btn-danger"
              onClick={() => {
                removeBasketItem(id)
              }}
            >
              <span>Remove </span>
              <i className="bi bi-trash"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
)

BasketItemCard.propTypes = {
  id: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  quantity: propTypes.number.isRequired,
  updateBasketItem: propTypes.func.isRequired,
  removeBasketItem: propTypes.func.isRequired
}

export default BasketItemCard
