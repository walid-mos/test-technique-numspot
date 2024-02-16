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

const DEFAULT_LAST_PAGE = 500

const PaginationComponent: React.FC<Props> = async ({ page, sortBy }) => {
	const isFirstPage = page === 1
	const isLastPage = page === DEFAULT_LAST_PAGE

	const getHref = (nextPage: TMovieList['page']) =>
		`/?${buildSearchParams(nextPage, sortBy)}`

	return (
		<Pagination className="justify-end">
			<PaginationContent>
				{isFirstPage ? (
					''
				) : (
					<>
						<PaginationItem>
							<ButtonWithLink href={getHref(1)} variant="outline">
								Début
							</ButtonWithLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious href={getHref(page - 1)} />
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
							<PaginationNext href={getHref(page + 1)} />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								className="w-16"
								href={getHref(DEFAULT_LAST_PAGE)}>
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
