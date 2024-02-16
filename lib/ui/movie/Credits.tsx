import CreditCarousel from '@/ui/shared/CreditsCarousel'

import CarouselPerson from './CarouselPerson'

import type { TMovieCredits } from '@/types/Movie'

type Props = {
	credits: TMovieCredits
}

const Credits: React.FC<Props> = async ({ credits }) => {
	const isCredit = credits.cast?.length || credits.crew?.length
	if (!isCredit) return null

	return (
		<div className="grid gap-8">
			<h2 className="text-xl font-bold sm:text-2xl">Credits</h2>
			<CreditCarousel>
				{credits.cast?.map(person => (
					<CarouselPerson
						key={`${person.id}cast`}
						person={person}
						type="Cast"
					/>
				))}
				{credits.crew?.map(person => (
					<CarouselPerson
						key={`${person.id}crew`}
						person={person}
						type="Crew"
					/>
				))}
			</CreditCarousel>
		</div>
	)
}

export default Credits
