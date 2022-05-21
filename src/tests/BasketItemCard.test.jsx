import React from 'react'
import { render, screen } from '@testing-library/react'
import BasketItemCard from '../components/BasketItemCard.jsx'

const updateItemMock = jest.fn()
const removeItemMock = jest.fn()

test('shows the item name on the screen', () => {
  render(
    <BasketItemCard
      id="1"
      imagePath="..."
      name="Test Item"
      description="An item for testing."
      quantity={1}
      updateBasketItem={updateItemMock}
      removeBasketItem={removeItemMock}
    />
  )

  const name = screen.getByRole('heading', { name: 'Test Item' })

  expect(name).toBeInTheDocument()
})

test('shows the description name on the screen', () => {
  render(
    <BasketItemCard
      id="1"
      imagePath="..."
      name="Test Item"
      description="An item for testing."
      quantity={1}
      updateBasketItem={updateItemMock}
      removeBasketItem={removeItemMock}
    />
  )

  const description = screen.getByText('An item for testing.')

  expect(description).toBeInTheDocument()
})

test('shows the quantity input label on the screen', () => {
  render(
    <BasketItemCard
      id="1"
      imagePath="..."
      name="Test Item"
      description="An item for testing."
      quantity={1}
      updateBasketItem={updateItemMock}
      removeBasketItem={removeItemMock}
    />
  )

  const label = screen.getByText('Quantity')

  expect(label).toBeInTheDocument()
})

test('shows the quantity input on the screen', () => {
  render(
    <BasketItemCard
      id="1"
      imagePath="..."
      name="Test Item"
      description="An item for testing."
      quantity={1}
      updateBasketItem={updateItemMock}
      removeBasketItem={removeItemMock}
    />
  )

  const input = screen.getByRole('spinbutton')

  expect(input).toBeInTheDocument()
})
