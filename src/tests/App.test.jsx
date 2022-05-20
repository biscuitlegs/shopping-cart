import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../components/App.jsx'

function mockHome() {
  return <h1>Home page loaded</h1>
}

function mockShop() {
  return <h1>Shop page loaded</h1>
}

jest.mock('../components/Home.jsx', () => mockHome)
jest.mock('../components/Shop.jsx', () => mockShop)

test('renders the home page at root', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  const homeHeading = screen.getByRole('heading', {
    name: 'Home page loaded'
  })

  expect(homeHeading).toBeInTheDocument()
})

test('renders the shop page when the shop link is clicked', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  act(() => {
    const shopLink = screen.getByRole('link', {
      name: 'Shop'
    })
    userEvent.click(shopLink)
  })

  const shopHeading = screen.getByRole('heading', {
    name: 'Shop page loaded'
  })

  expect(shopHeading).toBeInTheDocument()
})

test('renders the home page when the home link is clicked', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  )

  act(() => {
    const homeLink = screen.getByRole('link', {
      name: 'Home'
    })
    userEvent.click(homeLink)
  })

  const homeHeading = screen.getByRole('heading', {
    name: 'Home page loaded'
  })

  expect(homeHeading).toBeInTheDocument()
})

test('renders the home page when the brand link is clicked', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  )

  act(() => {
    const brandLink = screen.getByRole('link', {
      name: 'React Shop'
    })
    userEvent.click(brandLink)
  })

  const homeHeading = screen.getByRole('heading', {
    name: 'Home page loaded'
  })

  expect(homeHeading).toBeInTheDocument()
})

test('shows the basket when the basket button is clicked', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  )

  act(() => {
    const basketButton = screen.getByRole('button', {
      name: /Basket/
    })
    userEvent.click(basketButton)
  })

  const basket = screen.getByTestId('basket')

  expect(basket).toBeInTheDocument()
})
