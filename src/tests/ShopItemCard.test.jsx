import React from 'react'
import { render, screen } from '@testing-library/react'
import ShopItemCard from '../components/ShopItemCard.jsx'
import placeholderImage from '../assets/logo192.png'

test("shows the item's image", () => {
  render(
    <ShopItemCard
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
    />
  )

  const image = screen.getByRole('img')

  expect(image).toBeInTheDocument()
})

test("shows the item's name", () => {
  render(
    <ShopItemCard
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
    />
  )

  const name = screen.getByRole('heading', { name: 'Test Item' })

  expect(name).toBeInTheDocument()
})

test("shows the item's description", () => {
  render(
    <ShopItemCard
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
    />
  )

  const description = screen.getByText('A test item.')

  expect(description).toBeInTheDocument()
})

test("shows the item's button with it's price", () => {
  render(
    <ShopItemCard
      imagePath={placeholderImage}
      name={'Test Item'}
      description={'A test item.'}
      price={100}
    />
  )

  const button = screen.getByRole('link', /100/)

  expect(button).toBeInTheDocument()
})
