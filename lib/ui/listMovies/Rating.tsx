import { StarIcon, StarFilledIcon, PersonIcon } from '@radix-ui/react-icons'
type Props = {
	rate: number
	voters: number
}

const Rating: React.FC<Props> = ({ rate, voters }) => {
	const note = Math.round(rate / 2)

	const stars = new Map<number, React.ReactNode>()

	for (let i = 0; i < 5; i++) {
		if (i < note) {
			stars.set(i, <StarFilledIcon className="h-4 w-4 text-yellow-400" />)
		} else {
			stars.set(i, <StarIcon className="h-4 w-4 text-muted-foreground" />)
		}
	}

	let ratingColor = 'text-xs font-bold'
	if (note > 6) ratingColor + ' text-green-300'
	else if (note > 3) ratingColor + ' text-yellow-300'
	else if (note > 0) ratingColor + ' text-yellow-300'

	console.log(ratingColor)
	return (
		<div className="grid flex-1 justify-end gap-0.5">
			<div className="flex items-center text-sm">
				{Array.from(stars).map(([, value]) => {
					return value
				})}
				<span className="ml-2 w-4 text-xs font-bold text-muted-foreground">
					{rate.toFixed(2)}{' '}
				</span>
			</div>
			<div className="flex justify-end text-xs font-bold text-muted-foreground">
				<div className="flex">
					<PersonIcon className="font-normal" />
					<span className="ml-2 w-4 text-end">{voters}</span>
				</div>
			</div>
		</div>
	)
}

export default Rating
