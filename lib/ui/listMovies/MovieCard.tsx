import Image from 'next/image'

import { cn } from '@/functions/classnames'
import { Card, CardContent, CardFooter } from '@/components/Card'
import { placeholderSVG } from '@/components/Placeholder'
import { posterUrlBuilder } from '@/functions/fetch'
import Rating from '@/ui/shared/Rating'

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
		'w500',
		movieData.poster_path,
	)

	return (
		<Card
			className={cn(
				'w-full transition-all hover:scale-105 hover:bg-secondary hover:shadow-secondary-foreground',
				className,
			)}
			{...props}>
			<CardContent className="object-contain px-0 py-2">
				<Image
					src={src}
					alt={`Movie ${movieData.title} poster`}
					className="aspect-[2/3] rounded-t-lg"
					placeholder={`data:image/svg+xml;base64, ${Buffer.from(placeholderSVG).toString('base64')}`}
					width={500}
					height={750}
				/>
			</CardContent>
			<CardFooter>
				<div className="grid flex-1 gap-2">
					<h3 className="line-clamp-2 h-14 pt-2 text-base font-semibold">
						{movieData.title}
					</h3>
					<div>
						<p className="line-clamp-2 h-8 overflow-scroll text-xs text-gray-500">
							{movieData.genres
								?.map(({ name }) => name)
								.join(' / ')}
						</p>
					</div>
					<div className="grid gap-0.5">
						<Rating
							rate={movieData.vote_average}
							voters={movieData.vote_count}
						/>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}
export default MovieCard
