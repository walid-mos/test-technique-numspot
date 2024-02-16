import Image from 'next/image'

import { fetchApi, posterUrlBuilder } from '@/functions/fetch'
import { getImageConfiguration } from '@/server/config'
import { placeholderSVG } from '@/components/Placeholder'

import { API_KEY } from '../../../lib/constants'

import type { TMovieDetails } from '@/types/Movie'

type Props = {
	params: {
		id: number
	}
}

const getMovie = async (movieId: number) => {
	const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=keywords,alternative_titles,changes,credits,images,keywords,lists,releases,reviews,similar,translations,videos`

	return fetchApi<TMovieDetails>(url)
}

// <div className="flex flex-1">
// 	<h3 className="text-xl font-bold text-slate-800">
// 		{movieDetails.title}
// 	</h3>
// 	PICTURE RESUME CREDIT SLIDER
// </div>
const Movie: React.FC<Props> = async ({ params: { id } }) => {
	const [movieDetails, imageConfig] = await Promise.all([
		getMovie(id),
		getImageConfiguration(),
	])

	const src = posterUrlBuilder(
		imageConfig.images.base_url,
		'original',
		movieDetails.poster_path,
	)

	return (
		<div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
			<div className="hidden items-start md:flex">
				<Image
					src={src}
					alt={`Movie ${movieDetails.title} poster`}
					width={500}
					height={750}
					className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover "
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					placeholder={`data:image/svg+xml;base64, ${Buffer.from(placeholderSVG).toString('base64')}`}
				/>
			</div>
			<div className="grid items-start gap-4">
				<div className="flex items-start">
					<div className="grid gap-4">
						<h1 className="font-sans text-3xl font-bold lg:text-4xl">
							{movieDetails.title}
						</h1>
						<div>
							<p>
								When his job along with that of his co-worker
								are threatened, Walter takes action in the real
								world embarking on a global journey that turns
								into an adventure more extraordinary than
								anything he could have ever imagined.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start">
					<div className="grid gap-4 md:gap-10">
						<h2 className="text-xl font-bold sm:text-2xl">
							Actors
						</h2>
						<div className="w-full overflow-hidden rounded-lg border dark:border-gray-800">
							<div className="flex gap-4 p-4 md:p-6">
								<div className="grid gap-2 text-center">
									<img
										alt="Actor"
										className="aspect-square rounded-full border object-cover dark:border-gray-800"
										height={150}
										src="/placeholder.svg"
										width={150}
									/>
									<p className="text-sm font-medium leading-none">
										Ben Stiller
									</p>
								</div>
								<div className="grid gap-2 text-center">
									<img
										alt="Actor"
										className="aspect-square rounded-full border object-cover dark:border-gray-800"
										height={150}
										src="/placeholder.svg"
										width={150}
									/>
									<p className="text-sm font-medium leading-none">
										Kristen Wiig
									</p>
								</div>
								<div className="grid gap-2 text-center">
									<img
										alt="Actor"
										className="aspect-square rounded-full border object-cover dark:border-gray-800"
										height={150}
										src="/placeholder.svg"
										width={150}
									/>
									<p className="text-sm font-medium leading-none">
										Shirley MacLaine
									</p>
								</div>
								<div className="grid gap-2 text-center">
									<img
										alt="Actor"
										className="aspect-square rounded-full border object-cover dark:border-gray-800"
										height={150}
										src="/placeholder.svg"
										width={150}
									/>
									<p className="text-sm font-medium leading-none">
										Adam Scott
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Movie
