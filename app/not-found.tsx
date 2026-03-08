import Link from "next/link"

export default function NotFound() {
	return (
		<main className="mx-auto flex min-h-dvh w-full max-w-5xl items-center justify-center px-4 py-12 text-center">
			<div className="flex max-w-2xl flex-col items-center gap-4">
				<h1 className="font-semibold text-4xl tracking-tight md:text-6xl">
					Sometimes you need to get lost to find your way.
				</h1>
				<h2 className="text-muted-foreground text-lg">
					Looks like you ventured too far, let&apos;s go home.
				</h2>
				<Link
					href="/"
					className="mt-2 inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
				>
					Go home
				</Link>
			</div>
		</main>
	)
}
