import {
	StarIcon,
	StarFilledIcon,
	PersonIcon,
	HeartFilledIcon,
} from '@radix-ui/react-icons'

import { cn } from '@/functions/classnames'

type Props = {
	rate: number
	voters: number
	popularity: number
}

const Rating: React.FC<Props> = ({ rate, voters, popularity }) => {
	const rateFive = rate / 2
	const rateInt = Math.round(rateFive)
	const stars = new Map<number, React.ReactNode>()

	for (let i = 0; i < 5; i++) {
		if (i < rateInt) {
			stars.set(
				i,
				<StarFilledIcon key={i} className="h-4 w-4 text-yellow-400" />,
			)
		} else {
			stars.set(
				i,
				<StarIcon key={i} className="h-4 w-4 text-muted-foreground" />,
			)
		}
	}

	let ratingColor = ''
	if (rateFive > 3.5) ratingColor = `text-green-500`
	else if (rateFive > 2) ratingColor = `text-yellow-500`
	else if (rateFive >= 0) ratingColor = `text-red-500`

	return (
		<>
			<div className="flex items-center text-sm">
				{Array.from(stars).map(([, value]) => value)}
				<span
					data-testid="rate"
					className={cn('ml-2 w-4 text-xs font-bold', ratingColor)}>
					{rateFive.toFixed(2)}
				</span>
			</div>
			<div className="flex text-xs font-bold text-muted-foreground">
				<div className="flex">
					<PersonIcon className="font-normal" />
					<span data-testid="voters" className="ml-2 w-4 text-end">
						{voters}
					</span>
				</div>
			</div>
			<div className="flex text-xs font-bold text-muted-foreground">
				<div className="flex">
					<HeartFilledIcon className="text-red-500" />
					<span
						data-testid="popularity"
						className="ml-2 w-4 text-end">
						{popularity}
					</span>
				</div>
			</div>
		</>
	)
}

export default Rating
