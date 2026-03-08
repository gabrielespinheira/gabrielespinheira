"use client"

import { motion } from "motion/react"
import AboutCard from "./about-card"
import ConnectCard from "./connect-card"
import StackCard from "./stack-card"
import WhoAmICard from "./whoami-card"

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

export default function HomeGrid() {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="flex w-full flex-col gap-3"
		>
			<div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
				<WhoAmICard />
				<AboutCard />
			</div>
			<div className="grid w-full grid-cols-2 gap-3 md:grid-cols-5">
				<StackCard />
				<ConnectCard />
			</div>
		</motion.div>
	)
}
