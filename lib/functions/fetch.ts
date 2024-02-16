/* eslint-disable import/prefer-default-export */
import { notFound } from 'next/navigation'

import { API_TOKEN } from '../constants'

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
