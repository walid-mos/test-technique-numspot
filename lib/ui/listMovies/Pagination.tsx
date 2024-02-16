import Link from 'next/link'

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/Pagination'
import { buildSearchParams } from '@/functions/fetch'
import { ButtonWithLink } from '@/components/Button'

import type { TMovieList, TMoviesListSort } from '@/types/MovieList'

type Props = {
	page: TMovieList['page']
	sortBy: TMoviesListSort
}

const LAST_PAGE = 500

const PaginationComponent: React.FC<Props> = async ({ page, sortBy }) => {
	const isFirstPage = page === 1
	const isLastPage = page === LAST_PAGE

	const href = (nextPage: TMovieList['page']) => {
		const v = `/?${buildSearchParams(nextPage, sortBy)}`

		console.log({ v })
		return v
	}

	return (
		<Pagination className="justify-end">
			<PaginationContent>
				{isFirstPage ? (
					''
				) : (
					<>
						<PaginationItem>
							<ButtonWithLink href={href(1)} variant="outline">
								Début
							</ButtonWithLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious href={href(page - 1)} />
						</PaginationItem>
					</>
				)}
				<PaginationItem>
					<PaginationLink href="#" isActive>
						{page}
					</PaginationLink>
				</PaginationItem>
				{isLastPage ? (
					''
				) : (
					<>
						<PaginationItem>
							<PaginationNext href={href(page + 1)} />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								className="w-16"
								href={href(LAST_PAGE)}>
								Fin
							</PaginationLink>
						</PaginationItem>
					</>
				)}
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationComponent
