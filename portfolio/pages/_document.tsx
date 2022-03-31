import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <meta
            name="description"
            content="I've been working with software development since 2014, from startups to big companies in different fields, which was fundamental for my career. Since the beginning, I have worked with Front-end and Back-end, and now I'm using mainly Javascript, NodeJS and ReactJS."
          />
          <meta
            name="keywords"
            content="developer, software engineer, senior software engineer, front end, back end, full stack, design, javascript, typescript, nodejs, nextjs"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="author" content="Gabriel Araujo" />
          <meta
            name="application-name"
            content="Gabriel Araujo - Software Engineer"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Gabriel Araujo - Software Engineer"
          />

          {/* OG Tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Gabriel Araujo - Software Engineer"
          />
          <meta
            name="og:description"
            content="I've been working with software development since 2014, from startups to big companies in different fields, which was fundamental for my career. Since the beginning, I have worked with Front-end and Back-end, and now I'm using mainly Javascript, NodeJS and ReactJS."
          />
          <meta property="og:url" content="https://ogabrielaraujo.com.br/" />
          <meta property="og:site_name" content="Gabriel Araujo" />
          <meta property="og:image" content="/thumb.jpg" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Gabriel Araujo - Software Engineer"
          />
          <meta
            name="twitter:description"
            content="I've been working with software development since 2014, from startups to big companies in different fields, which was fundamental for my career. Since the beginning, I have worked with Front-end and Back-end, and now I'm using mainly Javascript, NodeJS and ReactJS."
          />
          <meta name="twitter:image" content="/thumb.jpg" />

          {/* Icons */}
          <link rel="shortcut icon" href="/icons/16x16.png" />
          <link rel="apple-touch-icon" href="/icons/512x512.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/180x180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/167x167.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/16x16.png"
          />
          <link rel="mask-icon" href="/icons/180x180.png" color="#0070F3" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="theme-color" content="#FFFFFE" />
          <meta
            name="theme-color"
            content="#FFFFFE"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#050406"
            media="(prefers-color-scheme: dark)"
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
