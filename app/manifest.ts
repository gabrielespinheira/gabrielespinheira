import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Gabriel Espinheira",
		short_name: "Gabriel Espinheira",
		description: "Creative Software Engineer",
		start_url: "/",
		display: "standalone",
		background_color: "#0A0A0A",
		theme_color: "#0A0A0A",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	}
}
