import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const currentPath = useLocation().pathname

  const setLinksInactive = (links) => {
    links.forEach((link) => {
      link.classList.remove('active')
      link.removeAttribute('aria-current')
    })
  }

  const setLinkActive = (link) => {
    link.classList.add('active')
    link.setAttribute('aria-current', 'page')
  }

  useEffect(() => {
    const homeLink = document.querySelector('a[href="/"].nav-link')
    const shopLink = document.querySelector('a[href="/shop"].nav-link')
    setLinksInactive([homeLink, shopLink])
    switch (true) {
      case currentPath === '/':
        setLinkActive(homeLink)
        break
      case currentPath === '/shop':
        setLinkActive(shopLink)
        break
      default:
        break
    }
  })

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
