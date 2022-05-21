import React from 'react'
import { render, screen } from '@testing-library/react'
import Shop from '../components/Shop.jsx'

function mockItem() {
  return <p>Mock Item</p>
}

jest.mock('../components/ShopItemCard.jsx', () => mockItem)
const addItemMock = jest.fn()

const mockItems = [
  {
    id: 'asd2321',
    name: 'Item 1',
    imagePath: '...',
    description: 'A mock item.',
    price: 10,
    quantity: 5
  },
  {
    id: 'asd2sdf1',
    name: 'Item 2',
    imagePath: '...',
    description: 'A mock item.',
    price: 15,
    quantity: 2
  },
  {
    id: 'asd23d321',
    name: 'Item 3',
    imagePath: '...',
    description: 'A mock item.',
    price: 20,
    quantity: 17
  }
]

test('shows a welcome message', () => {
  render(<Shop stockItems={mockItems} addBasketItem={addItemMock} />)

  const message = screen.getByRole('heading', { name: 'Catalog' })

  expect(message).toBeInTheDocument()
})

test('shows items in the shop', () => {
  render(<Shop stockItems={mockItems} addBasketItem={addItemMock} />)

  const grid = screen.getByTestId('grid')
  const shopItems = screen.getAllByText('Mock Item')

  expect(grid.childNodes).toHaveLength(3)
  expect(shopItems).toHaveLength(3)
  shopItems.forEach((item) => expect(item).toBeInTheDocument())
})

test('shows a sidebar', () => {
  render(<Shop stockItems={mockItems} addBasketItem={addItemMock} />)

  const sidebar = screen.getByTestId('sidebar')

  expect(sidebar).toBeInTheDocument()
})
