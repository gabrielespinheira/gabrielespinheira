"use client"

import { useEffect, useState } from "react"
import { Dock, DockCard, DockCardInner } from "@/components/ui/dock"

const dockApps = [
	{ id: 1, key: "zen", name: "Zen Browser", src: "/icons/macos/zen.png" },
	{ id: 2, key: "notion", name: "Notion", src: "/icons/macos/notion.png" },
	{
		id: 3,
		key: "obsidian",
		name: "Obsidian",
		src: "/icons/macos/obsidian.png",
	},
	{ id: 4, key: "warp", name: "Warp", src: "/icons/macos/warp.png" },
	{ id: 5, key: "raycast", name: "Raycast", src: "/icons/macos/raycast.png" },
	{
		id: 6,
		key: "antigravity",
		name: "Antigravity",
		src: "/icons/macos/antigravity.png",
	},
	{ id: 7, key: "claude", name: "Claude Code", src: "/icons/macos/claude.png" },
	{ id: 8, key: "codex", name: "Codex", src: "/icons/macos/codex.png" },
	{ id: 9, key: "cursor", name: "Cursor", src: "/icons/macos/cursor.png" },
	{ id: 10, key: "figma", name: "Figma", src: "/icons/macos/figma.png" },
	{ id: 11, key: "framer", name: "Framer", src: "/icons/macos/framer.png" },
	{
		id: 12,
		key: "lmstudio",
		name: "LM Studio",
		src: "/icons/macos/lmstudio.png",
	},
	{ id: 13, key: "ollama", name: "Ollama", src: "/icons/macos/ollama.png" },
]

export default function AppDock() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const media = window.matchMedia("(max-width: 820px)")
		const onChange = () => setIsMobile(media.matches)
		onChange()
		media.addEventListener("change", onChange)
		return () => media.removeEventListener("change", onChange)
	}, [])

	if (isMobile) return null

	return (
		<Dock>
			{dockApps.map((app) => (
				<DockCard key={app.key} id={`${app.id}`} label={app.name}>
					<DockCardInner src={app.src} id={`${app.id}`}>
						<span
							className="h-full w-full bg-center bg-contain bg-no-repeat"
							style={{ backgroundImage: `url(${app.src})` }}
						/>
					</DockCardInner>
				</DockCard>
			))}
		</Dock>
	)
}
