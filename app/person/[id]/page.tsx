import { HeartFilledIcon } from '@radix-ui/react-icons'

import { ButtonWithLink } from '@/components/Button'
import { placeholderSVG } from '@/components/Placeholder'
import { getPerson } from '@/server/person'
import Credits from '@/ui/person/Credits'
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
			<div className="mr-4 hidden items-start md:flex">
				<LoadImage
					type="person"
					name={personDetails.name}
					path={personDetails.profile_path}
					width={500}
					priority
					height={750}
					className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover "
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					placeholder={`data:image/svg+xml;base64, ${Buffer.from(placeholderSVG).toString('base64')}`}
				/>
			</div>
			<div className="flex h-full flex-col justify-between gap-4">
				<div className="flex items-start">
					<div className="grid gap-4">
						<h4 className="text-lg font-extrabold text-muted-foreground">
							{personDetails.gender === 2 ? 'Acteur' : 'Actrice'}
						</h4>
						<h1 className="text-3xl font-bold lg:text-5xl">
							{personDetails.name}
						</h1>
						<div>
							<p className="text-sm text-slate-700">
								{personDetails.biography
									? personDetails.biography
									: 'Aucune informations disponible sur cette personne'}
							</p>
						</div>
						<div className="flex items-center gap-2 text-xs">
							<HeartFilledIcon className="text-red-400" />
							<div className="font-bold text-muted-foreground">
								{personDetails.popularity.toFixed(1)}
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="mb-4 flex flex-col gap-2">
						{personDetails.imdb_id ? (
							<ButtonWithLink
								variant="outline"
								href={`https://www.imdb.com/title/${personDetails.imdb_id}`}>
								Voir les infos du film sur IMDB
							</ButtonWithLink>
						) : null}
					</div>
					<Credits movieCredits={personDetails.movie_credits} />
				</div>
			</div>
		</div>
	)
}

export default Person
