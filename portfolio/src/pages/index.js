import Head from 'next/head'

import { Mockup, Container, ContentInfo } from 'components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Araujo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Mockup />

        <ContentInfo />
      </Container>
    </>
  )
}
