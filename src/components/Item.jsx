import React from 'react'
import propTypes from 'prop-types'

const Item = ({ imagePath, name, description, price }) => (
  <div className="card text-bg-light h-100">
    <img src={imagePath} className="card-img-top" alt={`A ${name}.`} />
    <div className="card-body border-top d-flex flex-wrap">
      <h5 className="card-title w-100">{name}</h5>
      <p className="card-text w-100">{description}</p>
      <a
        href="#"
        className="btn btn-primary w-100"
        style={{ marginTop: 'auto' }}
      >
        <span>{`$${price} `}</span>
        <i className="bi bi-bag-plus"></i>
      </a>
    </div>
  </div>
)

Item.propTypes = {
  imagePath: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}

export default Item
