"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { cardClass, itemVariant } from "./shared"

const stack = [
	{ label: "React", icon: "/icons/stack/react.svg", color: "#61DAFB" },
	{ label: "Next.js", icon: "/icons/stack/nextjs.svg", color: "#000000" },
	{ label: "Node.js", icon: "/icons/stack/nodejs.svg", color: "#5FA04E" },
	{
		label: "TypeScript",
		icon: "/icons/stack/typescript.svg",
		color: "#3178C6",
	},
	{ label: "PHP", icon: "/icons/stack/php.svg", color: "#777BB4" },
	{ label: "AWS", icon: "/icons/stack/aws.svg", color: "#FF9900" },
	{ label: "Postgres", icon: "/icons/stack/postgresql.svg", color: "#4169E1" },
	{ label: "MySQL", icon: "/icons/stack/mysql.svg", color: "#4479A1" },
	{ label: "Convex", icon: "/icons/stack/convex.svg", color: "#EE342F" },
	{ label: "Vite", icon: "/icons/stack/vite.svg", color: "#646CFF" },
	{ label: "Docker", icon: "/icons/stack/docker.svg", color: "#2496ED" },
	{ label: "Tailwind", icon: "/icons/stack/tailwindcss.svg", color: "#06B6D4" },
]

function StackIcon({
	label,
	icon,
	color,
}: {
	label: string
	icon: string
	color: string
}) {
	const [hovered, setHovered] = useState(false)

	return (
		<div className="relative flex flex-col items-center">
			<AnimatePresence>
				{hovered && (
					<motion.span
						initial={{ opacity: 0, y: 4, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 4, scale: 0.95 }}
						transition={{ type: "spring", damping: 20, stiffness: 400 }}
						className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground/90 px-2.5 py-1 font-medium text-[13px] text-background shadow-lg"
					>
						{label}
					</motion.span>
				)}
			</AnimatePresence>
			<motion.div
				whileHover={{ scale: 1.12 }}
				transition={{ type: "spring", damping: 15, stiffness: 400 }}
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
				onFocus={() => setHovered(true)}
				onBlur={() => setHovered(false)}
				tabIndex={0}
				aria-label={label}
				className="flex h-18 w-18 cursor-default items-center justify-center rounded-xl border border-white/10 shadow-sm outline-none"
				style={{ backgroundColor: color }}
			>
				<Image
					width={32}
					height={32}
					src={icon}
					alt={label}
					className="h-8 w-8 object-contain"
				/>
			</motion.div>
		</div>
	)
}

export default function StackCard() {
	return (
		<motion.div
			variants={itemVariant}
			className={cn(cardClass, "col-span-2 md:col-span-3 flex flex-col")}
		>
			<div className="flex items-center gap-2 border-white/[0.04] border-b px-4 py-2.5">
				<span className="font-mono text-[13px] text-muted-foreground">
					<span className="text-purple-400">import</span>{" "}
					<span className="text-muted-foreground">{"{"}</span>{" "}
					<span className="text-amber-300">stack</span>{" "}
					<span className="text-muted-foreground">{"}"}</span>{" "}
					<span className="text-purple-400">from</span>{" "}
					<span className="text-emerald-400">&quot;@gabriel/skills&quot;</span>
				</span>
			</div>
			<div className="flex flex-1 items-center justify-center p-4">
				<div className="flex flex-row flex-wrap justify-center items-center gap-5">
					{stack.map((s) => (
						<StackIcon
							key={s.label}
							label={s.label}
							icon={s.icon}
							color={s.color}
						/>
					))}
				</div>
			</div>
		</motion.div>
	)
}
