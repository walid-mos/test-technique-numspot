import Link from 'next/link'

import { Card, CardContent } from '@/components/Card'
import { CarouselItem } from '@/components/Carousel'
import LoadImage from '@/ui/shared/LoadImage'

import type { TCrewCredit, TMovieCredit } from '@/types/Person'

type Props = {
	movie: TMovieCredit | TCrewCredit
	type: 'Cast' | 'Crew'
}

const CarouselMovie: React.FC<Props> = ({ movie, type }) => (
	<CarouselItem className="w-1 basis-1/2 pl-1 md:basis-1/3 lg:basis-1/4">
		<Link href={`/movies/${movie.id}`}>
			<div className="p-1">
				<Card>
					<CardContent className="group relative flex aspect-[2/3] items-center justify-center p-0 transition-all hover:scale-105">
						<div className="inset-0 z-10 hidden rounded-xl bg-primary/50 group-hover:absolute group-hover:block">
							<div className="m-2 rounded text-center text-xs font-bold text-primary-foreground ">
								<div className="absolute left-2 right-2 top-2">
									{type}
								</div>
								<div className="absolute bottom-5 left-2 right-2">
									{movie.title}
								</div>
							</div>
						</div>

						<LoadImage
							type="person"
							path={movie.poster_path}
							size="w154"
							width={500}
							height={750}
							name={movie.title}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 object-cover "
						/>
					</CardContent>
				</Card>
			</div>
		</Link>
	</CarouselItem>
)

export default CarouselMovie
