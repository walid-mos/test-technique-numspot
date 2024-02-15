import type { XOR } from 'ts-xor'

export type ApiErrorResponse = {
	status_code: number
	status_message: string
	success: boolean
}

export type TApiResponse<T> = XOR<T, ApiErrorResponse>
