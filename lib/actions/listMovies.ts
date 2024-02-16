/* eslint-disable import/prefer-default-export */

'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { buildSearchParams } from '@/functions/fetch'

import type { TMoviesListSort } from '@/types/MovieList'

export const revalidateListMovies = (
	page: number,
	nextSort: TMoviesListSort,
) => {
	const searchParams = buildSearchParams(page, nextSort)
	revalidatePath('/')
	return redirect(`/?${searchParams}`)
}
