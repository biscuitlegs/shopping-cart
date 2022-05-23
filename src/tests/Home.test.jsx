import React from 'react'
import { render, screen, within } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Home from '../components/Home.jsx'

test('shows a welcome message', () => {
  render(
    <MemoryRouter>
      (<Home />)
    </MemoryRouter>
  )

  const message = screen.getByRole('heading', { name: /Welcome/ })

  expect(message).toBeInTheDocument()
})

test('shows a hero image', () => {
  render(
    <MemoryRouter>
      (<Home />)
    </MemoryRouter>
  )

  const content = screen.getByTestId('homeContent')
  const image = within(content).getByRole('img')

  expect(image).toBeInTheDocument()
})

test('shows sub heading', () => {
  render(
    <MemoryRouter>
      (<Home />)
    </MemoryRouter>
  )

  const content = screen.getByTestId('homeContent')
  const subHeading = within(content).getByRole('heading')

  expect(subHeading).toBeInTheDocument()
})

test('shows paragraphs', () => {
  render(
    <MemoryRouter>
      (<Home />)
    </MemoryRouter>
  )

  const content = screen.getByTestId('homeContent')
  const paragraph1 = within(content).getByText(/Nostrud proident excepteur/)
  const paragraph2 = within(content).getByText(/Laborum culpa cillum/)
  expect(paragraph1).toBeInTheDocument()
  expect(paragraph2).toBeInTheDocument()
})

test('shows a link that opens the shop', () => {
  render(
    <MemoryRouter>
      (<Home />)
    </MemoryRouter>
  )

  const link = screen.getByRole('link')

  expect(link).toBeInTheDocument()
})

test('renders home correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
