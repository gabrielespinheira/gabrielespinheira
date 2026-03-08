"use client"

import { motion } from "motion/react"
import AppDock from "@/components/blocks/app-dock"
import AboutCard from "@/components/blocks/home/about-card"
import ConnectCard from "@/components/blocks/home/connect-card"
import StackCard from "@/components/blocks/home/stack-card"
import WhoAmICard from "@/components/blocks/home/whoami-card"

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

export default function Homepage() {
	return (
		<main className="relative mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center overflow-hidden max-[820px]:overflow-visible bg-background px-4 py-12 pb-32 md:px-8 md:py-0 md:pb-40">
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

			<AppDock />
		</main>
	)
}
