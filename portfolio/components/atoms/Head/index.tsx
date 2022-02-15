import Head from 'next/head'

interface IHead {
  title?: string
}

export default ({ title = 'Gabriel Araujo - Software Engineer' }: IHead) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png"></link>
      <link
        rel="preload"
        href="/fonts/SFProDisplay-Regular.otf"
        as="font"
        crossOrigin=""
      />
    </Head>
  )
}
