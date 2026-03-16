import { PostHogProvider } from "@/providers/PostHogProvider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

const siteUrl = "https://gabs.app"

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: "Gabriel Espinheira — Senior Software Engineer | Lisbon, Portugal",
	description:
		"Gabriel Espinheira is a Senior Software Engineer with 11 years of experience building scalable, aesthetic digital products. Full-stack expertise in React, Next.js, TypeScript, Node.js, and AWS. Based in Lisbon, originally from Rio de Janeiro.",
	keywords: [
		"Gabriel Espinheira",
		"Senior Software Engineer",
		"Full Stack Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Node.js",
		"AWS",
		"Lisbon",
		"Portugal",
		"Software Engineer Portfolio",
	],
	authors: [{ name: "Gabriel Espinheira", url: siteUrl }],
	creator: "Gabriel Espinheira",
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "Gabriel Espinheira",
		title: "Gabriel Espinheira — Senior Software Engineer",
		description:
			"Senior Software Engineer with 11 years of experience building scalable, aesthetic digital products. React, Next.js, TypeScript, Node.js, AWS.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Gabriel Espinheira — Senior Software Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@gabs_app",
		creator: "@gabs_app",
		title: "Gabriel Espinheira — Senior Software Engineer",
		description:
			"Senior Software Engineer with 11 years of experience building scalable, aesthetic digital products.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Gabriel Espinheira",
	url: siteUrl,
	image: `${siteUrl}/avatar.jpg`,
	jobTitle: "Senior Software Engineer",
	description:
		"Senior Software Engineer with 11 years of experience building scalable, aesthetic digital products. Full-stack expertise in React, Next.js, TypeScript, Node.js, and AWS.",
	email: "gabriiel66@gmail.com",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Lisbon",
		addressCountry: "PT",
	},
	nationality: {
		"@type": "Country",
		name: "Brazil",
	},
	alumniOf: {
		"@type": "EducationalOrganization",
		name: "Computer Science (BSc)",
	},
	knowsAbout: [
		"React",
		"Next.js",
		"Node.js",
		"TypeScript",
		"PHP",
		"AWS",
		"PostgreSQL",
		"MySQL",
		"Docker",
		"Tailwind CSS",
		"Vite",
		"Convex",
		"Software Engineering",
		"Full Stack Development",
		"AI-Augmented Coding",
		"Prompt Engineering",
	],
	sameAs: [
		"https://github.com/gabrielespinheira",
		"https://linkedin.com/in/gabrielespinheira",
		"https://x.com/gabs_app",
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} dark`}
		>
			<body className="antialiased">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<PostHogProvider>{children}</PostHogProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
