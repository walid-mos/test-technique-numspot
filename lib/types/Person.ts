export type TMovieCredit = {
	adult: boolean
	backdrop_path: null | string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: null | string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	character: string
	credit_id: string
	order: number
}

export type TCrewCredit = {
	adult: boolean
	backdrop_path: null | string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: null | string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	credit_id: string
	department: string
	job: string
}

export type TMovieCredits = {
	cast: TMovieCredit[]
	crew: TCrewCredit[]
}

export type TProfile = {
	aspect_ratio: number
	height: number
	iso_639_1: null | string
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}

export type TImages = {
	profiles: TProfile[]
}

export type TPerson = {
	adult: boolean
	also_known_as: string[]
	biography: string
	birthday: string
	deathday: null | string
	gender: number
	homepage: null | string
	id: number
	imdb_id: string
	known_for_department: string
	name: string
	place_of_birth: string
	popularity: number
	profile_path: string
	movie_credits: TMovieCredits
	images: TImages
}
