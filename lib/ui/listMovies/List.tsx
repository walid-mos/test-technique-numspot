import Link from 'next/link'

import { getMoviesList } from '@/server/movies'
import { getGenres } from '@/server/config'

import MovieCard from './MovieCard'
import PaginationComponent from './Pagination'

import type { TMoviesListSort } from '@/types/MovieList'

type Props = {
	currentPage: number
	sortBy: TMoviesListSort
}

const List: React.FC<Props> = async ({ currentPage, sortBy }) => {
	// TODO : Simplify genre function + add promise.all
	const [moviesList, genresConfig] = await Promise.all([
		getMoviesList(currentPage, sortBy),
		getGenres(),
	])

	moviesList.results.forEach(movie => {
		// eslint-disable-next-line no-param-reassign
		movie.genres = genresConfig.genres.filter(({ id }) =>
			movie.genre_ids.includes(id),
		)
	})

	const { results, page } = moviesList
	return (
		<>
			<div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{results.map(movie => (
					<Link key={movie.id} href={`/movies/${movie.id}`}>
						<MovieCard movieData={movie} />
					</Link>
				))}
			</div>
			<div className="mt-6">
				<PaginationComponent page={page} sortBy={sortBy} />
			</div>
		</>
	)
}

export default List
