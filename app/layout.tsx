import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { siteLinks, siteProfile, siteUrl } from "@/lib/site"
import { PostHogProvider } from "@/providers/PostHogProvider"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: `${siteProfile.name} — ${siteProfile.jobTitle} | ${siteProfile.location}`,
	description: siteProfile.description,
	manifest: "/manifest.webmanifest",
	keywords: [
		siteProfile.name,
		siteProfile.jobTitle,
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
	authors: [{ name: siteProfile.name, url: siteUrl }],
	creator: siteProfile.name,
	alternates: {
		canonical: siteUrl,
	},
	other: {
		"msapplication-config": "/browserconfig.xml",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: siteProfile.name,
		title: `${siteProfile.name} — ${siteProfile.jobTitle}`,
		description: `${siteProfile.shortDescription} React, Next.js, TypeScript, Node.js, AWS.`,
		images: [
			{
				url: "/og-image.jpeg",
				width: 1200,
				height: 630,
				alt: `${siteProfile.name} — ${siteProfile.jobTitle}`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@gabs_app",
		creator: "@gabs_app",
		title: `${siteProfile.name} — ${siteProfile.jobTitle}`,
		description: siteProfile.shortDescription,
		images: ["/og-image.jpeg"],
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
	"@graph": [
		{
			"@type": "Person",
			"@id": `${siteUrl}/#person`,
			name: siteProfile.name,
			givenName: "Gabriel",
			familyName: "Espinheira",
			url: siteUrl,
			image: {
				"@type": "ImageObject",
				"@id": `${siteUrl}/#avatar`,
				url: `${siteUrl}/avatar.jpg`,
				width: 400,
				height: 400,
				caption: siteProfile.name,
			},
			jobTitle: siteProfile.jobTitle,
			description: siteProfile.description,
			email: siteProfile.email,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Lisbon",
				addressCountry: "PT",
			},
			nationality: {
				"@type": "Country",
				name: "Brazil",
			},
			alumniOf: [
				{
					"@type": "EducationalOrganization",
					name: "BSc Computer Science",
				},
				{
					"@type": "EducationalOrganization",
					name: "Digital Tech Management (Post-grad)",
				},
			],
			hasOccupation: {
				"@type": "Occupation",
				name: siteProfile.jobTitle,
				description: "Designs and builds scalable full-stack web applications.",
				occupationLocation: {
					"@type": "Country",
					name: "Portugal",
				},
				skills: "React, Next.js, TypeScript, Node.js, AWS, PostgreSQL",
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
			knowsLanguage: [
				{ "@type": "Language", name: "Portuguese" },
				{ "@type": "Language", name: "English" },
			],
			worksFor: { "@id": `${siteUrl}/#organization` },
			sameAs: [siteLinks.github, siteLinks.linkedin, siteLinks.x],
		},
		{
			"@type": "WebSite",
			"@id": `${siteUrl}/#website`,
			url: siteUrl,
			name: siteProfile.name,
			description: siteProfile.shortDescription,
			inLanguage: "en",
			publisher: { "@id": `${siteUrl}/#person` },
			potentialAction: {
				"@type": "SearchAction",
				target: {
					"@type": "EntryPoint",
					urlTemplate: `${siteUrl}/?q={search_term_string}`,
				},
				"query-input": "required name=search_term_string",
			},
		},
		{
			"@type": "ProfilePage",
			"@id": `${siteUrl}/#webpage`,
			url: siteUrl,
			name: `${siteProfile.name} — ${siteProfile.jobTitle}`,
			description: siteProfile.description,
			inLanguage: "en",
			datePublished: "2024-01-01T00:00:00Z",
			dateModified: new Date().toISOString(),
			isPartOf: { "@id": `${siteUrl}/#website` },
			about: { "@id": `${siteUrl}/#person` },
			mainEntity: { "@id": `${siteUrl}/#person` },
			breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
			primaryImageOfPage: { "@id": `${siteUrl}/#avatar` },
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${siteUrl}/#breadcrumb`,
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: siteUrl,
				},
			],
		},
		{
			"@type": "Organization",
			"@id": `${siteUrl}/#organization`,
			name: siteProfile.name,
			url: siteUrl,
			logo: {
				"@type": "ImageObject",
				url: `${siteUrl}/avatar.jpg`,
				width: 400,
				height: 400,
			},
			contactPoint: {
				"@type": "ContactPoint",
				email: siteProfile.email,
				contactType: "professional",
			},
			founder: { "@id": `${siteUrl}/#person` },
			sameAs: [siteLinks.github, siteLinks.linkedin, siteLinks.x],
		},
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
			<head>
				<link rel="preconnect" href="https://eu-assets.i.posthog.com" />
				<link rel="dns-prefetch" href="https://eu-assets.i.posthog.com" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="antialiased">
				<PostHogProvider>{children}</PostHogProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
