/* eslint-disable camelcase */
import { parseSortBy } from '@/functions/fetch'
import List from '@/ui/listMovies/List'
import Sort from '@/ui/listMovies/Sort'

type Props = {
	searchParams: {
		page: string
		sort_by: string
	}
}

const Home: React.FC<Props> = ({ searchParams: { page, sort_by } }) => {
	const currentPage = Number.parseInt(page, 10) || 1
	const sortBy = parseSortBy(sort_by)

	return (
		<>
			<h3 className="text-xl font-bold text-slate-800">
				Les plus populaires
			</h3>
			<Sort page={currentPage} />
			<List currentPage={currentPage} sortBy={sortBy} />
		</>
	)
}

export default Home
