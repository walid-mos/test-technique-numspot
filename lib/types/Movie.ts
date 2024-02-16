export type TGenre = {
	id: number
	name: string
}

export type TCollection = {
	id: number
	name: string
	poster_path: string
	backdrop_path: string
}

export type TProductionCompany = {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

export type TProductionCountry = {
	iso_3166_1: string
	name: string
}

export type TSpokenLanguage = {
	english_name: string
	iso_639_1: string
	name: string
}

export type TMovieDetails = {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: TCollection
	budget: number
	genres: TGenre[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: TProductionCompany[]
	production_countries: TProductionCountry[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: TSpokenLanguage[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
