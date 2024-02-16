import Image from 'next/image'

import { posterUrlBuilder } from '@/functions/fetch'
import { placeholderSVG } from '@/components/Placeholder'
import { ImageConfigurations } from '@/types/Config'
import PlaceholderCredit from '@/public/placeholder-credit.png'

import type { TCastMember, TCrewMember } from '@/types/Movie'

type Props = {
	person: TCastMember | TCrewMember
	imageConfig: ImageConfigurations
}

const PlaceHolderImage = ({ name }: { name: string }) => (
	<Image
		src={PlaceholderCredit}
		alt={`${name} poster`}
		className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover "
	/>
)

const CreditImage: React.FC<Props> = ({ person, imageConfig }) => {
	if (!person.profile_path) return <PlaceHolderImage name={person.name} />
	const src = posterUrlBuilder(
		imageConfig.base_url,
		'original',
		person.profile_path,
	)

	return (
		<Image
			src={src}
			alt={`${person.name} poster`}
			width={500}
			height={750}
			className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover "
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			placeholder={`data:image/svg+xml;base64, ${Buffer.from(placeholderSVG).toString('base64')}`}
		/>
	)
}

export default CreditImage
