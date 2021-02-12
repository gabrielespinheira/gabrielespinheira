import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preload"
            as="font"
            crossOrigin=""
            href="/fonts/SFProDisplay-Regular.ttf"
          />
          <link
            rel="preload"
            as="font"
            crossOrigin=""
            href="/fonts/SFProDisplay-Semibold.ttf"
          />
          <link
            rel="preload"
            as="font"
            crossOrigin=""
            href="/fonts/SFProDisplay-Bold.ttf"
          />
          <meta
            name="description"
            content="Olá, sou Gabriel Araujo, Engenheiro de Software Full-Stack entusiasta em UX. Com mais de 6 anos de experiência trabalhando com desenvolvimento de sistemas."
          />
          <meta
            name="keywords"
            content="desenvolvedor, programador, engenheiro de software, front end, back end, full stack, ux, design, devops, ti, tecnologia, php, javascript, node, wordpress"
          />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="pt_BR" />
          <meta name="author" content="Gabriel Araujo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
