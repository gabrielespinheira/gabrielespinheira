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
    next: {
      revalidate: 60 * 60, // 1hr
    },
  })
  const data = await response.json()
  return data
}

export interface InfosResponse {
  github?: {
    contributions: number
    repositories: number
  }
}

export async function GET() {
  const reqGithub = await getContributions('gabrielespinheira')

  let response = {} as InfosResponse

  if (reqGithub.data) {
    const github = {
      contributions:
        reqGithub.data.user.contributionsCollection.contributionCalendar
          .totalContributions,
      repositories: reqGithub.data.user.repositories.totalCount,
    }

    response.github = github
  }

  return NextResponse.json(response)
}
