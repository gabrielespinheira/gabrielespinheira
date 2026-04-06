"use client"

import { createContext, type ReactNode, useCallback, useContext, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "motion/react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface DockContextType {
	mouseX: MotionValue<number>
}

const BASE_ICON_SIZE = 56
const HOVER_ICON_SIZE = 84

const DockContext = createContext<DockContextType | null>(null)

const useDock = () => {
	const context = useContext(DockContext)
	if (!context) {
		throw new Error("useDock must be used within a <Dock />")
	}
	return context
}

interface DockProps {
	className?: string
	children: ReactNode
}

function Dock({ className, children }: DockProps) {
	const mouseX = useMotionValue(Infinity)

	return (
		<DockContext.Provider value={{ mouseX }}>
			<motion.div
				initial={{ y: 24, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 260, damping: 24 }}
				className={cn(
					"fixed bottom-4 left-1/2 z-50 inline-flex h-[72px] w-max -translate-x-1/2 items-end justify-start gap-1 rounded-xl bg-neutral-50 bg-opacity-90 p-2 no-underline shadow-sm transition-colors hover:bg-neutral-100 md:justify-center dark:bg-neutral-900 dark:hover:bg-neutral-800/80",
					"overflow-visible",
					"shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
					"shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px]",
					"dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
					className
				)}
				onMouseMove={(e) => {
					mouseX.set(e.clientX)
				}}
				onMouseLeave={() => {
					mouseX.set(Infinity)
				}}
			>
				{children}
			</motion.div>
		</DockContext.Provider>
	)
}

interface DockCardInnerProps {
	src: string
	alt?: string
	children?: ReactNode
}

function DockCardInner({ src, alt = "", children }: DockCardInnerProps) {
	return (
		<span className="relative z-0 flex h-full w-full items-center justify-center overflow-hidden">
			<Image
				src={src}
				alt={alt}
				fill
				sizes="84px"
				fetchPriority="low"
				style={{ objectFit: "contain" }}
				draggable={false}
			/>
			{children ? (
				<span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
					{children}
				</span>
			) : null}
		</span>
	)
}

interface DockCardProps {
	children: ReactNode
	label?: string
}

function DockCard({ children, label }: DockCardProps) {
	const cardRef = useRef<HTMLButtonElement>(null)
	const [isHovered, setIsHovered] = useState(false)
	const [tooltipPosition, setTooltipPosition] = useState<{
		x: number
		y: number
	} | null>(null)
	const dock = useDock()

	const distance = useTransform(dock.mouseX, (val) => {
		const bounds = cardRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
		return val - bounds.x - bounds.width / 2
	})

	const widthSync = useTransform(distance, [-150, 0, 150], [
		BASE_ICON_SIZE,
		HOVER_ICON_SIZE,
		BASE_ICON_SIZE,
	])
	const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

	const updateTooltipPosition = useCallback(() => {
		if (!cardRef.current) return
		const rect = cardRef.current.getBoundingClientRect()
		setTooltipPosition({ x: rect.left + rect.width / 2, y: rect.top - 8 })
	}, [])

	const shouldShowTooltip = Boolean(label && isHovered && tooltipPosition)
	let tooltip: ReactNode = null

	if (shouldShowTooltip && tooltipPosition && typeof document !== "undefined") {
		tooltip = createPortal(
			<motion.div
				className="pointer-events-none fixed z-[90] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-black/10 bg-neutral-900 px-2 py-1 text-[11px] leading-none text-white shadow-md dark:border-white/10 dark:bg-neutral-100 dark:text-neutral-900"
				style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
				initial={{ opacity: 0, y: 4 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.14 }}
			>
				{label}
			</motion.div>,
			document.body
		)
	}

	return (
		<div className="relative flex flex-col items-center gap-1">
			{tooltip}

			<motion.button
				ref={cardRef}
				className="aspect-square border-none bg-transparent shadow-none"
				aria-label={label}
				onHoverStart={() => {
					setIsHovered(true)
					updateTooltipPosition()
				}}
				onHoverEnd={() => {
					setIsHovered(false)
					setTooltipPosition(null)
				}}
				onMouseMove={() => {
					if (isHovered) updateTooltipPosition()
				}}
				onFocus={() => {
					setIsHovered(true)
					updateTooltipPosition()
				}}
				onBlur={() => {
					setIsHovered(false)
					setTooltipPosition(null)
				}}
				style={{ width }}
				whileTap={{ scale: 0.95 }}
			>
				{children}
			</motion.button>
		</div>
	)
}

function DockDivider() {
	return (
		<motion.div
			className="flex h-full cursor-ns-resize items-center p-1.5"
			drag="y"
			dragConstraints={{ top: -100, bottom: 50 }}
		>
			<span className="h-full w-0.5 rounded bg-neutral-800/10 dark:bg-neutral-100/10"></span>
		</motion.div>
	)
}

export { Dock, DockCard, DockCardInner, DockDivider, useDock }
export default Dock
