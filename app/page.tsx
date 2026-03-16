import AppDock from "@/components/blocks/app-dock"
import HomeGrid from "@/components/blocks/home/home-grid"

export default function Homepage() {
	return (
		<main className="relative mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center overflow-hidden max-[820px]:overflow-visible bg-background px-4 py-12 pb-32 md:px-8 md:py-0 md:pb-40">
			<h1 className="sr-only">
				Gabriel Espinheira — Senior Software Engineer based in Lisbon, Portugal
			</h1>
			<HomeGrid />

			<AppDock />
		</main>
	)
}
