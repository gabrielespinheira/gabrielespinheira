import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { PostHogProvider } from "@/providers/PostHogProvider"
import { Analytics } from "@vercel/analytics/next"
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
	title: "Gabriel Espinheira - Creative Software Engineer",
	description: "Building aesthetic interfaces through scalable software.",
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
				<PostHogProvider>{children}</PostHogProvider>
				<Analytics />
			</body>
		</html>
	)
}
