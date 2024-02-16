'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BackButton = () => {
	const path = usePathname()

	if (path === '/') return null

	return (
		<div className="ml-auto flex h-[calc(100%-1rem)] items-center space-x-4">
			<Link
				className="flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 "
				href="/">
				Retour a la liste des films
			</Link>
		</div>
	)
}

export default BackButton
