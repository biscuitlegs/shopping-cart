import React from 'react'
import { Link } from 'react-router-dom'
import mainImage from '../assets/undraw_shopping_re_hdd9.svg'

const Home = () => (
  <div className="container text-center my-2">
    <h1 className="mb-3 display-1">Welcome to the React Shop!</h1>
    <div className="row gy-5 my-3" data-testid="homeContent">
      <div className="col-lg">
        <img className="img-fluid" src={mainImage} />
      </div>
      <div className="col-lg d-flex align-items-center flex-wrap">
        <h4>
          Ullamco sint eu ea eu ullamco
          <small className="text-muted"> velit nostrud aliquip</small>
        </h4>
        <p className="lead text-start">
          Nostrud proident excepteur aute incididunt in nisi fugiat consectetur
          Lorem minim ut. Est cillum deserunt esse velit consequat irure
          exercitation mollit deserunt reprehenderit laborum labore dolore.
          Nulla dolor est amet occaecat. Esse anim anim ullamco ex proident sit
          eiusmod esse eu fugiat esse officia. Culpa aliquip eu et laborum elit
          magna. Reprehenderit mollit aute mollit ea do ea nulla adipisicing
          consectetur velit cillum pariatur sunt.
        </p>
        <p className="lead text-start">
          Laborum culpa cillum ipsum nisi ut amet proident culpa consequat
          pariatur veniam. Aliquip eu qui eiusmod labore deserunt ex incididunt
          qui labore aute. Anim consectetur aliquip enim excepteur.
        </p>
        <Link className="btn btn-primary w-100" to="/shop">
          Browse Shop
        </Link>
      </div>
    </div>
  </div>
)

export default Home
