/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Rating from '@/ui/shared/Rating'

describe('Rating', () => {
	it('Success renders ratings', () => {
		render(<Rating rate={5} voters={100} popularity={1000} />)

		const rate = 5 / 2
		expect(screen.getByText(rate.toFixed(2))).toBeInTheDocument()
		expect(screen.getByText(100)).toBeInTheDocument()
		expect(screen.getByText(1000)).toBeInTheDocument()
	})

	it('Success renders ratings with undefined voters', () => {
		render(<Rating rate={5} voters={undefined as any} popularity={1000} />)

		const rate = 5 / 2
		expect(screen.getByText(rate.toFixed(2))).toBeInTheDocument()
		expect(screen.getByText(1000)).toBeInTheDocument()
	})

	it('Success renders ratings with undefined popularity', () => {
		render(<Rating rate={5} voters={100} popularity={undefined as any} />)

		const rate = 5 / 2
		expect(screen.getByText(rate.toFixed(2))).toBeInTheDocument()
		expect(screen.getByText(100)).toBeInTheDocument()
	})

	it('Success renders ratings with undefined rate', () => {
		render(
			<Rating rate={undefined as any} voters={100} popularity={1000} />,
		)

		expect(screen.getByText(100)).toBeInTheDocument()
		expect(screen.getByText(1000)).toBeInTheDocument()
	})
})
