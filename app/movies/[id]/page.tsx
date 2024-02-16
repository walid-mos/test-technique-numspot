import { HeartFilledIcon } from '@radix-ui/react-icons'

import Rating from '@/ui/shared/Rating'
import Credits from '@/ui/movie/Credits'
import { Badge } from '@/components/Badge'
import { getMovie } from '@/server/movies'
import LoadImage from '@/ui/shared/LoadImage'

type Props = {
	params: {
		id: number
	}
}

const Movie: React.FC<Props> = async ({ params: { id } }) => {
	const movieDetails = await getMovie(id)

	return (
		<div className="grid items-start gap-6 py-6 md:grid-cols-2 lg:gap-12">
			<div className="mr-4 hidden items-start md:flex">
				<LoadImage
					type="movie"
					path={movieDetails.poster_path}
					size="original"
					width={500}
					height={750}
					name={movieDetails.title}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover "
				/>
			</div>
			<div className="flex h-full flex-col justify-between gap-4">
				<div className="flex items-start">
					<div className="grid gap-4">
						<h1 className="text-3xl font-bold lg:text-5xl">
							{movieDetails.title}
						</h1>
						<div>
							<p>
								{movieDetails.overview
									? movieDetails.overview
									: 'Aucune informations disponible sur ce titre'}
							</p>
						</div>
						<div className="flex gap-2">
							{movieDetails.genres.map(genre => (
								<Badge key={genre.id} variant="outline">
									{genre.name}
								</Badge>
							))}
						</div>
						<div className="grid gap-4">
							<Rating
								rate={movieDetails.vote_average}
								voters={movieDetails.vote_count}
							/>
							<div className="flex items-center gap-2 text-xs">
								<HeartFilledIcon className="text-red-400" />
								<div className="font-bold text-muted-foreground">
									{movieDetails.popularity.toFixed(1)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Credits movieId={movieDetails.id} />
			</div>
		</div>
	)
}

export default Movie
