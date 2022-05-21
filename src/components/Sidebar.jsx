import React from 'react'
import placeholderImage from '../assets/logo192.png'

const Sidebar = () => (
  <div
    className="d-flex flex-column flex-shrink-0 p-3 bg-light"
    data-testid="sidebar"
  >
    <h5 className="fs-4 text-center">Sidebar</h5>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#home" />
          </svg>
          Nulla facilisis
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#speedometer2" />
          </svg>
          Etiam elementum
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#table" />
          </svg>
          Cras consequat
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#grid" />
          </svg>
          Lacinia tempor
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#people-circle" />
          </svg>
          Cras tincidunt
        </a>
      </li>
    </ul>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#home" />
          </svg>
          Etiam pulvinar
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#speedometer2" />
          </svg>
          Integer viverra
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#table" />
          </svg>
          Nulla
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#grid" />
          </svg>
          Cras sed
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#people-circle" />
          </svg>
          Praesent sit
        </a>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={placeholderImage}
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>Username</strong>
      </a>
      <ul
        className="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Sidebar
