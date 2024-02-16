/* eslint-disable import/prefer-default-export */
import { fetchApi } from '@/functions/fetch'

import { API_KEY } from '../constants'

import type { TPerson } from '@/types/Person'

export const getPerson = async (personId: number) => {
	const url = `https://api.themoviedb.org/3/person/${personId}?language=fr-FR&api_key=${API_KEY}&append_to_response=movie_credits%2Cimages`

	return fetchApi<TPerson>(url)
}
