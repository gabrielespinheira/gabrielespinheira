import { NextResponse } from 'next/server'

async function getContributions(username: string) {
  const headers = {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  }
  const body = {
    query: `query {
      user(login: "${username}") {
        name
        repositories {
          totalCount
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }`,
  }
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  })
  const data = await response.json()
  return data
}

export async function GET() {
  const reqGithub = await getContributions('gabrielespinheira')

  const github = {
    contributions:
      reqGithub.data.user.contributionsCollection.contributionCalendar.totalContributions,
    repositories: reqGithub.data.user.repositories.totalCount,
  }

  return NextResponse.json({ status: true, github })
}
