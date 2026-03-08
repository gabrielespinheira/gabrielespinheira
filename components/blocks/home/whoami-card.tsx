"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"

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

const cardClass =
	"rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden"

export default function WhoAmICard() {
	return (
		<motion.div variants={item} className={cn(cardClass, "col-span-2")}>
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
						Carioca from Rio de Janeiro who swapped Cristo Redentor for Pastéis
						de Nata, now{" "}
						<span className="text-foreground/80">living in Lisbon</span>.
					</p>
					<p>
						With{" "}
						<span className="text-foreground/80">11 years of experience</span>{" "}
						as a Senior Software Engineer, crafting skills in both back-end and
						front-end — always aiming for that perfect blend of form and
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
						💯 Let&apos;s ship something cool together?
					</span>
				</div>
			</div>
		</motion.div>
	)
}
