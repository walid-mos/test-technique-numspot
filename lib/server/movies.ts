/* eslint-disable import/prefer-default-export */
import { buildSearchParams, fetchApi } from '@/functions/fetch'

import type { TMovieList, TMoviesListSort } from '@/types/MovieList'

export const getMoviesList = async (page: number, sortBy: TMoviesListSort) => {
	const searchParams = buildSearchParams(page, sortBy)
	const url = `https://api.themoviedb.org/3/${sortBy.length ? 'discover/movie' : 'movie/popular'}?language=en-US&${searchParams}`
	return fetchApi<TMovieList>(url)
}
