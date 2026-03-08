"use client"

import { motion } from "motion/react"
import { Terminal, TypingAnimation } from "@/components/ui/terminal"
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

const terminalLines = [
	{ id: "info-cmd", text: "$ gabriel --info" },
	{ id: "name", text: "name: Gabriel Espinheira" },
	{ id: "age", text: "age: 30" },
	{ id: "role", text: "role: Senior Software Engineer" },
	{ id: "exp", text: "experience: 11 years (since 2014)" },
	{ id: "location", text: "location: Lisbon, Portugal" },
	{ id: "from", text: "from: Rio de Janeiro, Brazil" },
	{ id: "edu", text: "education: BSc Computer Science" },
	{ id: "post-grad", text: "post-grad: Digital Tech Management" },
	{ id: "spacer", text: "" },
	{ id: "skills-cmd", text: "$ gabriel --skills" },
	{ id: "skill-design", text: "✔ Design Enthusiast" },
	{ id: "skill-clean", text: "✔ Clean Code" },
	{ id: "skill-early", text: "✔ Early Adopter" },
	{ id: "skill-self", text: "✔ Self-taught" },
	{ id: "skill-ai", text: "✔ AI-Augmented Coding" },
	{ id: "skill-prompt", text: "✔ Prompt Engineering" },
]

export default function AboutCard() {
	return (
		<motion.div variants={item} className={cn(cardClass, "col-span-2")}>
			<Terminal
				className="h-full rounded-none border-0 bg-transparent backdrop-blur-none"
				title="code ~/gabriel/about"
			>
				<div className="flex flex-col gap-1">
					{terminalLines.map((line, i) => {
						if (line.text === "") {
							return <div key={line.id} className="h-2" />
						}

						const prevChars = terminalLines
							.slice(0, i)
							.reduce((sum, l) => sum + Math.max(l.text.length, 1), 0)
						const isCommand = line.text.startsWith("$")
						const isCheck = line.text.startsWith("✔")

						return (
							<TypingAnimation
								key={line.id}
								delay={prevChars * 15}
								duration={isCommand ? 30 : 12}
								className={cn(
									isCommand && "text-foreground",
									isCheck && "text-emerald-400/80",
									!isCommand && !isCheck && "text-muted-foreground",
								)}
							>
								{line.text}
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
								(sum, l) => sum + Math.max(l.text.length, 1),
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
	)
}
