/* eslint-disable import/prefer-default-export */
import { buildSearchParams, fetchApi } from '@/functions/fetch'

import { API_KEY } from '../constants'

import type { TMovieDetails } from '@/types/Movie'
import type { TMovieList, TMoviesListSort } from '@/types/MovieList'

export const getMoviesList = async (page: number, sortBy: TMoviesListSort) => {
	const searchParams = buildSearchParams(page, sortBy)
	const url = `https://api.themoviedb.org/3/${sortBy.length ? 'discover/movie' : 'movie/popular'}?language=fr-FR&${searchParams}`
	return fetchApi<TMovieList>(url)
}

export const getMovie = async (movieId: number) => {
	const url = `https://api.themoviedb.org/3/movie/${movieId}?language=fr-FR&api_key=${API_KEY}&append_to_response=keywords,alternative_titles,changes,credits,images,keywords,lists,releases,reviews,similar,translations,videos`

	return fetchApi<TMovieDetails>(url)
}
