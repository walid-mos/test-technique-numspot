import { cn } from '@/functions/classnames'
import { Card, CardContent, CardFooter } from '@/components/Card'
import Rating from '@/ui/shared/Rating'
import LoadImage from '@/ui/shared/LoadImage'

import type { TMovie } from '@/types/MovieList'

type CardProps = React.ComponentProps<typeof Card> & {
	movieData: TMovie
}

const MovieCard = async ({ movieData, className, ...props }: CardProps) => (
	<Card
		className={cn(
			'w-full transition-all hover:scale-105 hover:bg-secondary hover:shadow-secondary-foreground',
			className,
		)}
		{...props}>
		<CardContent className="mb-2 rounded-t-xl object-contain p-0">
			<LoadImage
				type="movie"
				name={movieData.title}
				path={movieData.poster_path}
				size="w500"
				className="aspect-[2/3] rounded-t-lg"
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
						{movieData.genres?.map(({ name }) => name).join(' / ')}
					</p>
				</div>
				<div className="grid gap-0.5">
					<Rating
						rate={movieData.vote_average}
						voters={movieData.vote_count}
						popularity={movieData.popularity}
					/>
				</div>
			</div>
		</CardFooter>
	</Card>
)
export default MovieCard
