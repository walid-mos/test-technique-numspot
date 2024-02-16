import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/lib/components/Pagination'

import type { TMovieList } from '@/lib/types/MovieList'

type Props = {
	page: TMovieList['page']
}

const LAST_PAGE = 500

const PaginationComponent: React.FC<Props> = async ({ page }) => {
	const isFirstPage = page === 1
	const isLastPage = page === LAST_PAGE
	return (
		<Pagination className="justify-end">
			<PaginationContent>
				{isFirstPage ? (
					''
				) : (
					<>
						<PaginationItem>
							<PaginationLink className="w-16" href="/?page=1">
								Début
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious href={`/?page=${page - 1}`} />
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
							<PaginationNext href={`/?page=${page + 1}`} />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								className="w-16"
								href={`/?page=${LAST_PAGE}`}>
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
