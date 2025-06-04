'use server'

export async function GET() {
  const response = { status: true, now: new Date().toISOString() }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
