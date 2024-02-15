import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Numspot - MovieData',
	description:
		"Test technique pour Numspot, Lecture d'API movieDB pour afficher des informations de films / acteurs",
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => (
	<html lang="en">
		<body className={inter.className}>{children}</body>
	</html>
)

export default RootLayout
