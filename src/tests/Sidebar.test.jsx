import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
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

test('renders sidebar correctly', () => {
  const tree = renderer.create(<Sidebar />).toJSON()

  expect(tree).toMatchSnapshot()
})
