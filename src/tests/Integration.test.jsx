import React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import App from '../components/App.jsx'

test('user can add an item to the basket using the shop', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  )

  const grid = screen.getByTestId('grid')
  const shopItem = grid.childNodes[0].childNodes[0]
  const shopItemName = within(shopItem).getByRole('heading')

  act(() => {
    const shopItemQuantityInput = within(shopItem).getByRole('spinbutton')
    userEvent.clear(shopItemQuantityInput)
    userEvent.type(shopItemQuantityInput, '5')
    const shopItemButton = within(shopItem).getByRole('button')
    userEvent.click(shopItemButton)
  })

  const basketItems = screen.getByTestId('basketItems')
  const basketItemName = within(basketItems).getByRole('heading', {
    hidden: true
  })
  const basketItemQuantity = within(basketItems).getByRole('spinbutton', {
    hidden: true
  })

  expect(basketItems.childNodes).toHaveLength(1)
  expect(shopItemName.textContent).toEqual(basketItemName.textContent)
  expect(basketItemQuantity.value).toBe('5')
})

test("user can change an item's quantity in the basket, which is retained between renders", () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  )

  act(() => {
    const grid = screen.getByTestId('grid')
    const shopItem = grid.childNodes[0].childNodes[0]
    const shopItemButton = within(shopItem).getByRole('button')
    const shopItemQuantityInput = within(shopItem).getByRole('spinbutton')
    userEvent.clear(shopItemQuantityInput)
    userEvent.type(shopItemQuantityInput, '5')
    userEvent.click(shopItemButton)
  })

  const basketItems = screen.getByTestId('basketItems')
  const basketItemQuantity = within(basketItems).getByRole('spinbutton', {
    hidden: true
  })

  expect(basketItemQuantity.value).toBe('5')

  act(() => {
    userEvent.clear(basketItemQuantity)
    userEvent.type(basketItemQuantity, '23')
  })

  expect(basketItemQuantity.value).toBe('23')
})

test("if an item is already in the basket, adding the same item to the basket will increase it's quantity", () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  )

  act(() => {
    const grid = screen.getByTestId('grid')
    const shopItem = grid.childNodes[0].childNodes[0]
    const shopItemButton = within(shopItem).getByRole('button')
    const shopItemQuantityInput = within(shopItem).getByRole('spinbutton')
    userEvent.clear(shopItemQuantityInput)
    userEvent.type(shopItemQuantityInput, '5')
    userEvent.click(shopItemButton)
  })

  act(() => {
    const grid = screen.getByTestId('grid')
    const shopItem = grid.childNodes[0].childNodes[0]
    const shopItemButton = within(shopItem).getByRole('button')
    const shopItemQuantityInput = within(shopItem).getByRole('spinbutton')
    userEvent.clear(shopItemQuantityInput)
    userEvent.type(shopItemQuantityInput, '10')
    userEvent.click(shopItemButton)
  })

  const basketItems = screen.getByTestId('basketItems')
  const basketItemQuantity = within(basketItems).getByRole('spinbutton', {
    hidden: true
  })

  expect(basketItemQuantity.value).toBe('15')
})

test('user can remove an item from the basket', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  )

  act(() => {
    const grid = screen.getByTestId('grid')
    const shopItem = grid.childNodes[0].childNodes[0]
    const shopItemButton = within(shopItem).getByRole('button')
    const shopItemQuantityInput = within(shopItem).getByRole('spinbutton')
    userEvent.clear(shopItemQuantityInput)
    userEvent.type(shopItemQuantityInput, '5')
    userEvent.click(shopItemButton)
  })

  const basketItems = screen.getByTestId('basketItems')

  expect(basketItems.childNodes).toHaveLength(1)

  act(() => {
    const removeItemButton = screen.getByRole('button', {
      name: /Remove/,
      hidden: true
    })
    userEvent.click(removeItemButton)
  })

  expect(basketItems.childNodes).toHaveLength(1)
})

test('clicking the home shop link opens the shop', () => {
  render(
    <MemoryRouter>
      (<App />)
    </MemoryRouter>
  )

  const homeShopLink = screen.getByRole('link', { name: 'Browse Shop' })

  act(() => {
    userEvent.click(homeShopLink)
  })

  const shopHeading = screen.getByRole('heading', { name: 'Catalog' })

  expect(shopHeading).toBeInTheDocument()
})
