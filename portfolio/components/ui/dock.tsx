"use client";

import {
	type MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";
import Image from "next/image";
import {
	type ReactNode,
	createContext,
	useContext,
	useRef,
	useState,
} from "react";
import { cn } from "@/lib/utils";

const DockContext = createContext<MotionValue<number> | null>(null);

function MacDockItem({
	icon,
	label,
}: {
	icon: string | ReactNode;
	label: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);
	const mouseX = useContext(DockContext)!;

	const distance = useTransform(mouseX, (val) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return 150;
		return val - rect.x - rect.width / 2;
	});

	const size = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
	const springSize = useSpring(size, {
		mass: 0.1,
		stiffness: 300,
		damping: 15,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width: springSize, height: springSize }}
			className="relative flex items-center justify-center"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{hovered && (
				<motion.div
					initial={{ opacity: 0, y: 4 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 4 }}
					className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground/90 px-2.5 py-1 font-medium text-[12px] text-background shadow-lg"
				>
					{label}
				</motion.div>
			)}
			<div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
				{typeof icon === "string" ? (
					<Image
						src={icon}
						alt={label}
						width={72}
						height={72}
						className="h-full w-full object-contain"
					/>
				) : (
					icon
				)}
			</div>
		</motion.div>
	);
}

function MacDock({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const mouseX = useMotionValue(Infinity);

	return (
		<DockContext.Provider value={mouseX}>
			<motion.div
				onMouseMove={(e) => mouseX.set(e.pageX)}
				onMouseLeave={() => mouseX.set(Infinity)}
				className={cn(
					"flex items-end gap-1.5 rounded-2xl border border-white/10 bg-black/40 px-3 pb-2.5 pt-2.5 backdrop-blur-xl",
					className,
				)}
			>
				{children}
			</motion.div>
		</DockContext.Provider>
	);
}

export { MacDock, MacDockItem };
