'use client'

import {
	HeartFilledIcon,
	LetterCaseCapitalizeIcon,
	StarFilledIcon,
} from '@radix-ui/react-icons'

import { Button } from '@/components/Button'
import { revalidateListMovies } from '@/actions/listMovies'

import SortButton from './SortButton'

import type {
	TMoviesListSort,
	TMoviesListSortKey,
	TMoviesListSortValues,
} from '@/types/MovieList'

type Props = {
	page: number
}

const Sort: React.FC<Props> = ({ page }) => {
	const handleClick = (
		key: TMoviesListSortKey,
		value: TMoviesListSortValues,
	) => {
		const newSort = [key, value] as TMoviesListSort
		revalidateListMovies(page, newSort)
	}

	const handleReset = () => {
		const newSort: never[] = []
		revalidateListMovies(page, newSort)
	}

	return (
		<div className="my-4 flex justify-end gap-4">
			<SortButton
				label="Titre"
				icon={<LetterCaseCapitalizeIcon className="text-slate-700" />}
				value="title"
				handleClick={handleClick}
			/>
			<SortButton
				label="Popularité"
				value="popularity"
				icon={<HeartFilledIcon className="text-red-500" />}
				handleClick={handleClick}
			/>
			<SortButton
				label="Votes"
				value="vote_average"
				handleClick={handleClick}
				icon={<StarFilledIcon className="text-yellow-500" />}
			/>
			<Button size="sm" onClick={handleReset}>
				Supprimer les filtres
			</Button>
		</div>
	)
}

export default Sort
