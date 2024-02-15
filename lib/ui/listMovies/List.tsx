import { notFound } from 'next/navigation'

import { API_TOKEN } from '@/lib/constants'

import MovieCard from './MovieCard'
import { TMovieList } from '@/lib/types/MovieList'
import { TGenres, TMDBConfig } from '@/lib/types/Config'
import Link from 'next/link'

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${API_TOKEN}`,
	},
}

const getImageConfiguration = async () => {
	const url = 'https://api.themoviedb.org/3/configuration'
	const res = await fetch(url, options)
	const data: TMDBConfig = await res.json()

	if (!res.ok) {
		return notFound()
	}
	return data
}

const getGenres = async () => {
	const url = 'https://api.themoviedb.org/3/genre/movie/list'
	const res = await fetch(url, options)
	const data: TGenres = await res.json()

	if (!res.ok) {
		return notFound()
	}
	return data
}

const getMoviesList = async () => {
	const url =
		'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
	const res = await fetch(url, options)

	if (!res.ok) {
		return notFound()
	}

	const data: TMovieList = await res.json()

	// Uneven data sent -- data.result if success / data.success === false if failed fetch

	return data
}

const List = async () => {
	// TODO : Simplify genre function + add promise.all
	const listData = await getMoviesList()
	const { images: imagesConfig } = await getImageConfiguration()
	const { genres } = await getGenres()

	listData.results.forEach(
		movie =>
			(movie.genres = genres.filter(({ id }) =>
				movie.genre_ids.includes(id),
			)),
	)

	console.log(listData.results[0])

	const { results, page, total_results, total_pages } = listData
	return (
		<div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			{results.map(movie => {
				return (
					<Link key={movie.id} href={'/test'}>
						<MovieCard
							movieData={movie}
							imageConfig={imagesConfig}
						/>
					</Link>
				)
			})}
		</div>
	)
}

export default List
