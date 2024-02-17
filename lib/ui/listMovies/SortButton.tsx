import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/Button'

import type {
	TMoviesListSortKey,
	TMoviesListSortValues,
} from '@/types/MovieList'

type Props = {
	label: string
	value: TMoviesListSortKey
	icon: React.ReactNode
	handleClick: (key: TMoviesListSortKey, value: TMoviesListSortValues) => void
}

const SortButton: React.FC<Props> = ({ label, value, icon, handleClick }) => (
	<div className="inline-flex h-8 rounded-md text-xs shadow-sm" role="group">
		<div className="flex justify-between gap-2 rounded-none rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-xs text-gray-900">
			{icon}
			{label}
		</div>
		<Button
			type="button"
			size="sm"
			onClick={() => handleClick(value, 'asc')}
			className="rounded-none border-b border-t border-gray-200 bg-white px-2 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 ">
			<ArrowUpIcon />
		</Button>
		<Button
			type="button"
			size="sm"
			onClick={() => handleClick(value, 'desc')}
			className="rounded-none rounded-e-lg border border-gray-200 bg-white px-2 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 ">
			<ArrowDownIcon />
		</Button>
	</div>
)

export default SortButton
