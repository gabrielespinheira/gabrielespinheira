import NextHead from 'next/head'

interface IHead {
  title?: string
}

const Head = ({ title = 'Gabriel Araujo - Software Engineer' }: IHead) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta
        name="description"
        content="Gabriel Araujo, a creative software engineer who works with FullStack Development and Design"
      />
      <meta name="robots" content="index, archive" />

      <link rel="shortcut icon" href="/icons/16x16.png" />
      <meta
        name="application-name"
        content="Gabriel Araujo - Software Engineer"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Gabriel Araujo - Software Engineer"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#0070F3" />
      <link rel="manifest" href="/manifest.json" />

      <link rel="apple-touch-icon" href="/icons/512x512.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/180x180.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/167x167.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/16x16.png" />
      <link rel="mask-icon" href="/icons/180x180.png" color="#5bbad5" />
    </NextHead>
  )
}

export default Head
