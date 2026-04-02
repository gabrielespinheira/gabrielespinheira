export const appleAppSiteAssociation = {
	applinks: {
		apps: [],
		details: [],
	},
}

export function appleAppSiteAssociationResponse() {
	return new Response(JSON.stringify(appleAppSiteAssociation), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	})
}
