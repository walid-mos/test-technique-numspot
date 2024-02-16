import { fetchApi } from '@/functions/fetch'

import type { TGenres, TMDBConfig } from '@/types/Config'

export const getImageConfiguration = async () => {
	const url = 'https://api.themoviedb.org/3/configuration'
	return fetchApi<TMDBConfig>(url)
}

export const getGenres = async () => {
	const url = 'https://api.themoviedb.org/3/genre/movie/list'
	return fetchApi<TGenres>(url)
}
