import Head from 'next/head'
import React from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from 'styles/global'
import { fontFamily } from 'styles/fontFamily'

import data from 'data.json'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="description" content={data.home.description} />
        <meta name="keywords" content={data.keywords} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content={data.name} />
        <meta name="application-name" content={data.full_title} />
        <meta name="apple-mobile-web-app-title" content={data.full_title} />

        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.full_title} />
        <meta name="og:description" content={data.home.description} />
        <meta property="og:url" content={data.base_url} />
        <meta property="og:site_name" content={data.name} />
        <meta property="og:image" content={data.thumb} />
        <meta property="og:image:alt" content={data.thumb_alt} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.full_title} />
        <meta name="twitter:description" content={data.home.description} />
        <meta name="twitter:image" content={data.thumb} />

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
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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

      <GlobalStyle />

      <AnimatePresence mode="wait" initial={true}>
        <main className={fontFamily.className}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </>
  )
}

export default App
