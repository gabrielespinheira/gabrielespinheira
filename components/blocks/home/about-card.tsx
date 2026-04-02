"use client"

import { motion } from "motion/react"
import { Terminal, TypingAnimation } from "@/components/ui/terminal"
import { cn } from "@/lib/utils"
import { cardClass, itemVariant } from "./shared"

const terminalLines = [
	{ id: "info-cmd", text: "$ gabriel --info" },
	{ id: "name", text: "name: Gabriel Espinheira" },
	{ id: "age", text: "age: 30" },
	{ id: "role", text: "role: Senior Software Engineer" },
	{ id: "exp", text: "experience: 12 years (since 2014)" },
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

const typedLines = terminalLines.map((line, index) => ({
	...line,
	delay:
		terminalLines
			.slice(0, index)
			.reduce((sum, item) => sum + Math.max(item.text.length, 1), 0) * 15,
}))

const promptDelay =
	(terminalLines.reduce((sum, line) => sum + Math.max(line.text.length, 1), 0) *
		15 +
		300) /
	1000

export default function AboutCard() {
	return (
		<motion.div variants={itemVariant} className={cn(cardClass, "col-span-2")}>
			<Terminal
				className="h-full rounded-none border-0 bg-transparent backdrop-blur-none"
				title="code ~/gabriel/about"
			>
				<div className="flex flex-col gap-1">
					{typedLines.map((line) => {
						if (line.text === "") {
							return <div key={line.id} className="h-2" />
						}

						const isCommand = line.text.startsWith("$")
						const isCheck = line.text.startsWith("✔")

						return (
							<TypingAnimation
								key={line.id}
								delay={line.delay}
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
						delay: promptDelay,
					}}
				>
					$ <span className="animate-pulse">▊</span>
				</motion.div>
			</Terminal>
		</motion.div>
	)
}
