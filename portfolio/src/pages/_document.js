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
            content="Olá, me chamo Gabriel, sou engenheiro de software e entusiasta por design, com mais de 6 anos de experiência no mercado, trabalhando em diversos projetos atuando da concepção até a entrega."
          />
          <meta
            name="keywords"
            content="desenvolvedor, programador, engenheiro de software, front end, back end, full stack, ux, design, devops, ti, tecnologia, php, javascript, node, wordpress"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta name="language" content="Portuguese" />
          <meta name="author" content="Gabriel Araujo" />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Gabriel Araujo - Engenheiro de Software"
          />
          <meta property="og:url" content="https://ogabrielaraujo.com.br/" />
          <meta property="og:site_name" content="Gabriel Araujo" />
          <meta
            property="og:image"
            content="https://ogabrielaraujo.com.br/content/uploads/2020/04/thumbnail.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Gabriel Araujo - Engenheiro de Software"
          />
          <meta
            name="twitter:description"
            content="Olá, me chamo Gabriel, sou engenheiro de software e entusiasta por design, com mais de 6 anos de experiência no mercado, trabalhando em diversos projetos atuando da concepção até a entrega."
          />
          <meta
            name="twitter:image"
            content="https://ogabrielaraujo.com.br/content/uploads/2020/04/thumbnail.jpg"
          />
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
