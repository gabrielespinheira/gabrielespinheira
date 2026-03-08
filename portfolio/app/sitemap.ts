import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://gabs.app",
			lastModified: new Date("2026-03-07"),
			changeFrequency: "yearly",
			priority: 1,
		},
	]
}
