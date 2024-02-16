import { Card, CardContent } from '@/components/Card'
import { CarouselItem } from '@/components/Carousel'

import CreditImage from './CreditImage'

import type { ImageConfigurations } from '@/types/Config'
import type { TCastMember, TCrewMember } from '@/types/Movie'

type Props = {
	person: TCrewMember | TCastMember
	imageConfig: ImageConfigurations
	type: 'Cast' | 'Crew'
}

const CarouselPerson: React.FC<Props> = ({ person, imageConfig, type }) => (
	<CarouselItem className="basis-1/2 pl-1 md:basis-1/3 lg:basis-1/4">
		<div className="p-1">
			<Card>
				<CardContent className="group relative flex aspect-[2/3] items-center justify-center p-0 transition-all hover:scale-105">
					<div className="inset-0 z-10 hidden rounded-xl bg-primary/50 group-hover:absolute group-hover:block">
						<div className="m-2 rounded text-center text-xs font-bold text-primary-foreground ">
							<div className="absolute left-2 right-2 top-2">
								{type}
							</div>
							<div className="absolute bottom-5 left-2 right-2">
								{person.name}
							</div>
						</div>
					</div>
					<CreditImage person={person} imageConfig={imageConfig} />
				</CardContent>
			</Card>
		</div>
	</CarouselItem>
)

export default CarouselPerson
