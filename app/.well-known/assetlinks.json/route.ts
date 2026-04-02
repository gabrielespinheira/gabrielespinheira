const assetLinks: Array<unknown> = []

export async function GET() {
	// Keep this empty until an Android app claims the domain with a real package
	// name and certificate fingerprint.
	return Response.json(assetLinks)
}
