import React from 'react'
import { render, screen } from '@testing-library/react'
import Sidebar from '../components/Sidebar.jsx'

test('shows a heading', () => {
  render(<Sidebar />)

  const heading = screen.getByRole('heading')

  expect(heading).toBeInTheDocument()
})

test('shows links', () => {
  render(<Sidebar />)

  const links = screen.getAllByRole('link')

  expect(links).toHaveLength(14)
})
