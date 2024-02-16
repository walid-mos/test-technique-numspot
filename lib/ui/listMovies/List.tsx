import Link from 'next/link'

import { getMoviesList } from '@/lib/server/movies'
import { getGenres, getImageConfiguration } from '@/lib/server/config'

import MovieCard from './MovieCard'
import PaginationComponent from './Pagination'

type Props = {
	currentPage: number
}

const List: React.FC<Props> = async ({ currentPage }) => {
	// TODO : Simplify genre function + add promise.all
	const [moviesList, imagesConfig, genresConfig] = await Promise.all([
		getMoviesList(currentPage),
		getImageConfiguration(),
		getGenres(),
	])

	moviesList.results.forEach(movie => {
		// eslint-disable-next-line no-param-reassign
		movie.genres = genresConfig.genres.filter(({ id }) =>
			movie.genre_ids.includes(id),
		)
	})

	const { results, page, total_results: totalResults } = moviesList
	return (
		<>
			<div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{results.map(movie => (
					<Link key={movie.id} href="/test">
						<MovieCard
							movieData={movie}
							imageConfig={imagesConfig.images}
						/>
					</Link>
				))}
			</div>
			<div className="mt-6">
				<PaginationComponent page={page} />
			</div>
		</>
	)
}

export default List
