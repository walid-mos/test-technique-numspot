import { TGenres } from './Config'

export type TMovie = {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	genres?: Array<TGenres['genres'][number]>
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export type TMovieList = {
	page: number
	results: TMovie[]
	total_pages: number
	total_results: number
}
