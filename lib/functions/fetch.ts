/* eslint-disable import/prefer-default-export */
import { notFound } from 'next/navigation'

import { API_TOKEN, authorizedSort, authorizedSortType } from '../constants'

import type { TMoviesListSort } from '@/types/MovieList'

const options = {
	method: 'GET',
	next: {
		revalidate: 3600,
	},
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${API_TOKEN}`,
	},
}

export const fetchApi = async <T>(url: string) => {
	const res = await fetch(url, options)

	if (!res.ok) {
		return notFound()
	}

	const data: T = await res.json()

	return data
}

export const buildSearchParams = (page: number, sortBy: TMoviesListSort) => {
	const pageString = page ? `page=${page}` : `page=1`
	if (!sortBy.length) return pageString

	const sortByString = `sort_by=${sortBy.join('.')}`

	return `${pageString}&${sortByString}`
}

export const parseSortBy = (sort: string) => {
	if (!sort) return []
	const sortedArray = sort.split('.')
	if (
		!authorizedSort.some(s => s === sortedArray[0]) ||
		!authorizedSortType.some(s => s === sortedArray[1])
	)
		return []
	return sortedArray as TMoviesListSort
}
