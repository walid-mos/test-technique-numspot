import List from '@/lib/ui/listMovies/List'

type Props = {
	searchParams: {
		page: string
	}
}
const Home: React.FC<Props> = ({ searchParams: { page } }) => {
	const currentPage = Number.parseInt(page, 10) || 1
	return <List currentPage={currentPage} />
}

export default Home
