/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @jest-environment node
 */
import { getMoviesList } from '@/server/movies'

import moviesData from '../data/movies-popular.json'

const mockFn = jest.fn()
global.fetch = mockFn.mockImplementation(
	(url: string) =>
		new Promise(resolve => {
			const { searchParams } = new URL(url)
			process.nextTick(() => {
				const res = moviesData.find(
					v =>
						v.page ===
						Number.parseInt(searchParams.get('page') as string, 10),
				)
				if (!res) return resolve({ ok: false })

				return resolve({
					json: () => res,
					ok: true,
				})
			})
		}),
)

beforeEach(() => {
	jest.clearAllMocks()
})

describe('Server/Movies', () => {
	it('Succes to fetch movie list', async () => {
		const moviesList = await getMoviesList(3)

		expect(moviesList.page).toBe(3)
		expect(moviesList.results.length).toBeTruthy()
	})
	it('Fail to fetch movie list', async () =>
		getMoviesList(501).catch(e => expect(e).not.toBeNull()))
})
