import { cn } from '@/functions/classnames'
import { Card, CardContent, CardFooter } from '@/components/Card'
// import Link from 'next/link'
import { TMovie } from '@/lib/types/MovieList'
import Image from 'next/image'
import { ImageConfigurations } from '@/lib/types/Config'
import Rating from './Rating'

type CardProps = React.ComponentProps<typeof Card> & {
	movieData: TMovie
	imageConfig: ImageConfigurations
}

const posterUrlBuilder = (
	base_url: string,
	size: ImageConfigurations['poster_sizes'],
	poster_path: string,
) => {
	return `${base_url}${size}${poster_path}`
}
// TODO : Better loader
const svg = `
<svg width="700" height="475" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<linearGradient id="g">
<stop stop-color="#333" offset="20%" />
<stop stop-color="#222" offset="50%" />
<stop stop-color="#333" offset="70%" />
</linearGradient>
</defs>
<rect width="700" height="475" fill="#333" />
<rect id="r" width="700" height="475" fill="url(#g)" />
<animate xlink:href="#r" attributeName="x" from="-700" to="700" dur="1s" repeatCount="indefinite"  />
</svg>`

const MovieCard = async ({
	movieData,
	imageConfig,
	className,
	...props
}: CardProps) => {
	const src = posterUrlBuilder(
		imageConfig.base_url,
		'original',
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
					placeholder={`data:image/svg+xml;base64, ${Buffer.from(svg).toString('base64')}`}
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
