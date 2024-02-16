import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/Carousel'
import { getMovieCredits } from '@/server/movies'

import CarouselPerson from './CarouselPerson'

type Props = {
	movieId: number
}

const Credits: React.FC<Props> = async ({ movieId }) => {
	const creditsData = await getMovieCredits(movieId)
	const isCredit = creditsData.cast?.length || creditsData.crew?.length
	if (!isCredit) return null

	return (
		<div className="grid gap-8">
			<h2 className="text-xl font-bold sm:text-2xl">Credits</h2>
			<Carousel className="w-full max-w-2xl md:max-w-xl">
				<CarouselContent className="-ml-1">
					{creditsData.cast?.map(person => (
						<CarouselPerson
							key={`${person.id}cast`}
							person={person}
							type="Cast"
						/>
					))}
					{creditsData.crew?.map(person => (
						<CarouselPerson
							key={`${person.id}crew`}
							person={person}
							type="Crew"
						/>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default Credits