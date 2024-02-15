import { BellIcon, CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/functions/classnames'
import { Button } from '@/components/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/Card'

const notifications = [
	{
		id: 1,
		title: 'Your call has been confirmed.',
		description: '1 hour ago',
	},
	{
		id: 2,
		title: 'You have a new message!',
		description: '1 hour ago',
	},
	{
		id: 3,
		title: 'Your subscription is expiring soon!',
		description: '2 hours ago',
	},
]

type CardProps = React.ComponentProps<typeof Card>

const MovieCard = ({ className, ...props }: CardProps) => (
	<Card className={cn('w-[380px]', className)} {...props}>
		<CardHeader>
			<CardTitle>Notifications</CardTitle>
			<CardDescription>You have 3 unread messages.</CardDescription>
		</CardHeader>
		<CardContent className="grid gap-4">
			<div className="flex items-center space-x-4 rounded-md border p-4">
				<BellIcon />
				<div className="flex-1 space-y-1">
					<p className="text-sm font-medium leading-none">
						Push Notifications
					</p>
					<p className="text-sm text-muted-foreground">
						Send notifications to device.
					</p>
				</div>
			</div>
			<div>
				{notifications.map(({ id, title, description }) => (
					<div
						key={id}
						className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
						<span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
						<div className="space-y-1">
							<p className="text-sm font-medium leading-none">
								{title}
							</p>
							<p className="text-sm text-muted-foreground">
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
		</CardContent>
		<CardFooter>
			<Button className="w-full">
				<CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
			</Button>
		</CardFooter>
	</Card>
)
export default MovieCard