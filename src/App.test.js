import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App Component', () => {
  it('renders heading correctly', () => {
    render(React.createElement(App))
    const heading = screen.getByText(/Learning CI\/CD with React/i)
    expect(heading).toBeDefined()
  })
})