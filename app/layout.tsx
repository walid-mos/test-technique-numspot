import { Inter } from 'next/font/google'

import '@/styles/globals.css'

import Navbar from '@/ui/layout/Navbar'

import type { Metadata } from 'next'

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
		<body className={inter.className}>
			<Navbar />
			<section className="mx-auto max-w-screen-xl py-10">
				{children}
			</section>
		</body>
	</html>
)

export default RootLayout
