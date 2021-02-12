import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
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
