import Link from 'next/link'

import { Card, CardContent } from '@/components/Card'
import { CarouselItem } from '@/components/Carousel'
import LoadImage from '@/ui/shared/LoadImage'

import type { TCastMember, TCrewMember } from '@/types/Movie'

type Props = {
	person: TCrewMember | TCastMember
	type: 'Cast' | 'Crew'
}

const CarouselPerson: React.FC<Props> = ({ person, type }) => (
	<CarouselItem className="basis-1/2 pl-1 md:basis-1/3 lg:basis-1/4">
		<Link href={`/person/${person.id}`}>
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

						<LoadImage
							type="person"
							path={person.profile_path}
							size="w154"
							width={500}
							height={750}
							name={person.name}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover "
						/>
					</CardContent>
				</Card>
			</div>
		</Link>
	</CarouselItem>
)

export default CarouselPerson
