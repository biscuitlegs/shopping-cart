import React from 'react'
import { render, screen } from '@testing-library/react'
import uniqid from 'uniqid'
import ShopItemCard from '../components/ShopItemCard.jsx'
import placeholderImage from '../assets/logo192.png'

const addItemMock = jest.fn()

test("shows the item's image", () => {
  render(
    <ShopItemCard
      id={uniqid()}
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
      addBasketItem={addItemMock}
    />
  )

  const image = screen.getByRole('img')

  expect(image).toBeInTheDocument()
})

test("shows the item's name", () => {
  render(
    <ShopItemCard
      id={uniqid()}
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
      addBasketItem={addItemMock}
    />
  )

  const name = screen.getByRole('heading', { name: 'Test Item' })

  expect(name).toBeInTheDocument()
})

test("shows the item's description", () => {
  render(
    <ShopItemCard
      id={uniqid()}
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
      addBasketItem={addItemMock}
    />
  )

  const description = screen.getByText('A test item.')

  expect(description).toBeInTheDocument()
})

test("shows the item's button with it's price", () => {
  render(
    <ShopItemCard
      id={uniqid()}
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
      addBasketItem={addItemMock}
    />
  )

  const button = screen.getByRole('button', /100/)

  expect(button).toBeInTheDocument()
})
