"use client"

import { usePathname, useSearchParams } from "next/navigation"
import posthog from "posthog-js"
import { PostHogProvider as Provider } from "posthog-js/react"
import { Suspense, useEffect } from "react"

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
const posthogHost =
	process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com"
const hasPostHog = Boolean(posthogKey)

if (typeof window !== "undefined" && posthogKey) {
	posthog.init(posthogKey, {
		api_host: posthogHost,
		loaded: (posthog) => {
			if (process.env.NODE_ENV === "development") posthog.debug()
		},
		capture_pageview: false,
		capture_pageleave: true,
		autocapture: true,
		session_recording: {
			maskAllInputs: false,
			maskTextSelector: "[data-ph-mask]",
		},
		persistence: "localStorage",
		disable_session_recording: false,
		disable_persistence: false,
		disable_cookie: false,
		xhr_headers: {},
	})
}

function PostHogPageview() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (!hasPostHog) return

		if (pathname) {
			let url = window.origin + pathname
			if (searchParams?.toString()) {
				url = `${url}?${searchParams.toString()}`
			}
			posthog.capture("$pageview", {
				$current_url: url,
			})
		}
	}, [pathname, searchParams])

	return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	if (!hasPostHog) {
		return <>{children}</>
	}

	return (
		<Provider client={posthog}>
			{children}

			<Suspense>
				<PostHogPageview />
			</Suspense>
		</Provider>
	)
}
