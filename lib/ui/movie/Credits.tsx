import CreditCarousel from '@/ui/shared/CreditsCarousel'

import CarouselPerson from './CarouselPerson'

import type { TMovieCredits } from '@/types/Movie'

type Props = {
	credits: TMovieCredits
}

const Credits: React.FC<Props> = ({ credits }) => {
	const isCredit = credits.cast?.length || credits.crew?.length
	if (!isCredit) return null

	return (
		<div className="grid gap-8">
			<h2 className="text-xl font-bold sm:text-2xl">Credits</h2>
			<CreditCarousel>
				{credits.cast?.length
					? credits.cast.map(person => (
							<CarouselPerson
								key={`${person.id}cast`}
								person={person}
								type="Cast"
							/>
						))
					: null}
				{credits.crew?.length
					? credits.crew?.map(person => (
							<CarouselPerson
								key={`${person.id}crew`}
								person={person}
								type="Crew"
							/>
						))
					: null}
			</CreditCarousel>
		</div>
	)
}

export default Credits
