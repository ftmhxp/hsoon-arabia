import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-card border relative grid h-full w-full shadow lg:grid-cols-2 xl:grid-cols-3',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6" />

			{/* Content Section - Takes full width on mobile/tablet, 2 columns on xl */}
			<div className="flex flex-col justify-between xl:col-span-2">
				<div className="relative space-y-6 px-4 py-6 sm:p-8">
					<div className="space-y-4">
						<h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
							{title}
						</h1>
						<p className="text-muted-foreground max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed">
							{description}
						</p>
					</div>

					{/* Contact Info Grid */}
					<div className="grid gap-4 sm:gap-6">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>

			{/* Form Section - Full width on mobile/tablet, 1 column on xl */}
			<div
				className={cn(
					'bg-muted/40 flex w-full items-center border-t p-4 sm:p-6 xl:col-span-1 xl:border-t-0 xl:border-l xl:min-h-[400px]',
					formSectionClassName,
				)}
			>
				<div className="w-full max-w-md mx-auto xl:max-w-none">
					{children}
				</div>
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-start gap-3 py-2 sm:py-3', className)} {...props}>
			<div className="bg-muted/40 rounded-lg p-2.5 sm:p-3 flex-shrink-0 mt-0.5">
				<Icon className="h-4 w-4 sm:h-5 sm:w-5" />
			</div>
			<div className="min-w-0 flex-1">
				<p className="font-medium text-sm sm:text-base">{label}</p>
				<p className="text-muted-foreground text-xs sm:text-sm leading-relaxed break-words">{value}</p>
			</div>
		</div>
	);
}
