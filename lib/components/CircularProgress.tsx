type Props = {
	children: React.ReactNode
}

// TODO : better rating
const CircularProgress: React.FC<Props> = ({ children }) => (
	<div className="relative size-40">
		<svg
			className="size-full"
			width="36"
			height="36"
			viewBox="0 0 36 36"
			xmlns="http://www.w3.org/2000/svg">
			<circle
				cx="18"
				cy="18"
				r="16"
				fill="none"
				className="stroke-current text-gray-200 dark:text-gray-700"
				strokeWidth="2"
			/>
			<g className="origin-center -rotate-90 transform">
				<circle
					cx="18"
					cy="18"
					r="16"
					fill="none"
					className="stroke-current text-blue-600 dark:text-blue-500"
					strokeWidth="2"
					strokeDasharray="100"
					strokeDashoffset="75"
				/>
			</g>
		</svg>
		<div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
			<span className="text-center text-2xl font-bold text-gray-800 dark:text-white">
				{children}
			</span>
		</div>
	</div>
)

export default CircularProgress
