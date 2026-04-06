export const itemVariant = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
		},
	},
}

export const cardClass =
	"rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
