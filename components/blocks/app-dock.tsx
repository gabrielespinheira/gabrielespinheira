"use client"

import { useEffect, useState } from "react"
import { Dock, DockCard, DockCardInner } from "@/components/ui/dock"

// https://macosicons.com/
const dockApps = [
	{ key: "zen", name: "Zen Browser", src: "/icons/macos/zen.png" },
	{ key: "notion", name: "Notion", src: "/icons/macos/notion.png" },
	{ key: "obsidian", name: "Obsidian", src: "/icons/macos/obsidian.png" },
	{ key: "warp", name: "Warp", src: "/icons/macos/warp.png" },
	{ key: "raycast", name: "Raycast", src: "/icons/macos/raycast.png" },
	{ key: "claude", name: "Claude Code", src: "/icons/macos/claude.png" },
	{ key: "codex", name: "Codex", src: "/icons/macos/codex.png" },
	{ key: "figma", name: "Figma", src: "/icons/macos/figma.png" },
	{ key: "framer", name: "Framer", src: "/icons/macos/framer.png" },
	{ key: "lmstudio", name: "LM Studio", src: "/icons/macos/lmstudio.png" },
	{ key: "ollama", name: "Ollama", src: "/icons/macos/ollama.png" },
] as const

export default function AppDock() {
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

	useEffect(() => {
		const media = window.matchMedia("(max-width: 820px)")
		const onChange = () => setIsDesktop(!media.matches)
		onChange()
		media.addEventListener("change", onChange)
		return () => media.removeEventListener("change", onChange)
	}, [])

	if (!isDesktop) return null

	return (
		<Dock>
			{dockApps.map((app) => (
				<DockCard key={app.key} label={app.name}>
					<DockCardInner src={app.src} alt={app.name} />
				</DockCard>
			))}
		</Dock>
	)
}
