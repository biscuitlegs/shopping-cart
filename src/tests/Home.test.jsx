import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home.jsx'

test('shows a welcome message', () => {
  render(<Home />)

  const message = screen.getByRole('heading')

  expect(message).toBeInTheDocument()
})
