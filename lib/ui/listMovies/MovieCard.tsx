import Image from 'next/image'

import { cn } from '@/functions/classnames'
import { Card, CardContent, CardFooter } from '@/components/Card'
import { placeholderSVG } from '@/components/Placeholder'
import { posterUrlBuilder } from '@/functions/fetch'

import Rating from './Rating'

import type { ImageConfigurations } from '@/types/Config'
import type { TMovie } from '@/types/MovieList'

type CardProps = React.ComponentProps<typeof Card> & {
	movieData: TMovie
	imageConfig: ImageConfigurations
}

const MovieCard = async ({
	movieData,
	imageConfig,
	className,
	...props
}: CardProps) => {
	const src = posterUrlBuilder(
		imageConfig.base_url,
		'w185',
		movieData.poster_path,
	)

	return (
		<Card
			className={cn(
				'w-full transition-all hover:scale-105 hover:bg-secondary hover:shadow-secondary-foreground',
				className,
			)}
			{...props}>
			<CardContent className="relative block h-72 object-contain px-0 py-2">
				<Image
					src={src}
					alt={`Movie ${movieData.title} poster`}
					className="rounded-t-lg "
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					placeholder={`data:image/svg+xml;base64, ${Buffer.from(placeholderSVG).toString('base64')}`}
					fill
				/>
			</CardContent>
			<CardFooter>
				<div className="grid flex-1 gap-2">
					<h3 className="line-clamp-2 h-14 pt-2 text-base font-semibold">
						{movieData.title}
					</h3>
					<div className="flex items-center justify-between gap-2">
						<div>
							<p className="h-9 overflow-scroll text-xs text-gray-500">
								{movieData.genres
									?.map(({ name }) => name)
									.join(' ')}
							</p>
						</div>
						<div className="w-2/3">
							<Rating
								rate={movieData.vote_average}
								voters={movieData.vote_count}
							/>
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}
export default MovieCard
