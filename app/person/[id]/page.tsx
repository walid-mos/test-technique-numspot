import { placeholderSVG } from '@/components/Placeholder'
import { getPerson } from '@/server/person'
import LoadImage from '@/ui/shared/LoadImage'

type Props = {
	params: {
		id: number
	}
}

const Person: React.FC<Props> = async ({ params: { id } }) => {
	const personDetails = await getPerson(id)

	return (
		<div className="grid items-start gap-6 py-6 md:grid-cols-2 lg:gap-12">
			<div className="mr-12 hidden items-start md:flex">
				<LoadImage
					type="person"
					name={personDetails.name}
					path={personDetails.profile_path}
					width={500}
					height={750}
					className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover "
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					placeholder={`data:image/svg+xml;base64, ${Buffer.from(placeholderSVG).toString('base64')}`}
				/>
			</div>
			<div className="flex h-full flex-col justify-between gap-4">
				<div className="flex items-start">
					<div className="grid gap-4">
						<h1 className="text-3xl font-bold lg:text-5xl">
							{personDetails.name}
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Person
