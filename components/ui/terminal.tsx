"use client"

import { type MotionProps, motion } from "motion/react"
import React from "react"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	title?: string
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
	({ children, className, title, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"z-0 rounded-xl border border-white/6 bg-white/3 backdrop-blur-sm",
					className,
				)}
				{...props}
			>
				<div className="flex items-center gap-2 border-white/4 border-b px-4 py-2.5">
					<div className="flex gap-1.5">
						<div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
						<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
						<div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
					</div>
					{title && (
						<span className="ml-2 font-mono text-[13px] text-muted-foreground/40">
							{title}
						</span>
					)}
				</div>
				<div className="p-4 font-mono text-sm">{children}</div>
			</div>
		)
	},
)
Terminal.displayName = "Terminal"

type AnimatedSpanProps = MotionProps &
	Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> & {
		delay?: number
		children: React.ReactNode
	}

const AnimatedSpan = React.forwardRef<HTMLDivElement, AnimatedSpanProps>(
	({ children, delay = 0, className, ...props }, ref) => (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: -5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: delay / 1000 }}
			className={cn("grid font-normal text-sm tracking-tight", className)}
			{...props}
		>
			{children}
		</motion.div>
	),
)
AnimatedSpan.displayName = "AnimatedSpan"

type TypingAnimationProps = MotionProps &
	Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> & {
		delay?: number
		duration?: number
		children: string
	}

const TypingAnimation = React.forwardRef<HTMLDivElement, TypingAnimationProps>(
	({ children, delay = 0, duration = 60, className, ...props }, ref) => {
		const [displayedText, setDisplayedText] = React.useState("")
		const [started, setStarted] = React.useState(false)

		React.useEffect(() => {
			const timeout = setTimeout(() => setStarted(true), delay)
			return () => clearTimeout(timeout)
		}, [delay])

		React.useEffect(() => {
			if (!started) return
			let i = 0
			const interval = setInterval(() => {
				if (i < children.length) {
					setDisplayedText(children.substring(0, i + 1))
					i++
				} else {
					clearInterval(interval)
				}
			}, duration)
			return () => clearInterval(interval)
		}, [children, duration, started])

		return (
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.1, delay: delay / 1000 }}
				className={cn("font-normal text-sm tracking-tight", className)}
				{...props}
			>
				{displayedText}
			</motion.div>
		)
	},
)
TypingAnimation.displayName = "TypingAnimation"

export { Terminal, AnimatedSpan, TypingAnimation }
