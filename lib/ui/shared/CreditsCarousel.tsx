'use client'

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/Carousel'

const CreditCarousel: React.FC<React.PropsWithChildren> = ({ children }) => (
	<Carousel className="w-full">
		<CarouselContent className="-ml-1">{children}</CarouselContent>
		<CarouselPrevious />
		<CarouselNext />
	</Carousel>
)

export default CreditCarousel
