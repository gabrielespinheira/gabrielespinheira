import Head from 'next/head'

import { Mockup, Container, ContentInfo } from 'components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Araujo - Engenheiro de Software</title>
        <link rel="icon" href="/favicon/32.png" />
      </Head>

      <Container>
        <Mockup />
        <ContentInfo />
      </Container>
    </>
  )
}
