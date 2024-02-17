import Image, { type ImageProps } from 'next/image'

import { posterUrlBuilder } from '@/functions/fetch'
import { placeholderSVG } from '@/components/Placeholder'
import { ImageConfigurations } from '@/types/Config'
import PlaceholderPerson from '@/public/placeholder-person.png'
import PlaceholderMovie from '@/public/placeholder-movie.png'
import { getImageConfiguration } from '@/server/config'
import { cn } from '@/functions/classnames'

type Props = {
	path: string | null | undefined
	name?: string
	type: 'movie' | 'person'
	size?:
		| ImageConfigurations['poster_sizes']
		| ImageConfigurations['profile_sizes']
}

export interface LoadImageProps
	extends Omit<ImageProps, 'src' | 'alt'>,
		Props {}

const PlaceHolderImage = ({
	type,
	className,
}: {
	type: Props['type']
	className?: string
}) => {
	const src = type === 'person' ? PlaceholderPerson : PlaceholderMovie
	return (
		<Image
			src={src}
			alt="placeholder poster"
			className={cn(
				'aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 bg-slate-100 object-cover ',
				className,
			)}
		/>
	)
}

const LoadImage: React.FC<LoadImageProps> = async ({
	path,
	size,
	name,
	type,
	className,
	...props
}) => {
	const { images: imageConfig } = await getImageConfiguration()
	if (!path) return <PlaceHolderImage type={type} className={className} />
	const src = posterUrlBuilder(imageConfig.base_url, size || 'original', path)

	return (
		<Image
			className={cn(
				'aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover ',
				className,
			)}
			{...props}
			alt={`${name} poster`}
			src={src}
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			placeholder={`data:image/svg+xml;base64, ${Buffer.from(placeholderSVG).toString('base64')}`}
		/>
	)
}

export default LoadImage
