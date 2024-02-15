import { notFound } from 'next/navigation'

import { API_TOKEN } from '@/lib/constants'

import MovieCard from './MovieCard'
import { ApiResponse } from '@/lib/types/MovieList'

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${API_TOKEN}`,
	},
}

const getMoviesList = async () => {
	const res = await fetch(url, options)
	const data: ApiResponse = await res.json()

	// Uneven data sent -- data.result if success / data.success === false if failed fetch
	if (!data.results || data.success === false) {
		return notFound()
	}

	return data
}

const List = async () => {
	const data = await getMoviesList()

	const { results, page, total_results, total_pages } = data
	return (
		<div className="grid grid-cols-3">
			{results.map(result => {
				return <MovieCard key={result.id} />
			})}
		</div>
	)
}

export default List
