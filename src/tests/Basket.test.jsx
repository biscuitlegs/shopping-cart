import React from 'react'
import { render, screen } from '@testing-library/react'
import Basket from '../components/Basket.jsx'

const mockBasketItems = [
  { id: '123abc', quantity: 5 },
  { id: '456def', quantity: 10 },
  { id: '789ghi', quantity: 15 }
]

const mockStockItems = [
  {
    id: '123abc',
    imagePath: '...',
    name: 'Item 1',
    description: 'This is a mock Item.',
    price: 100000
  },
  {
    id: '456def',
    imagePath: '...',
    name: 'Item 2',
    description: 'This is a mock Item.',
    price: 100
  },
  {
    id: '789ghi',
    imagePath: '...',
    name: 'Item 3',
    description: 'This is a mock Item.',
    price: 10
  }
]

function mockBasketItem() {
  return <h1>Basket Item</h1>
}

const mockUpdateItem = jest.fn()
const mockRemoveItem = jest.fn()
jest.mock('../components/BasketItemCard.jsx', () => mockBasketItem)

test('shows the basket on the screen', () => {
  render(
    <Basket
      stockItems={mockStockItems}
      basketItems={mockBasketItems}
      updateBasketItem={mockUpdateItem}
      removeBasketItem={mockRemoveItem}
    />
  )

  const basket = screen.getByTestId('basket')

  expect(basket).toBeInTheDocument()
})

test('shows the basket title on the screen', () => {
  render(
    <Basket
      stockItems={mockStockItems}
      basketItems={mockBasketItems}
      updateBasketItem={mockUpdateItem}
      removeBasketItem={mockRemoveItem}
    />
  )

  const title = screen.getByText('Basket')

  expect(title).toBeInTheDocument()
})

test('shows the basket cross button on the screen', () => {
  render(
    <Basket
      stockItems={mockStockItems}
      basketItems={mockBasketItems}
      updateBasketItem={mockUpdateItem}
      removeBasketItem={mockRemoveItem}
    />
  )

  const button = screen.getByTestId('basketCross')

  expect(button).toBeInTheDocument()
})

test('shows the basket checkout button on the screen', () => {
  render(
    <Basket
      stockItems={mockStockItems}
      basketItems={mockBasketItems}
      updateBasketItem={mockUpdateItem}
      removeBasketItem={mockRemoveItem}
    />
  )

  const button = screen.getByRole('button', { name: 'Checkout', hidden: true })

  expect(button).toBeInTheDocument()
})

test('shows the empty basket message if there are no items in the basket', () => {
  render(
    <Basket
      stockItems={mockStockItems}
      basketItems={[]}
      updateBasketItem={mockUpdateItem}
      removeBasketItem={mockRemoveItem}
    />
  )

  const message = screen.getByText('No items in the basket.')

  expect(message).toBeInTheDocument()
})

test('shows the items from the basket if they exist', () => {
  render(
    <Basket
      stockItems={mockStockItems}
      basketItems={mockBasketItems}
      updateBasketItem={mockUpdateItem}
      removeBasketItem={mockRemoveItem}
    />
  )

  const basketItems = screen.getAllByText('Basket Item')

  expect(basketItems).toHaveLength(3)
  basketItems.forEach((item) => expect(item).toBeInTheDocument())
})

test('if there are items in the basket shows the total price for all basket items', () => {
  render(
    <Basket
      stockItems={mockStockItems}
      basketItems={mockBasketItems}
      updateBasketItem={mockUpdateItem}
      removeBasketItem={mockRemoveItem}
    />
  )

  const basketTotal = screen.getByTestId('basketTotal')

  expect(basketTotal.textContent).toBe('Basket Total: $501150')
})
