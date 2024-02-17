import Link from 'next/link'
import Image from 'next/image'

import BackButton from './BackButton'

const Navbar = () => (
	<header className="border-b bg-white">
		<nav className="mx-auto flex h-16 max-w-screen-xl items-center">
			<div className="flex gap-2 ">
				<Link className="flex items-center gap-2" href="/">
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

			<BackButton />
		</nav>
	</header>
)

export default Navbar
