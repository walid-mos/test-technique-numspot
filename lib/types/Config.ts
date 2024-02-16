export type ImageConfigurations = {
	base_url: string
	secure_base_url: string
	backdrop_sizes: 'w300' | 'w780' | 'w1280' | 'original'
	logo_sizes: 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original'
	poster_sizes:
		| 'w92'
		| 'w154'
		| 'w185'
		| 'w342'
		| 'w500'
		| 'w780'
		| 'original'
	profile_sizes: 'w45' | 'w185' | 'h632' | 'original'
	still_sizes: 'w92' | 'w185' | 'w300' | 'original'
}

export type ChangeKeys = {
	change_keys:
		| 'adult'
		| 'air_date'
		| 'also_known_as'
		| 'alternative_titles'
		| 'biography'
		| 'birthday'
		| 'budget'
		| 'cast'
		| 'certifications'
		| 'character_names'
		| 'created_by'
		| 'crew'
		| 'deathday'
		| 'episode'
		| 'episode_number'
		| 'episode_run_time'
		| 'freebase_id'
		| 'freebase_mid'
		| 'general'
		| 'genres'
		| 'guest_stars'
		| 'homepage'
		| 'images'
		| 'imdb_id'
		| 'languages'
		| 'name'
		| 'network'
		| 'origin_country'
		| 'original_name'
		| 'original_title'
		| 'overview'
		| 'parts'
		| 'place_of_birth'
		| 'plot_keywords'
		| 'production_code'
		| 'production_companies'
		| 'production_countries'
		| 'releases'
		| 'revenue'
		| 'runtime'
		| 'season'
		| 'season_number'
		| 'season_regular'
		| 'spoken_languages'
		| 'status'
		| 'tagline'
		| 'title'
		| 'translations'
		| 'tvdb_id'
		| 'tvrage_id'
		| 'type'
		| 'video'
		| 'videos'
}

// Combine both interfaces into a single type for the JSON structure
export type TMDBConfig = {
	images: ImageConfigurations
	change_keys: ChangeKeys['change_keys']
}

export type TGenres = {
	genres: {
		id: number
		name: string
	}[]
}
