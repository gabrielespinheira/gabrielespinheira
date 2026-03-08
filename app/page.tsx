"use client"

import { Mail } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { Terminal, TypingAnimation } from "@/components/ui/terminal"
import { cn } from "@/lib/utils"
import AppDock from "@/components/blocks/app-dock"

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 1.2,
			ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
		},
	},
}

const terminalLines = [
	"$ gabriel --info",
	"name: Gabriel Espinheira",
	"age: 30",
	"role: Senior Software Engineer",
	"experience: 11 years (since 2014)",
	"location: Lisbon, Portugal",
	"from: Rio de Janeiro, Brazil",
	"education: BSc Computer Science",
	"post-grad: Digital Tech Management",
	"",
	"$ gabriel --skills",
	"✔ Design Enthusiast",
	"✔ Clean Code",
	"✔ Early Adopter",
	"✔ Self-taught",
	"✔ AI-Augmented Coding",
	"✔ Prompt Engineering",
]

const stack = [
	{
		label: "React",
		icon: "/icons/stack/react.svg",
		color: "#61DAFB",
	},
	{
		label: "Next.js",
		icon: "/icons/stack/nextjs.svg",
		color: "#000000",
	},
	{
		label: "Node.js",
		icon: "/icons/stack/nodejs.svg",
		color: "#5FA04E",
	},
	{
		label: "TypeScript",
		icon: "/icons/stack/typescript.svg",
		color: "#3178C6",
	},
	{
		label: "PHP",
		icon: "/icons/stack/php.svg",
		color: "#777BB4",
	},
	{
		label: "AWS",
		icon: "/icons/stack/aws.svg",
		color: "#FF9900",
	},
	{
		label: "Postgres",
		icon: "/icons/stack/postgresql.svg",
		color: "#4169E1",
	},
	{
		label: "MySQL",
		icon: "/icons/stack/mysql.svg",
		color: "#4479A1",
	},
	{
		label: "Convex",
		icon: "/icons/stack/convex.svg",
		color: "#EE342F",
	},
	{
		label: "Vite",
		icon: "/icons/stack/vite.svg",
		color: "#646CFF",
	},
	{
		label: "Docker",
		icon: "/icons/stack/docker.svg",
		color: "#2496ED",
	},
	{
		label: "Tailwind",
		icon: "/icons/stack/tailwindcss.svg",
		color: "#06B6D4",
	},
]

const _apps = [
	{ label: "Zen Browser", icon: "/icons/apps/zenbrowser.svg" },
	{ label: "Warp", icon: "/icons/apps/warp.svg" },
	{ label: "Obsidian", icon: "/icons/apps/obsidian.svg" },
	{ label: "Notion", icon: "/icons/apps/notion.svg" },
	{ label: "Framer", icon: "/icons/apps/framer.svg" },
	{ label: "Figma", icon: "/icons/apps/figma.svg" },
	{ label: "Codex", icon: "/icons/apps/codex.svg" },
	{ label: "Antigravity", icon: "/icons/apps/antigravity.svg" },
	{ label: "Cursor", icon: "/icons/apps/cursor.svg" },
	{ label: "Ollama", icon: "/icons/apps/ollama.svg" },
	{ label: "LM Studio", icon: "/icons/apps/lmstudio.svg" },
	{ label: "Spline", icon: "/icons/apps/spline.png" },
	{ label: "Raycast", icon: "/icons/apps/raycast.svg" },
	{ label: "Claude Code", icon: "/icons/apps/claude.svg" },
	{ label: "Gemini", icon: "/icons/apps/gemini.svg" },
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
				className="flex h-12 w-12 cursor-default items-center justify-center rounded-xl border border-white/10 shadow-sm outline-none md:h-18 md:w-18"
				style={{ backgroundColor: color }}
			>
				<Image
					width={24}
					height={24}
					src={icon}
					alt={label}
					className="h-6 w-6 object-contain md:h-7 md:w-7"
				/>
			</motion.div>
		</div>
	)
}

export default function Homepage() {
	const cardClass =
		"rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden"

	return (
		<main className="relative mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 pb-32 md:px-8 md:py-0 md:pb-40">
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid w-full grid-cols-2 gap-3 md:grid-cols-4"
			>
				{/* ── Card 1: whoami ── */}
				<motion.div variants={item} className={cn(cardClass, "col-span-2")}>
					{/* Terminal header */}
					<div className="flex items-center gap-2 border-white/[0.04] border-b px-4 py-2.5">
						<div className="flex gap-1.5">
							<div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
							<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
							<div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
						</div>
						<span className="ml-2 font-mono text-[13px] text-muted-foreground/40">
							$ whoami
						</span>
					</div>
					<div className="flex flex-col gap-5 p-6 md:p-8">
						<div className="flex items-center gap-4">
							<Image
								src="/avatar.jpg"
								alt="Gabriel Espinheira"
								width={80}
								height={80}
								className="h-14 w-14 rounded-xl border border-border/50 object-cover shadow-sm md:h-[72px] md:w-[72px]"
							/>
							<div className="flex flex-col gap-1">
								<h1 className="font-semibold text-foreground text-xl tracking-tight md:text-3xl">
									Gabriel Espinheira
								</h1>
								<p className="mt-1 font-mono text-muted-foreground text-sm">
									Senior Software Engineer
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-2.5 text-md">
							<p>
								Carioca from Rio de Janeiro who swapped Cristo Redentor for
								Pastéis de Nata, now{" "}
								<span className="text-foreground/80">living in Lisbon</span>.
							</p>
							<p>
								With{" "}
								<span className="text-foreground/80">
									11 years of experience
								</span>{" "}
								as a Senior Software Engineer, crafting skills in both back-end
								and front-end — always aiming for that perfect blend of form and
								function.
							</p>
							<p>
								Creating digital products that are not just functional, but{" "}
								<span className="text-foreground/80">visually appealing</span> —
								because aesthetics and performance go hand in hand.
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<span className="flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground">
								<span className="mr-2 ml-1 h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
								Available
							</span>
							<span className="font-mono text-[14px] text-muted-foreground">
								💯 Let's ship something cool together?
							</span>
						</div>
					</div>
				</motion.div>

				{/* ── Card 2: About ── */}
				<motion.div variants={item} className={cn(cardClass, "col-span-2")}>
					<Terminal
						className="h-full rounded-none border-0 bg-transparent backdrop-blur-none"
						title="code ~/gabriel/about"
					>
						<div className="flex flex-col gap-1">
							{terminalLines.map((line, i) => {
								if (line === "") {
									return <div key="spacer" className="h-2" />
								}
								const prevChars = terminalLines
									.slice(0, i)
									.reduce((sum, l) => sum + Math.max(l.length, 1), 0)
								const isCommand = line.startsWith("$")
								const isCheck = line.startsWith("✔")
								return (
									<TypingAnimation
										key={line}
										delay={prevChars * 15}
										duration={isCommand ? 30 : 12}
										className={cn(
											isCommand && "text-foreground",
											isCheck && "text-emerald-400/80",
											!isCommand && !isCheck && "text-muted-foreground",
										)}
									>
										{line}
									</TypingAnimation>
								)
							})}
						</div>
						<motion.div
							className="mt-3 flex items-center gap-1 font-mono text-foreground text-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay:
									(terminalLines.reduce(
										(sum, l) => sum + Math.max(l.length, 1),
										0,
									) *
										15 +
										300) /
									1000,
							}}
						>
							$ <span className="animate-pulse">▊</span>
						</motion.div>
					</Terminal>
				</motion.div>

				{/* ── Card 3: Tech Stack ── */}
				<motion.div
					variants={item}
					className={cn(cardClass, "col-span-2 md:col-span-3")}
				>
					<div className="flex items-center gap-2 border-white/[0.04] border-b px-4 py-2.5">
						<span className="font-mono text-[13px] text-muted-foreground/40">
							<span className="text-purple-400/60">import</span>{" "}
							<span className="text-muted-foreground/30">{"{"}</span>{" "}
							<span className="text-amber-300/60">stack</span>{" "}
							<span className="text-muted-foreground/30">{"}"}</span>{" "}
							<span className="text-purple-400/60">from</span>{" "}
							<span className="text-emerald-400/50">
								&quot;@gabriel/skills&quot;
							</span>
						</span>
					</div>
					<div className="flex flex-1 items-center justify-center overflow-visible p-6 md:p-2">
						<div className="grid grid-cols-4 place-items-center gap-6 py-6 sm:grid-cols-6">
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

				{/* ── Card 4: Connect ── */}
				<motion.div
					variants={item}
					className={cn(cardClass, "col-span-2 md:col-span-1")}
				>
					<div className="flex items-center gap-2 border-white/[0.04] border-b px-4 py-2.5">
						<span className="font-mono text-[13px] text-muted-foreground/40">
							<span className="text-emerald-400/60">$</span> git remote -v
						</span>
					</div>
					<div className="flex flex-col justify-center gap-4 p-5 md:p-4">
						<a
							href="https://github.com/gabrielespinheira"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/10">
								<svg
									width={20}
									height={20}
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<title>GitHub</title>
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="font-medium text-foreground text-sm">
									GitHub
								</span>
								<span className="font-mono text-[12px] text-muted-foreground">
									@gabrielespinheira
								</span>
							</div>
						</a>
						<a
							href="https://linkedin.com/in/gabrielespinheira"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/10">
								<svg
									width={20}
									height={20}
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<title>LinkedIn</title>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="font-medium text-foreground text-sm">
									LinkedIn
								</span>
								<span className="font-mono text-[12px] text-muted-foreground">
									gabrielespinheira
								</span>
							</div>
						</a>
						<a
							href="https://x.com/gabs_app"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/10">
								<svg
									width={18}
									height={18}
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<title>X</title>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="font-medium text-foreground text-sm">X</span>
								<span className="font-mono text-[12px] text-muted-foreground">
									@gabs_app
								</span>
							</div>
						</a>
						<a
							href="mailto:gabriiel66@gmail.com"
							className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/10">
								<Mail size={20} />
							</div>
							<div className="flex flex-col">
								<span className="font-medium text-foreground text-sm">
									Email
								</span>
								<span className="font-mono text-[12px] text-muted-foreground">
									gabriiel66@gmail.com
								</span>
							</div>
						</a>
					</div>
				</motion.div>
			</motion.div>

			<AppDock />
		</main>
	)
}
