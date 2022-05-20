import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

// We test the actual navigation functionality in 'App.test.jsx'
// because the routes are in the App component rather than here

test('shows a navbar on the screen', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const nav = screen.getByRole('navigation')

  expect(nav).toBeInTheDocument()
})

test('shows a brand link in the navbar', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const brandLink = screen.getByRole('link', { name: 'React Shop' })

  expect(brandLink).toBeInTheDocument()
})

test('shows a home link in the navbar', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const homeLink = screen.getByRole('link', { name: 'Home' })

  expect(homeLink).toBeInTheDocument()
})

test('shows a shop link in the navbar', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const shopLink = screen.getByRole('link', { name: 'Shop' })

  expect(shopLink).toBeInTheDocument()
})

test('shows a basket button in the navbar', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const button = screen.getByRole('button', { name: /Basket/ })

  expect(button).toBeInTheDocument()
})
