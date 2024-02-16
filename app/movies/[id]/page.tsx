import Image from 'next/image'

import { HeartFilledIcon } from '@radix-ui/react-icons'

import { posterUrlBuilder } from '@/functions/fetch'
import { getImageConfiguration } from '@/server/config'
import { placeholderSVG } from '@/components/Placeholder'
import Rating from '@/ui/shared/Rating'
import Credits from '@/ui/movie/Credits'
import { Badge } from '@/components/Badge'
import { getMovie } from '@/server/movies'

type Props = {
	params: {
		id: number
	}
}

const Movie: React.FC<Props> = async ({ params: { id } }) => {
	const [movieDetails, imageConfig] = await Promise.all([
		getMovie(id),
		getImageConfiguration(),
	])

	const src = posterUrlBuilder(
		imageConfig.images.base_url,
		'original',
		movieDetails.poster_path,
	)

	return (
		<div className="grid items-start gap-6 py-6 md:grid-cols-2 lg:gap-12">
			<div className="mr-4 hidden items-start md:flex">
				<Image
					src={src}
					alt={`Movie ${movieDetails.title} poster`}
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
							{movieDetails.title}
						</h1>
						<div>
							<p>{movieDetails.overview}</p>
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
				<Credits
					movieId={movieDetails.id}
					imageConfig={imageConfig.images}
				/>
			</div>
		</div>
	)
}

export default Movie
