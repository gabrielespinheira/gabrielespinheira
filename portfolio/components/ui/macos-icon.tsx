"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface MacOSIconProps {
	children?: React.ReactNode
	className?: string
	gradient?: string // eg. "from-blue-500 to-indigo-600"
	fallback?: string
	label?: string
}

export function MacOSIcon({
	children,
	className,
	gradient = "from-zinc-800 to-zinc-950",
	fallback,
	label,
}: MacOSIconProps) {
	return (
		<div className="group relative flex flex-col items-center">
			<div
				className={cn(
					"relative flex h-full w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b shadow-sm transition-transform duration-300 group-hover:scale-105 md:rounded-[1.2rem]",
					gradient,
					className,
				)}
			>
				<div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity hover:opacity-100" />
				{/* iOS-style inner top highlight */}
				<div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
				<div className="z-10 flex items-center justify-center font-semibold text-lg text-white drop-shadow-sm md:text-2xl">
					{children || fallback}
				</div>
			</div>
			{label && (
				<span className="absolute -top-10 whitespace-nowrap rounded-md border border-border bg-background/90 px-2.5 py-1 font-medium text-[10px] text-foreground opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100 md:text-xs">
					{label}
				</span>
			)}
		</div>
	)
}
