import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'
import userEvent from '@testing-library/user-event'

test('renders h1 element', () => {
	render(<App />)
	expect(screen.getByText(/test/)).toBeInTheDocument()
})

test('increase counter upto 1000', () => {
	render(<App />)
	const counter = screen.getByTestId('counter')
	const btn = screen.getByText('Increment Counter')
	for (let i = 0; i < 1000; i++) {
		userEvent.click(btn)
	}
	expect(counter.textContent).toEqual('1000')
})
