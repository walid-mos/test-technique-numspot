const mandatoryEnvCheck = (envVariable: string | undefined) => {
	if (!envVariable)
		throw new Error(
			`Cannot find ${envVariable}, please make sure that you added this variable to the environments.`,
		)
	return envVariable
}

export const API_KEY = mandatoryEnvCheck(process.env.TMDB_API_KEY)
export const API_TOKEN = mandatoryEnvCheck(process.env.TMDB_API_TOKEN)

export const authorizedSort = ['title', 'popularity', 'vote_average'] as const
export const authorizedSortType = ['asc', 'desc'] as const
