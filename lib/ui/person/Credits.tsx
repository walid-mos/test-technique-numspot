import CreditCarousel from '@/ui/shared/CreditsCarousel'

import CarouselMovie from './CarouselMovie'

import type { TPerson } from '@/types/Person'

type Props = {
	movieCredits: TPerson['movie_credits']
}

const Credits: React.FC<Props> = async ({ movieCredits }) => (
	<div className="grid gap-8">
		<h2 className="text-xl font-bold sm:text-2xl">Credits</h2>
		<CreditCarousel>
			{movieCredits.cast?.map(movie => (
				<CarouselMovie
					key={`${movie.id}cast`}
					movie={movie}
					type="Cast"
				/>
			))}
			{movieCredits.crew?.map(movie => (
				<CarouselMovie
					key={`${movie.id}cast`}
					movie={movie}
					type="Crew"
				/>
			))}
		</CreditCarousel>
	</div>
)

export default Credits
