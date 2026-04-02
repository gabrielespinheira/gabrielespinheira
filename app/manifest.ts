import type { MetadataRoute } from "next"
import { siteProfile } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteProfile.name,
		short_name: siteProfile.name,
		description: siteProfile.shortDescription,
		start_url: "/",
		display: "standalone",
		background_color: "#0A0A0A",
		theme_color: "#0A0A0A",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	}
}
