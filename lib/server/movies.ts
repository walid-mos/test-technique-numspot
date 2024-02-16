/* eslint-disable import/prefer-default-export */
import { fetchApi } from '@/functions/fetch'

import type { TMovieList } from '@/types/MovieList'

export const getMoviesList = async (page: number) => {
	const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`
	return fetchApi<TMovieList>(url)
}
