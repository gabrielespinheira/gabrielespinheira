import { describe, expect, it } from "bun:test"
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import manifest from "../app/manifest"

const root = path.resolve(import.meta.dir, "..")

function read(relativePath: string) {
	return readFileSync(path.join(root, relativePath), "utf8")
}

describe("site artifact files", () => {
	it("ships the expected public artifact files", () => {
		expect(existsSync(path.join(root, "public/browserconfig.xml"))).toBe(true)
		expect(existsSync(path.join(root, "public/llms-full.txt"))).toBe(true)
		expect(existsSync(path.join(root, "public/site.webmanifest"))).toBe(true)
		expect(existsSync(path.join(root, "public/security.txt"))).toBe(true)
		expect(existsSync(path.join(root, "public/.well-known/security.txt"))).toBe(
			true,
		)
	})

	it("keeps the llms files machine-friendly", () => {
		const llms = read("public/llms.txt")
		const full = read("public/llms-full.txt")

		expect(llms).toContain("# Gabriel Espinheira")
		expect(llms).toContain("## Links")
		expect(full).toContain("## Summary")
		expect(full).toContain("## Stack")
		expect(full).toContain("## Contact")
	})

	it("ships canonical security.txt content at both paths", () => {
		const rootSecurity = read("public/security.txt")
		const wellKnownSecurity = read("public/.well-known/security.txt")

		expect(rootSecurity).toBe(wellKnownSecurity)
		expect(rootSecurity).toContain("Contact: mailto:gabriiel66@gmail.com")
		expect(rootSecurity).toContain(
			"Canonical: https://gabs.app/.well-known/security.txt",
		)
	})

	it("ships browserconfig and site.webmanifest aliases", () => {
		const browserconfig = read("public/browserconfig.xml")
		const siteManifest = JSON.parse(read("public/site.webmanifest"))

		expect(browserconfig).toContain("<browserconfig>")
		expect(browserconfig).toContain("/mstile-150x150.png")
		expect(siteManifest.icons).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ src: "/icon-192.png" }),
				expect.objectContaining({ src: "/icon-512.png" }),
			]),
		)
	})
})

describe("dynamic site artifacts", () => {
	it("publishes a manifest with PNG icons", () => {
		const data = manifest()

		expect(data.name).toBe("Gabriel Espinheira")
		expect(data.icons).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					src: "/icon-192.png",
					sizes: "192x192",
					type: "image/png",
				}),
				expect.objectContaining({
					src: "/icon-512.png",
					sizes: "512x512",
					type: "image/png",
				}),
			]),
		)
	})

	it("serves an empty assetlinks payload", async () => {
		const { GET } = await import("../app/.well-known/assetlinks.json/route")
		const response = await GET()

		expect(response.headers.get("content-type")).toContain("application/json")
		expect(await response.json()).toEqual([])
	})

	it("serves safe apple association payloads from both routes", async () => {
		const rootRoute = await import("../app/apple-app-site-association/route")
		const wellKnownRoute = await import(
			"../app/.well-known/apple-app-site-association/route"
		)

		const [rootResponse, wellKnownResponse] = await Promise.all([
			rootRoute.GET(),
			wellKnownRoute.GET(),
		])

		for (const response of [rootResponse, wellKnownResponse]) {
			expect(response.headers.get("content-type")).toContain("application/json")
			expect(await response.json()).toEqual({
				applinks: {
					apps: [],
					details: [],
				},
			})
		}
	})
})
