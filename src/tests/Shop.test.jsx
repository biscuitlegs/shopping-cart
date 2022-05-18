import React from 'react'
import { render, screen } from '@testing-library/react'
import Shop from '../components/Shop.jsx'
import ShopItemCard from '../components/ShopItemCard.jsx'

function mockItem() {
  return <p>Mock Item</p>
}

jest.mock('../components/Item.jsx', () => mockItem)

const mockItems = [
  <ShopItemCard key={1} />,
  <ShopItemCard key={2} />,
  <ShopItemCard key={3} />
]

test('shows a welcome message', () => {
  render(<Shop items={mockItems} />)

  const message = screen.getByRole('heading')

  expect(message).toBeInTheDocument()
})

test('shows items in the shop', () => {
  render(<Shop items={mockItems} />)

  const grid = screen.getByTestId('grid')
  const shopItems = screen.getAllByText('Mock Item')

  expect(grid.childNodes).toHaveLength(3)
  expect(shopItems).toHaveLength(3)
  shopItems.forEach((item) => expect(item).toBeInTheDocument())
})
