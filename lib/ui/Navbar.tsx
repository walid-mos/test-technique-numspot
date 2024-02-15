import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
	<header className="border-b bg-white">
		<nav className="mx-auto flex h-16 max-w-screen-xl items-center">
			<div className="flex gap-2 ">
				<Link className="flex items-center gap-2" href="#">
					<Image
						src="/logo.svg"
						alt="MyIMDB Logo"
						className="h-6 w-auto"
						width={100}
						height={24}
						priority
					/>
					<span className="font-semibold">MyIMDB</span>
				</Link>
			</div>
			<div className="ml-auto flex h-[calc(100%-1rem)] items-center space-x-4">
				<Link
					className="flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 "
					href="#">
					Retour a la liste des films
				</Link>
			</div>
		</nav>
	</header>
)

export default Navbar
